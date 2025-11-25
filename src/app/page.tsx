import HeritageSection from "@/components/heritage/heritage";
import Hero from "@/components/hero/hero";
import MenuSection from "@/components/menu/menu";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeritageSection />
      <MenuSection />
      <Footer />
    </main>
  );
}
