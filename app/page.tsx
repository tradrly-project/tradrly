import { BackgroundLanding } from "@/components/background/landing-page";
import Topbar from "@/components/navbar/top-bar";


export default function Home() {
  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <Topbar />
      </header>
      <main>
        <BackgroundLanding />
      </main>
    </>
  );
}
