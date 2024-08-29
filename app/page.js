import Navbar from "./components/Navbar";
import Discover from "./components/homeItems/Discover";
import ProductCategory from "./components/homeItems/ProductCategory";
import Trending from "./components/homeItems/Trending";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <main>
      <Slider/>
      <ProductCategory/>
      <Trending/>
      <Discover/>
    </main>
  );
}
