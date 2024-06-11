// Define the Square type
type Square = {
  kind: "square";
  sideLength: number;
};

// Define the Triangle type
type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Circle = {
  center: Point;
  radius: number;
  kind: "circle";

};