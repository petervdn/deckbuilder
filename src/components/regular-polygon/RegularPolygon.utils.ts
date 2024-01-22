export function drawRegularPolygon({
  context,
  numberOfEdges,
  size,
}: {
  context: CanvasRenderingContext2D;
  numberOfEdges: number;
  size: number;
}) {
  const radiansPart = (2 * Math.PI) / numberOfEdges;
  const radius = size * 0.5;
  const center = { x: radius, y: radius };

  // context.beginPath();
  // context.arc(radius, radius, radius, 0, Math.PI * 2);
  // context.strokeStyle = "green";
  // context.stroke();

  context.beginPath();
  for (let i = 0; i < numberOfEdges; i++) {
    const { x, y } = sumPoints(
      getPointOnCircle({ radius, radians: radiansPart * i }),
      center,
    );
    i === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
  }
  context.closePath();
  context.lineWidth = 2;
  context.strokeStyle = "white";

  context.stroke();
}

function sumPoints(point1: Point, point2: Point): Point {
  return { x: point1.x + point2.x, y: point1.y + point2.y };
}

type Point = {
  x: number;
  y: number;
};

function getPointOnCircle({
  radius,
  radians,
}: {
  radius: number;
  radians: number;
}): Point {
  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}
