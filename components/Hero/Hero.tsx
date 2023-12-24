import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import HeroPill from "./HeroPill";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-start items-center mt-20">
        <HeroPill />
        <h1 className="text-6xl font-medium mt-8 text-center max-w-[600px]">
          Use this template to create your own site
        </h1>
        <div className="flex flex-col justify-center items-center mt-7 gap-2 text-2xl text-neutral-500 text-center max-w-[500px]">
          <h2>
            Increase your development speed. Customize it and make it yours.
          </h2>
        </div>
        <Link href={config.links.repo}>
          <Button size="lg" className="mt-6 text-md">
            Get this template
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <HeroCarousel />
      </div>
      {/* Background */}
      <BackgroundSquares />
    </>
  );
}
