import Link from "next/link";
import { getLatestBlogs } from "../utils/blogUtils";
import Hero from "@/components/Hero";
import {
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from "components/Icons";
import { ProjectsData } from "data/projectsData";
import { NextSeo } from "next-seo";
import BlogCard from "@/components/design/BlogCard";
import ProjectCard from "@/components/design/ProjectCard";
import PageSwitch from "@/components/design/PageSwitch";

export const skillsIcon = [
  { label: "Tailwindcss", icon: <TailwindCssIcon className="w-6 h-6" /> },
  { label: "TypeScript", icon: <TypeScriptIcon className="w-6 h-6" /> },
  { label: "Next.js", icon: <NextJsIcon className="w-6 h-6" /> },
  { label: "React", icon: <ReactIcon className="w-6 h-6" /> },
  { label: "VS Code", icon: <VSCodeIcon className="w-6 h-6" /> },
];

const Home = ({ latestBlogs }) => {
  return (
    <>
      <NextSeo title="Home - Dev" />
      <div>
        <Hero />

        {/** Skills and tech stacks */}
        <div className="my-20">
          <h1 className="text-2xl font-semibold">
            current favorite tech stack/tools:
          </h1>
          <div className="flex items-center gap-6 mt-6">
            {skillsIcon.map((icon) => (
              <Link
                href={``}
                key={icon.label}
                className="opacity-50 hover:opacity-100"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>

        <hr className="border border-white/70 my-20 opacity-30" />

        {/** Latest Blogs */}
        <div>
          <h1 className="text-3xl font-bold mb-10">Latest Blogs</h1>

          <div className="flex flex-col gap-6">
            {latestBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                href={blog.slug}
                date={blog.date}
                views={333}
                readTime={4}
              />
            ))}
          </div>
          <PageSwitch title={`Read More`} href={`/blog`} />
        </div>

        <hr className="border border-white/70 my-20 opacity-30" />

        {/** Latest Projects */}
        <div>
          <h1 className="text-3xl font-bold mb-10">Latest Projects</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {ProjectsData.map((project) => (
              <ProjectCard
                key={project.name}
                href={project.link}
                image={project.image}
                name={project.name}
                bio={project.bio}
              />
            ))}
          </div>

          <PageSwitch title={`View More`} href={`/projects`} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const latestBlogs = getLatestBlogs(); // Call the getLatestBlogs function to fetch the latest blogs

  return {
    props: {
      latestBlogs,
    },
  };
}

export default Home;
