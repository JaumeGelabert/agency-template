import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { data } from "./data";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <div className="bg-neutral-100 border-t flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 md:flex md:flex-row justify-start items-start w-full max-w-[1000px] py-10 px-6 gap-4 md:gap-40 ">
        {data.map((section, index) => (
          <FooterColumn key={index} data={section} />
        ))}
      </div>
      <p className="text-sm text-neutral-500 mb-4">
        Made by{" "}
        <Link
          href={config.links.x}
          className="text-black hover:text-blue-500 transition-all font-medium"
        >
          @Jaume_0to1
        </Link>
      </p>
    </div>
  );
}
