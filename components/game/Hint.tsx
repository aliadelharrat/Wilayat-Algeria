import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useStore } from "@/store/game";

export default function Hint() {
  const wilayat = useStore((s) => s.wilayat);
  const wilayaNumber = useStore((s) => s.wilayaNumber);
  const wilayaName = wilayat.filter((w) => w.number === wilayaNumber)[0]?.name;

  return (
    <div>
      <Dialog>
        <DialogTrigger className={buttonVariants({ variant: "secondary" })}>
          تلميح
        </DialogTrigger>
        <DialogContent className="min-h-screen">
          <DialogHeader>
            <DialogTitle className="sr-only">تلميح</DialogTitle>
            <DialogDescription>
              <Image
                fill
                alt={wilayaName}
                src={`/wilayat/${wilayaNumber}.jpg`}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
