import Banner from "./components/Banner";
import CardGrid from "./components/CardGrid";
import data from "../data/index.json"; // Mock data

export default function HomePage() {
  const bannerData = data.content.find((section) => section.type === "HERO");
  const cardGridData = data.content.find(
    (section) => section.type === "CARD_GRID"
  );

  return (
    <main>
      {bannerData && <Banner {...bannerData} />}
      {cardGridData && <CardGrid {...cardGridData} />}
    </main>
  );
}
