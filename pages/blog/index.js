import { SearchIcon } from "components/Icons";
import ScrollToSearchBox from "components/ScrollToSearchBox";
import BlogCard from "@/components/design/BlogCard";
import { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextSeo } from "next-seo";

const Blogs = ({ blogs }) => {
  const perPage = 12;

  // State for search query and filtered blogs
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const loadMore = () => {
    const currentlyVisible = filteredBlogs.length;
    const newVisibleBlogs = blogs.slice(
      currentlyVisible,
      currentlyVisible + perPage
    );
    setFilteredBlogs([...filteredBlogs, ...newVisibleBlogs]);
  };

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blogs based on the search query
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.tags.toLowerCase().includes(query)
    );

    setFilteredBlogs(filtered);
  };

  return (
    <>
      <NextSeo
        title="Blog - Dev"
        description="My place for thoughts, reflections & everything in between. Have a good read!"
      />
      <ScrollToSearchBox />
      <div>
        <h1 className="text-4xl font-medium">Blog</h1>
        <div className="my-10 flex items-center gap-3 p-3 border border-white/70 rounded-lg bg-[#2ec4b6]/10 h-[40px]">
          <SearchIcon className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full bg-transparent border-none outline-none"
          />
        </div>

        <div className="flex flex-col gap-6">
          {filteredBlogs.map((blog) => (
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
        {filteredBlogs.length < blogs.length && (
          <div className="my-6 py-1 px-2 border border-white/70 rounded w-fit hover:border-[#20a4f3]">
            <button
              onClick={loadMore}
              className="text-lg font-semibold opacity-50 hover:opacity-100"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), "data/blogs");
  const filenames = fs.readdirSync(blogDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    try {
      const { data } = matter(fileContents);

      const slug = filename.replace(/\.mdx$/, "");

      return {
        title: data.title || "Untitled",
        description: data.description || "Undefined",
        date: data.date || "Undefined",
        tags: data.tags || "Undefined",
        slug,
      };
    } catch (error) {
      console.error(`Error parsing frontmatter in file ${filename}:`, error);
      return {
        title: "Error",
        description: "Error parsing frontmatter",
        date: "Undefined",
        tags: "Undefined",
        slug: filename.replace(/\.mdx$/, ""),
      };
    }
  });

  return {
    props: {
      blogs,
    },
  };
}

export default Blogs;
