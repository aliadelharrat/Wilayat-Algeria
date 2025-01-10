"use client";

import { useEffect } from "react";
import Options from "@/components/game/Options";
import WilayaNumber from "@/components/game/WilayaNumber";
import { useStore } from "@/store/game";
import { Button } from "@/components/ui/button";
import Error from "@/components/game/Error";
import Actions from "@/components/game/Actions";

export default function Game() {
  const newGame = useStore((s) => s.new);
  useEffect(() => newGame(), [newGame]);

  const gameStatus = useStore((s) => s.gameStatus);
  const errorMessage = useStore((s) => s.errorMessage);

  if (gameStatus === "finished") {
    return (
      <main>
        <p>Game is finished</p>
        <Button>Play Again!</Button>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto space-y-5 my-10" dir="rtl">
      {errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <p className="text-lg text-center text-muted-foreground">
          ما هي الولاية الجزائرية الموافقة لهذا الرقم ؟
        </p>
      )}
      <WilayaNumber />
      <Options />
      <Actions />
    </main>
  );
}
