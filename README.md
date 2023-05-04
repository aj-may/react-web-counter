# 🕺 React Web Counter

A groovy library to add a retro web counter to your modern react websites

## Installation

```
npm install react-web-counter
```

## Getting Started

<!-- TODO -->

## API

**WebCounterProvider**
component

```
props:
  - api?: string
    default: https://
```

**useWebCounter**
hook

```
args:
  - none

returns: number
```

**WebCounter**
component

```
props:
  - theme?: WebCounterTheme
    default: {
      foreground: '#000',
      background: '#FFF',
      fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      fontSize: '1.2rem',
    }
```

**WebCounterTheme**
type

```
{
  foreground?: string,
  background?: string,
  fontFamily?: string,
  fontSize?: string,
}
```
