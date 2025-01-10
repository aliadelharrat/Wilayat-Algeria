import { useStore } from "@/store/game";

export default function WilayaNumber() {
  return (
    <p className="text-6xl font-mono font-extrabold text-center">
      {useStore((s) => s.wilayaNumber)}
    </p>
  );
}
