import Layout from "@/layout";
import stylesHome from "@/styles/Home.module.css";

export default function Me() {
  return (
    <Layout>
      <div className="container-red">
        <h1>Page Me</h1>
      </div>
      <div className={stylesHome.container_blue}>
        <h1>Warna Biru</h1>
      </div>
      <div>
        <h1 className="text-3xl text-violet-900 font-bold underline">
          Warna Biru
        </h1>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="bg-slate-600 drop-shadow-sm">01</div>
      </div>
    </Layout>
  );
}
