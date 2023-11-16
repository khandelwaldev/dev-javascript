import AnimatedLink from "@/components/design/AnimatedLink";
import { NextSeo } from "next-seo";

export default function error404() {
  return (
    <>
      <NextSeo title="Page not found" />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
            <h1 className="text-center opacity-50 pb-12">
            <div className="text-8xl font-extrabold mb-3">404</div>
            <div className="text-2xl">Page Not Found</div>
            </h1>
            <AnimatedLink href={`/`} ><span className="text-xl">back to homepage</span></AnimatedLink>
        </div>
      </div>
    </>
  );
}
