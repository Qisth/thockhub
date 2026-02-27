import { Plus } from "lucide-react";

export default function Card(data) {
  data = {
    image: data.image ? data.image : "https://placehold.net/600x400.png",
    name: data.name ? data.name : "Example Keyboard",
    price: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(data.price ? data.price : 0),
    description: data.description
      ? data.description
      : "Example description for a keyboard",
  };

  return (
    <div className="border border-gray-300 shadow-md">
      <img src={data.image} alt={data.name} />
      <div className="p-4">
        <strong className="block font-bold text-xl mb-3">
          {data.name} ({data.price})
        </strong>
        <p className="mb-3">{data.description}</p>
        <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-4 py-2 rounded-md w-full cursor-pointer flex items-center justify-center gap-2">
          <Plus className="align-middle" /> Tambah ke Wishlist
        </button>
      </div>
    </div>
  );
}
