import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";

const prisma = new PrismaClient();

const getHandler: NextApiHandler = async (req, res) => {
  if (!req.headers.referer) return res.status(400).send("Bad Request");

  const referer = new URL(req.headers.referer).hostname;

  let site = await prisma.site.findUnique({
    where: { referer },
  });

  if (!site) return res.send(0);

  res.send(site.count);
};

const postHandler: NextApiHandler = async (req, res) => {
  if (!req.headers.referer) return res.status(400).send("Bad Request");

  const referer = new URL(req.headers.referer).hostname;

  const site = await prisma.site.findUnique({
    where: { referer },
  });

  if (!site) {
    await prisma.site.create({
      data: {
        referer,
        count: 1,
      },
    });

    return res.send("OK");
  }

  await prisma.site.update({
    where: { referer },
    data: { count: site.count + 1 },
  });

  res.send("OK");
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    case "POST":
      return postHandler(req, res);
    default:
      return res.status(405).send("Method Not Allowed");
  }
};

export default handler;
