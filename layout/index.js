import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ metaTitle, metaDesc, children }) {
  const router = useRouter();
  const isShowHeader = router.pathname !== "/me";

  return (
    <>
      <Head>
        <title>{`${metaTitle || "Home - App Media Sosial"}`}</title>
        <meta
          name="description"
          content={`${
            metaDesc ||
            "Aplikasi media sosial online yang mudah untuk digunakan"
          }`}
        />
        {/* <meta name="keyword" content="aplikasi media sosial online" /> */}
      </Head>
      {isShowHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
