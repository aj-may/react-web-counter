import { useWebCounter } from "./useWebCounter";

export const WebCounter = () => {
  const { count } = useWebCounter();
  if (!count) return null;

  const digits = count.toString().padStart(6, "0").split("");

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      {digits.map((d, i) => (
        <div key={i} style={{ padding: "0.2rem", border: "1px solid black" }}>
          {d}
        </div>
      ))}
    </div>
  );
};
