import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function Card(data) {
  // helper to keep default values and formatted price
  data = {
    id: data.id,
    name: data.name || "Example Keyboard",
    price: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(data.price || 0),
    image: data.image || "https://placehold.net/default.png",
    description: data.description || "Example description for a keyboard",
    action: data.action || null,
  };

  // local state tracks whether this item is currently on the wishlist
  const [inWishlist, setInWishlist] = useState(false);

  // initialize and keep inWishlist in sync with storage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setInWishlist(stored.includes(data.id));
  }, [data.id]);

  // listen for external wishlist updates so UI reflects them immediately
  useEffect(() => {
    const handler = () => {
      const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setInWishlist(stored.includes(data.id));
    };
    window.addEventListener("wishlist-updated", handler);
    return () => window.removeEventListener("wishlist-updated", handler);
  }, [data.id]);

  function checkAction(action) {
    // if no action provided, fall back to automatic add/remove button
    if (!action) {
      action = inWishlist ? "remove-from-wishlist" : "add-to-wishlist";
    }

    if (action == "add-to-wishlist") {
      return (
        <button
          className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-4 py-2 rounded-md w-full cursor-pointer flex items-center justify-center gap-2"
          onClick={addToWishlist}
        >
          <Plus className="align-middle" /> Tambah ke Wishlist
        </button>
      );
    } else if (action == "remove-from-wishlist") {
      return (
        <button
          className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded-md w-full cursor-pointer flex items-center justify-center gap-2"
          onClick={removeFromWishlist}
        >
          <Trash2 className="align-middle" /> Hapus dari Wishlist
        </button>
      );
    }
  }

  function addToWishlist() {
    if (!confirm(`Apakah Anda ingin menambahkan ${data.name} ke wishlist?`)) {
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (!existing.includes(data.id)) {
        existing.push(data.id);
        localStorage.setItem("wishlist", JSON.stringify(existing));
        setInWishlist(true); // update local state so button flips immediately
        window.dispatchEvent(new Event("wishlist-updated"));
        alert(`${data.name} telah ditambahkan ke wishlist!`);
      } else {
        alert(`${data.name} sudah ada dalam wishlist!`);
      }
    } catch (e) {
      console.error("Gagal menyimpan wishlist:", e);
    }
  }

  function removeFromWishlist() {
    if (!confirm(`Apakah Anda ingin menghapus ${data.name} dari wishlist?`)) {
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (existing.includes(data.id)) {
        const deleteIndex = existing.indexOf(data.id);
        existing.splice(deleteIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(existing));
        setInWishlist(false); // update state so button flips
        window.dispatchEvent(new Event("wishlist-updated"));
        alert(`${data.name} telah dihapus dari wishlist!`);
      } else {
        alert(`${data.name} belum ada dalam wishlist!`);
      }
    } catch (e) {
      console.error("Gagal menyimpan wishlist:", e);
    }
  }
  return (
    <div className="border border-gray-300 shadow-md hover:shadow-lg transition-shadow flex flex-col bg-gray-200 h-full">
      <div className="flex-1 flex flex-col">
        <div className="overflow-hidden h-40">
            <img
              src={data.image}
              alt={data.name}
              className="object-cover object-center w-full h-full bg-white"
          />
        </div>
        <div className="p-4">
            <strong className="block font-bold text-lg md:text-xl mb-3">
            {data.name} ({data.price})
          </strong>
            <p className="mb-3 h-20 overflow-y-auto text-sm md:text-base">{data.description}</p>
        </div>
          <div className="mt-auto w-full px-4 pb-4">{checkAction(data.action)}</div>
      </div>
    </div>
  );
}
