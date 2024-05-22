import { NavExpand } from "./components/navbar/navExpand";
import { NavBar } from "./components/navbar/navIndex";

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <NavBar />
      <NavExpand />
    </main>
  );
}
