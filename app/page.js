import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <main>
      <Slider/>
      <ProductCategory/>
    </main>
  );
}
