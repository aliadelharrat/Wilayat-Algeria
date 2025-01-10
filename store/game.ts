import { create } from "zustand";
import wilayat from "@/lib/wilayat";
import randomItem from "random-item";
import arrayShuffle from "array-shuffle";
const _ = require("lodash");

type Option = {
  name: string;
  number: number;
  status: boolean;
};

type State = {
  wilayaNumber: number;
  options: Option[];
  wilayat: Option[];
  gameStatus: "playing" | "finished";
  errorMessage: string | null;
};

type Actions = {
  new: () => void;
  check: (n: number) => void;
  finish: () => void;
};

export const useStore = create<State & Actions>((set, get) => ({
  wilayaNumber: 0,
  options: [],
  wilayat: wilayat,
  gameStatus: "playing",
  errorMessage: null,
  new: () =>
    set((state) => {
      const randomWilaya: Option | undefined = getRandomWilaya(state.wilayat);

      if (!randomWilaya) {
        return {
          gameStatus: "finished",
        };
      }

      // TODO: if all wilayat are mastered, do different thing!
      return {
        wilayaNumber: randomWilaya?.number,
        options: getRandomOptions(randomWilaya!),
      };
    }),
  check: (n: number) =>
    set((state) => {
      if (n === state.wilayaNumber) {
        const updatedWilayat = state.wilayat.map((w: Option) => {
          if (w.number === n) {
            return { ...w, status: true };
          }
          return w;
        });

        const randomWilaya = getRandomWilaya(updatedWilayat);

        if (!randomWilaya) {
          return {
            wilayat: updatedWilayat,
            gameStatus: "finished",
          };
        }

        return {
          wilayat: updatedWilayat,
          wilayaNumber: randomWilaya.number,
          options: getRandomOptions(randomWilaya),
          errorMessage: null,
        };
      } else {
        return {
          errorMessage: "إختيارك خطأ، أعد المحاولة من جديد",
        };
      }
    }),
  finish: () =>
    set(() => ({
      gameStatus: "finished",
    })),
}));

function getRandomWilaya(wilayat: Option[]) {
  const availableWilayat = wilayat.filter((w) => w.status !== true);

  if (availableWilayat.length === 0) {
    return undefined;
  }

  return randomItem(availableWilayat);
}

function getRandomOptions(randomWilaya: Option) {
  if (wilayat.length < 4) {
    throw new Error("Not enough options to generate random choices.");
  }

  let randomOptions;

  do {
    randomOptions = _.sampleSize(wilayat, 3);
  } while (randomOptions.includes(randomWilaya));

  return arrayShuffle([...randomOptions, randomWilaya]);
}
