import Link from "next/link";

export default function FooterColumn({ data }: any) {
  return (
    <div className="flex flex-col justify-start items-start">
      <p className="font-medium mb-4">{data.title}</p>
      {data.links.map((link: any, index: number) => (
        <Link
          key={index}
          href={link.href}
          className="text-sm text-neutral-500 hover:text-neutral-700 transition-all mb-4"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
