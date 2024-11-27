import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { Categories } from "@/components/home/Categories";
import { NewArrivals } from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedBooks />
        <Categories />
        <NewArrivals />
      </main>
    </Layout>
  );
}
