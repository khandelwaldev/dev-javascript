import { useRouter } from "next/router";
import readingTime from "reading-time";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { NextSeo } from "next-seo";
import DateFormatter from "components/DateFormatter";
import Image from "next/image";
import Claps from "@upstash/claps";
import rehypeHighlight from "rehype-highlight";

const BlogPost = ({ mdxSource, frontMatter }) => {
  const router = useRouter();
  const pageUrl = `https://slyro.vercel.app${router.asPath}`;

  const tagsArray = frontMatter.tags.split(",").map((tag) => tag.trim());

  const postId = frontMatter.id;

  const mdxText = mdxSource.compiledSource.replace(/<[^>]*>/g, "");
  const { text: readingTimeText, minutes } = readingTime(mdxText);

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} - Dev`}
        description={frontMatter.description}
        openGraph={{
          url: pageUrl,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: frontMatter.banner,
              width: 800,
              height: 420,
              alt: "Dev Khandelwal",
            },
          ],
        }}
      />

      <div className="text-black">
        <Claps fixed="right" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>

        <div className="flex items-center gap-3 mt-10 my-5 text-base">
          <p className="opacity-60">
            <DateFormatter dateString={frontMatter.date} /> /{" "}
            <span>
              {readingTimeText} {/*({Math.ceil(minutes)} min)*/}
            </span>
          </p>
        </div>
        <Link
          href={`/about`}
          className="py-1 px-3 bg-[#2ec4b6]/10 rounded-lg w-fit flex items-center gap-3 hover:border border-[#20a4f3] hover:py-[3px] hover:px-[11px]"
        >
          <Image
            src={`https://avatars.githubusercontent.com/u/122960451`}
            width={30}
            height={30}
            alt="Author"
            className="rounded-full"
          />
          <p className=" text-lg">Dev Khandelwal</p>
        </Link>
      </div>

      <hr className="border border-white/70 opacity-40 my-10" />

      <div className="prose dark:prose-invert">
        <MDXRemote {...mdxSource} />
      </div>

      <div id="comments"></div>
    </>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "data/blogs");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.mdx$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(
    process.cwd(),
    "data/blogs",
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(postFilePath, "utf8");

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export default BlogPost;
