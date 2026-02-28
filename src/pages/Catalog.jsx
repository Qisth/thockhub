import { useEffect, useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import kbData from "../assets/data.json";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate asynchronous load so a loading state can be shown
    setIsLoading(true);
    const t = setTimeout(() => {
      setItems(kbData);
      setIsLoading(false);
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-8">Katalog Keyboard</h1>
      <p className="text-xl text-center mb-8">
        Berikut adalah daftar keyboard yang tersedia. Keyboard yang tersedia
        berjenis mechanical, cocok untuk pekerjaan yang memerlukan kecepatan,
        akurasi tinggi, dan kenyamanan mengetik intensif.
      </p>

      {isLoading ? (
        <p className="text-xl text-center text-gray-600">Memuat katalog...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((kb, id) => (
            <Card key={id} {...kb} action="add-to-wishlist" />
          ))}
        </div>
      )}
    </Container>
  );
}
