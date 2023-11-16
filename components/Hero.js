import { socialLiks } from "data/socialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse gap-6 sm:flex-row justify-between sm:items-center">
        <div className="max-w-[500px] w-full">
          <h1 className="text-4xl font-bold">Dev</h1>
          <p className="text-lg opacity-50">Solo developer kinda student</p>
          <p className="text-base opacity-60 mt-5">
            Learning about web and trying to help out other devs in the process.
            I love open source and writing about tech occasionally.
          </p>
        </div>
        <div>
          <Image
            src={`https://avatars.githubusercontent.com/u/122960451`}
            width={200}
            height={200}
            alt="Github avatar"
            className="rounded-full cursor-none"
          />
        </div>
      </div>
      <div className="mt-16">
        <p className="text-xl opacity-80">
          {`I'm`} <strong className="text-[#ff3366]">Dev</strong>, a 19-year-old
          student belonging to the Homo Sapiens species. {`I'm`} a brother, a
          son, a friend, a self-taught web developer and programmer, an
          open-source enthusiast, and an extreme melophile.
        </p>
      </div>
      <div className="flex items-center gap-5 flex-wrap my-6">
        {socialLiks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="flex items-center bg-[#2ec4b6]/10 backdrop-blur-sm p-2 rounded-lg hover:border hover:p-[7px] border-[#20a4f3]"
          >
            {link.icon}
            <span className="ml-2 font-medium hidden sm:block">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}