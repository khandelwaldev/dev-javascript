import DateFormatter from "../DateFormatter";
import Link from "next/link";

const BlogCard = ({ href, date, title, description, views, readTime }) => {
  return (
    <Link
      href={`blog/${href}`}
      className="p-3 border border-white/70 rounded-lg hover:border-[#20a4f3] hover:bg-[#2ec4b6]/10 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-4 text-base opacity-60">
        <span>
          <DateFormatter dateString={date} />
        </span>
        ·<span>{readTime} min read</span>·<span>{views} views</span>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold line-clamp-1 hover:text-[#20a4f3] w-fit">
          {title}
        </h1>
        <p className="text-base my-5 opacity-70 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
 