import { useEffect, useRef } from "react";
import { drawRegularPolygon } from "@/components/regular-polygon/RegularPolygon.utils";

type Props = {
  size: number;
  numberOfEdges: number;
};
export function RegularPolygon({ size, numberOfEdges }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const context = canvasRef.current.getContext("2d")!;
    drawRegularPolygon({ context, size, numberOfEdges });
  }, [numberOfEdges, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}
