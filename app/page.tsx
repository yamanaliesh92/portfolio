import { About, Contact, Intro, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <main className="flex items-center flex-col px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
