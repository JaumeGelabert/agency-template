import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { dataLeft, dataRight } from "./data";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Section1() {
  return (
    <div className="mt-28 flex flex-row justify-center">
      <div className="w-full max-w-[1200px] md:grid grid-cols-8">
        <div className="col-span-2 text-center md:h-[500px] flex md:flex-col justify-center gap-10 md:gap-0 md:justify-around items-center mb-6 md:mb-0">
          {dataLeft.map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              className="max-h-[75px] md:max-h-[150px]"
            />
          ))}
        </div>
        <div className="col-span-4 bg-white flex flex-col justify-center items-center">
          <p className="text-4xl font-medium text-center mx-10 md:mx-0">
            Write a punching line here
          </p>
          <p className="text-neutral-600 text-xl text-center mx-20 md:mx-6 my-8">
            {`So users will engage with your site and convert. Something like
            "Stop wasting time. Use this temaplate."`}
          </p>
          <Link href={config.links.repo}>
            <Button>
              Get this temaplate <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="col-span-2 text-center md:h-[500px] flex md:flex-col justify-center gap-10 md:gap-0 md:justify-around items-center mt-6 md:mt-0">
          {dataRight.map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              className="max-h-[75px] md:max-h-[150px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
