import About from "@/components/About";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
    <Nav />
    <About />
    </div>
  );
}
