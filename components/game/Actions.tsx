import { useStore } from "@/store/game";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Hint from "./Hint";

export default function Actions() {
  const next = useStore((s) => s.new);
  return (
    <>
      <Separator />
      <div className="flex items-center justify-between">
        <Hint />
        <Button variant={"secondary"} onClick={next}>
          تخطي هذا الرقم
        </Button>
      </div>
    </>
  );
}
