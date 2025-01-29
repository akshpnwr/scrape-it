import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";

export default function Logo({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-2xl font-extrabold",
        fontSize,
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareDashedMousePointer className="stroke-white" size={iconSize} />
      </div>
      <div>
        <span className="bg-gradient-to-t from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-700 dark:text-stone-400">Scrape</span>
      </div>
    </Link>
  );
}
