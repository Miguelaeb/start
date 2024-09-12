import HomeHero from "../components/HomeComponents/HomeHero";
import HomePartners from "../components/HomeComponents/HomePartners";
import HomeFeatureOne from "../components/HomeComponents/HomeFeatureOne";
import HomeFeatureTwo from "../components/HomeComponents/HomeFeatureTwo";
import HomeTeam from "../components/HomeComponents/HomeTeam";

export default function Home() {
  return (
    <div className=" mb-[54px]">
      <HomeHero />
      <HomePartners />
      <HomeFeatureOne />
      <HomeFeatureTwo />
      <HomeTeam />
    </div>
  );
}
