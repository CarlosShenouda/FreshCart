import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HomeAdvantages from "../../components/HomeAdv/HomeAdvantages";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeNewsLetter from "../../components/HomeNewsLetter/HomeNewsLetter";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

export default function Home() {
  return <>
  <title>Home Page</title>
  <HomeSlider/>
  <HomeAdvantages/>
  <HomeCategories/>
  <HomeDeals/>
  <FeaturedProducts/>
  <HomeNewsLetter/>
  </>
}
