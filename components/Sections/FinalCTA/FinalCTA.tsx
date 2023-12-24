import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tweet } from "react-tweet";

const tweets = [
  "1728096885783552256",
  "1723490289271046320",
  "1732180484887626112"
];

export default function FinalCTA() {
  return (
    <div className="mt-20 flex bg-neutral-100 flex-col justify-center items-center py-10">
      <div className="w-full max-w-[1000px] flex flex-col justify-start items-center">
        <p className="text-3xl font-semibold max-w-[500px] mt-2 text-center mx-6">
          {`I'm on 𝕏`}
        </p>
        <p className="mt-2 mb-4 max-w-sm text-center text-neutral-500 mx-6">
          I mainly tweet about Software Development and my way to create a
          Software Studio.
        </p>
        <Link href="https://twitter.com/jaume_0to1">
          <Button size="lg">
            <p>Follow me on</p>
            <p className="ml-2">𝕏</p>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 items-start mx-6">
        {tweets.map((tweetId, index) => (
          <Tweet key={index} id={tweetId} />
        ))}
      </div>
    </div>
  );
}
