import { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import kbData from "../assets/data.json";

export default function Wishlist() {
  const [itemsId, setItemsId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const update = () => {
      try {
        setIsLoading(true);
        const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setItemsId(stored);
      } catch (e) {
        console.error("Gagal membaca wishlist:", e);
      } finally {
        setIsLoading(false);
      }
    };

    // read once on mount
    update();
    // also listen to custom event fired by Card
    window.addEventListener("wishlist-updated", update);
    return () => window.removeEventListener("wishlist-updated", update);
  }, []);

  // derive the actual keyboard objects from the stored IDs
  const items =
    itemsId.length > 0 ? kbData.filter((kb) => itemsId.includes(kb.id)) : [];

  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-8">Wishlist Anda</h1>
      <p className="text-xl text-center mb-8">
        Berikut adalah daftar keyboard yang sudah dimasukkan ke dalam wishlist
        Anda.
      </p>

      {isLoading ? (
        <p className="text-xl text-center text-gray-600">Memuat wishlist...</p>
      ) : items.length > 0 ? (
        <>
          <p className="text-xl text-center mb-8">
            Sekarang anda memiliki {items.length} keyboard dalam wishlist.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <Card key={idx} {...item} action="remove-from-wishlist" />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-xl mt-8">Wishlist kosong</p>
      )}
    </Container>
  );
}
