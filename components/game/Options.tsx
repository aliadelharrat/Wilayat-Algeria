import { useStore } from "@/store/game";
import Option from "./Option";

export default function Options() {
  const options = useStore((s) => s.options);

  return (
    <ul className="gap-2 grid grid-cols-1">
      {options.map((o) => (
        <Option key={o?.number} option={o} />
      ))}
    </ul>
  );
}
