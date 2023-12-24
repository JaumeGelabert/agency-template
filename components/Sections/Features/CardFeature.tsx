import Link from "next/link";

interface Props {
  imageSrc: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function CardFeature({
  imageSrc,
  icon,
  title,
  description,
  href
}: Props) {
  return (
    <Link href={href}>
      <div className="flex flex-col justify-start items-center rounded-lg border bg-neutral-50 hover:shadow transition-all">
        <div className="w-full rounded-t-lg h-[180px] bg-white border-b"></div>
        <div className="flex flex-col justify-start items-start w-full py-2 px-4">
          <div className="flex flex-row justify-start items-center gap-1">
            {icon}
            <p className="text-lg font-medium">{title}</p>
          </div>
          <p className="text-neutral-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
