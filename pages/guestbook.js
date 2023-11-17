import { Comments } from "@/components/Comments";
import { NextSeo } from "next-seo";

export default function Guestbook() {
  return (
    <>
      <NextSeo
        title="Guestbook - Dev"
        description="Guestbook for my future visitors"
      />

      <div>
        <h1 className="text-4xl font-bold">Guestbook</h1>
        <p className="pt-6 text-base opacity-70">
          An artifact of the 90's webs. Leave a comment below for my future
          visitors. Feel free to write anything!
        </p>
      </div>

      <hr className="my-10 border border-white opacity-70" />
      <Comments />
    </>
  );
}
