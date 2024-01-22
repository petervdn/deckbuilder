import { RegularPolygon } from "@/components/regular-polygon/RegularPolygon";

type Props = {
  size: number;
};
export function Hexagon({ size }: Props) {
  return <RegularPolygon size={size} numberOfEdges={6} />;
}
