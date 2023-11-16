import Link from "next/link";
import { ArrowRight } from "../Icons";

const PageSwitch = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="mt-10 flex items-center gap-3 hover:gap-4 ease-in-out duration-300 text-lg hover:text-[#20a4f3]"
    >
      {title} <ArrowRight className="w-5 h-5" />
    </Link>
  );
};

export default PageSwitch
