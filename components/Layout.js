import { useRouter } from "next/router";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const is404Page = router.pathname === "/404";

  return (
    <>
      {router.pathname !== "/404" && <Navigation />}
      <main className={is404Page ? "" : "py-[193px]"}>{children}</main>
      {router.pathname !== "/404" && <Footer />}
    </>
  );
}

