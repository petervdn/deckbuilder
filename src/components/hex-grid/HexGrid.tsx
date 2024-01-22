import styles from "./HexGrid.module.css";
import { Hexagon } from "@/components/hexagon/Hexagon";
import { Fragment } from "react";

type HexGridColumn = {
  numberOfHexagons: number;
  offset: number;
};

type Props = {
  columns: Array<HexGridColumn>;
  hexagonSize: number;
};

export function HexGrid({ columns, hexagonSize }: Props) {
  return (
    <div className={styles.container}>
      {columns.map(({ numberOfHexagons, offset }, columnIndex) => {
        return (
          <Fragment key={columnIndex}>
            {Array.from({ length: numberOfHexagons }, (_, index) => index).map(
              (hexagonIndex) => (
                <div
                  key={`${columnIndex}-${hexagonIndex}`}
                  className={styles.hexagonContainer}
                  style={{
                    left:
                      columnIndex *
                      hexagonSize *
                      (1 - 0.5 * Math.cos(Math.PI / 3)),
                    top:
                      hexagonIndex * hexagonSize * Math.sin(Math.PI / 3) +
                      offset * Math.sin(Math.PI / 3) * hexagonSize,
                  }}
                >
                  <Hexagon size={hexagonSize} key={hexagonIndex} />
                </div>
              ),
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
