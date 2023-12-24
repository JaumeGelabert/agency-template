import Image from "next/image";

const logos = [
  {
    src: "/slack.png",
    alt: "Slack"
  },
  {
    src: "/amazon.png",
    alt: "Amazon"
  },
  {
    src: "/spotify.svg",
    alt: "Spotify"
  },
  {
    src: "/microsoft.png",
    alt: "Microsoft"
  },
  {
    src: "/airbnb.png",
    alt: "Airbnb"
  }
];

export default function UsersCloud() {
  return (
    <div className="flex flex-col justify-start items-center mt-14 ">
      <p className="text-neutral-500">Join 1,000+ companies already growing</p>
      <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-12 mt-6">
        {logos.map(({ src, alt }, index) => (
          <div
            className={`relative ${
              index === logos.length - 1 &&
              "col-span-2 flex flex-row justify-center"
            }`}
            key={index}
          >
            <Image
              src={src}
              alt={alt}
              width="100"
              height="100"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
