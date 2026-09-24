import { CTA } from "@/components/home/CTA";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return <div className="flex min-h-screen flex-col"><Navbar /><main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-10 md:py-16"><Hero /><Features /><CTA /></main><Footer /></div>;
}
