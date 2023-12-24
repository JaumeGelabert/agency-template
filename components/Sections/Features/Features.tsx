import { BoxIcon } from "lucide-react";
import CardFeature from "./CardFeature";

const features = [
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  },
  {
    imageSrc: "",
    icon: <BoxIcon className="h-4 w-4" />,
    title: "Title",
    description: "Tell something about every feature. Dont put too much text.",
    href: "/"
  }
];

export default function Features() {
  return (
    <>
      <div className="mt-28 flex flex-col justify-start items-center mx-6 md:mx-0 ">
        <div className="col-span-4 bg-white flex flex-col justify-center items-center">
          <p className="text-4xl font-medium text-center">
            Describe your product
          </p>
          <p className="text-neutral-600 text-xl text-center max-w-[700px] mt-4">
            You need to show the user how can you help them solve their
            problems. Dont put features, put benefits.
          </p>
        </div>
        <div className="flex flex-col justify-start md:grid md:grid-cols-3 w-full max-w-[1000px] gap-4 mt-8">
          {features.map((card, index) => (
            <CardFeature key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
