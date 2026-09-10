// opentype's own toPathData() emits bare trailing dots and, at some offsets, NaN.
// Walk the commands and format the numbers here instead.
const n = (v) => {
  if (!Number.isFinite(v)) throw new Error(`non-finite coordinate: ${v}`);
  return String(Number(v.toFixed(2)));
};

export function toD(path) {
  return path.commands
    .map((c) => {
      switch (c.type) {
        case "M":
        case "L":
          return `${c.type}${n(c.x)} ${n(c.y)}`;
        case "Q":
          return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
        case "C":
          return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
        case "Z":
          return "Z";
        default:
          throw new Error(`unhandled command: ${c.type}`);
      }
    })
    .join("");
}

export function run(font, text, size, trackEm, x, y) {
  const track = size * trackEm;
  let cursor = x;
  const parts = [];
  for (const ch of text) {
    parts.push(toD(font.getPath(ch, cursor, y, size)));
    cursor += font.getAdvanceWidth(ch, size) + track;
  }
  return { d: parts.join(" "), parts, width: cursor - x - track };
}
