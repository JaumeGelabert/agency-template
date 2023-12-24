import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: string;
  withText?: boolean;
}

export default function Logo({ size, withText }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row justify-start items-end ",
        withText && "gap-3"
      )}
    >
      <div className={cn("relative", size)}>
        <Image
          src="/logo.png"
          alt="Logo 5th Side Software Studio"
          fill
          priority
        />
      </div>
      {withText && <p className="text-lg font-semibold">5th Side</p>}
    </Link>
  );
}
