export const metadata = {
  title: "Home",
  description: "Browse AI-generated photos and top generations on Pixgen.",
};

import Banner from "@/Components/Banner";
import TopGenerations from "@/Components/TopGenerations";


export default function Home() {
  return (
  <div>
    <Banner/>
    <TopGenerations/>
  </div>
  );
}
