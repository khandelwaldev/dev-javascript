import { NextSeo } from "next-seo";
import AnimatedLink from "@/components/design/AnimatedLink";

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Dev"
        description="Most of the things you (maybe) want to know about me:"
      />
      <div>
        <h1 className="text-[21px] font-semibold underline mb-10">
          Most of the things you (maybe) want to know about me:
        </h1>

        <div className="flex flex-col gap-5 text-white/70 text-lg">
          <p>
            I&apos;m{" "}
            <span className="text-white font-medium underline cursor-none">
              Dev
            </span>
            , a 19-year-old student belonging to the Homo Sapiens species.
            I&apos;m a brother, a son, a friend, a self-taught web developer and
            programmer, an open-source enthusiast, and an extreme melophile.
          </p>
          <p>
            As my age suggests, I&apos;m a high school graduate and a college
            undergrad pursuing B.Tech (soon). I had already started programming
            back when I was in 11th standard as we had C++ in our school
            curriculum. I started web development a year later, and I enjoy
            working on the web, particularly on the frontend. If you&apos;re
            curious about the programming languages I know, they include
            JavaScript, TypeScript, HTML, CSS, and a bit of Kotlin and Python.
          </p>
          <p>
            I&apos;m also into technical writing and blogging. I write mostly on{" "}
            <AnimatedLink href={`https://dev.to/khandelwaldev`}>
              {" "}
              Dev.to
            </AnimatedLink>{" "}
            and{" "}
            <AnimatedLink href={`https://medium.com/@slyro`}>
              Medium.com
            </AnimatedLink>
            .
          </p>
          <p>
            Things I do other than dev and programming? Not much, but I do play
            football (touching grass is important). I also just like to go on
            the terrace with soft music and watch clouds pass by 😳. I&apos;ve
            also started gaming recently (only{" "}
            <AnimatedLink href={`https://playvalorant.com`}>
              VALORANT
            </AnimatedLink>
            ).Apart from these, I don&apos;t have much to do other than
            overthinking and staring at other pepole and judging them(i know
            it&apos;s bad).
          </p>
          <p>
            I don&apos;t talk much on any platform, but I enjoy making friends,
            whether online or in real life, though I&apos;m somewhat
            introverted. So, if you want to talk about anything, just hit me up,
            and I&apos;ll get back to you once I&apos;m active online. All my
            social links are listed{" "}
            <AnimatedLink href={`/links`} className="link">
              {" "}
              here
            </AnimatedLink>
            .
          </p>
          <p>
            That&apos;s pretty much everything I know about me yet. In case you
            know something about me that I still don&apos;t, please let me know
            - I&apos;ll add it here.
          </p>
        </div>
      </div>
    </>
  );
}
