import { Open_Sans } from "next/font/google";
import { LandingSection } from "@/components/LandingSection";
import { ArticlesSection } from "@/components/ArticlesSection";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${openSans.className}`}>
      <LandingSection />
      <ArticlesSection />
    </main>
  );
}
