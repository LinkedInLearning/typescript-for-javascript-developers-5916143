function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) { }
}

function exhaustiveCheck(x: never): never {
  throw new Error("Unexpected value: " + x);
}

// Example of exhaustive check in a union type
type Shape = Circle | Square | Triangle;
function getShapeArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return 0.5 * shape.base * shape.height;
    default:
      return exhaustiveCheck(shape);
  }
}
