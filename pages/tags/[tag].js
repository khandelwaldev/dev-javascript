import { useRouter } from "next/router";
import { getBlogsByTag } from "../../utils/blogUtils";
import { NextSeo } from "next-seo";
import BlogCard from "@/components/design/BlogCard";

const TagPage = ({ tag, blogs }) => {
  const router = useRouter();
  const pageUrl = `https://slyro.vercel.app${router.asPath}`;

  return (
    <>
      <NextSeo
        title={`${tag} - Dev`}
        description={`List of all blogs tagged with ${tag}`}
      />
      <div>
        <h1 className="text-3xl font-medium text-white/50">
          Tag: <span className="text-white">{tag}</span>
        </h1>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            href={blog.href}
            date={blog.date}
            views={333}
            readTime={4}
          />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { tag } = params;
  const blogs = getBlogsByTag(tag);

  return {
    props: {
      tag,
      blogs,
    },
  };
}

export default TagPage;
