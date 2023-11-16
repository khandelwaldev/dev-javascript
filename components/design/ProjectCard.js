import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({href, image, name, bio }) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-5 p-3 border border-white/70 rounded-xl hover:border-[#20a4f3]"
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt={name}
        className="rounded-xl w-full h-full"
      />
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-base opacity-75">{bio}</p>
    </Link>
  );
};

export default ProjectCard;
