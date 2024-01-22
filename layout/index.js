import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const isShowHeader = router.pathname !== "/me";

  return (
    <>
      {isShowHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
