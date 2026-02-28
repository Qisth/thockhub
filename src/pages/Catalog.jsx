import { useEffect, useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to load data");
        const kbData = await response.json();
        setItems(kbData);
      } catch (error) {
        console.error("Error loading catalog:", error);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
