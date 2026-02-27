import type { Route } from "./+types/home";
// Import without the .js extension
import { OverviewPage } from "../page/index/index";
import { Header, Footer } from "../page/ktl-component/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
  ];
}

export default function Home() {
  return (
      <div className="app-layout">
        <Header />

        <main className="content-area">
          <OverviewPage />
        </main>

        <Footer />
      </div>
  );
}
