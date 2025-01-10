import { Button } from "@/components/ui/button";
import { useStore } from "@/store/game";

export type TOption = {
  name: string;
  number: number;
};

export default function Option({ option }: { option: TOption }) {
  const check = useStore((s) => s.check);

  return (
    <li>
      <Button
        size={"lg"}
        className="w-full text-lg"
        onClick={() => check(option.number)}
        variant={"outline"}
      >
        {option.name}
      </Button>
    </li>
  );
}
