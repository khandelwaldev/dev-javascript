import Link from "next/link";

const AnimatedLink = ({ children, href }) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <Link
      href={href}
      className="relative inline-block text-[#20a4f3] group"
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#20a4f3] transform origin-right scale-x-0 transition-transform duration-250 ease-out group-hover:origin-left group-hover:scale-x-100"></span>
    </Link>
  );
};

export default AnimatedLink;
