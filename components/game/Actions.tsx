import { useStore } from "@/store/game";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Actions() {
  const next = useStore((s) => s.new);
  return (
    <>
      <Separator />
      <div className="flex items-center justify-between">
        <Button variant={"secondary"}>تلميح</Button>
        <Button variant={"secondary"} onClick={next}>
          تخطي هذا الرقم
        </Button>
      </div>
    </>
  );
}
