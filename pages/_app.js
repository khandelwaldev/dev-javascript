import Layout from "components/Layout";
import "styles/globals.css";
import "@upstash/claps/style.css";
import NextTopLoader from "nextjs-toploader";
import { NextSeo } from "next-seo";

export default function DevFolio({ Component, pageProps }) {
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

      <Layout>
        <NextTopLoader color="#20a4f3" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
