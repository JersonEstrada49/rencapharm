import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <ProductCard
          name="Paracetamol 500mg"
          price="5.00"
          description="Alivia dolores y reduce la fiebre. Caja con 20 tabletas."
          image="/logo.png"
        />
        <ProductCard
          name="Ibuprofeno 400mg"
          price="7.50"
          description="Antiinflamatorio no esteroideo para dolores moderados."
          image="/logo.png"
        />
        <ProductCard
          name="Vitamina C 1000mg"
          price="9.00"
          description="Refuerza el sistema inmunológico. Frasco con 30 tabletas."
          image="/logo.png"
        />
      </main>
    </div>
  );
}