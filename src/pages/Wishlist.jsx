import { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import kbData from "../assets/data.json";

export default function Wishlist() {
  const [itemsId, setItemsId] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setItemsId(stored);
    } catch (e) {
      console.error("Gagal membaca wishlist:", e);
    }
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

      {items.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-8">Wishlist kosong</p>
      )}
    </Container>
  );
}
