import Layout from "components/Layout";
import "styles/globals.css";
import "@upstash/claps/style.css";
import NextTopLoader from "nextjs-toploader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DevFolio({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target;

      // Check if the clicked element is an anchor tag
      if (target.tagName === "A") {
        const href = target.getAttribute("href");

        // Check if the link is external
        if (
          href &&
          (href.startsWith("http://") || href.startsWith("https://"))
        ) {
          // Open external links in a new tab
          window.open(href, "_blank");
          e.preventDefault(); // Prevent the default behavior
        } else {
          // Handle internal links using Next.js routing
          router.push(href);
          e.preventDefault(); // Prevent the default behavior
        }
      }
    };

    // Add an event listener to the document to intercept link clicks
    document.addEventListener("click", handleLinkClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleLinkClick);
    };
  }, [router]);
  return (
    <>
      <NextSeo
        title="Dev Khandelwal"
        defaultTitle="Dev"
        description="Dev • 19 y/o • Student • Full-stack Developer"
        canonical="https://slyro.vercel.app/"
        openGraph={{
          url: "https://slyro.vercel.app",
          title: "Dev Khandelwal",
          description: "Dev • 19 y/o • Student • Full-stack Developer",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Dev Khandelwal",
            },
          ],
        }}
        twitter={{
          handle: "@i_slyro",
          site: "@i_slyro",
          cardType: "summary_large_image",
        }}
      />

      {/** MetaTag */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#000000" />

      <Layout>
        <NextTopLoader color="#20a4f3" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
