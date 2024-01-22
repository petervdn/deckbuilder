"use client";

import styles from "./page.module.css";
import { HexGrid } from "@/components/hex-grid/HexGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>untitled deckbuilder</h1>
      <HexGrid
        columns={[
          { offset: 0, numberOfHexagons: 6 },
          { offset: 0.5, numberOfHexagons: 6 },
          { offset: 0, numberOfHexagons: 6 },
          { offset: 0.5, numberOfHexagons: 6 },
          { offset: 0, numberOfHexagons: 6 },
          { offset: 0.5, numberOfHexagons: 6 },
          { offset: 0, numberOfHexagons: 6 },
        ]}
        hexagonSize={80}
      />
    </main>
  );
}
