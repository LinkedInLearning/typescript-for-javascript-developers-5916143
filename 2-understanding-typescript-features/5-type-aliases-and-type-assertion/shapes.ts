type Point = {
  x: number;
  y: number;
};

type Circle2 = {
  center: Point;
  radius: number;
  kind: "circle";

};

const circle: Circle = {
  center: { x: 0, y: 0 },
  radius: 10,
  kind: "circle"
};
