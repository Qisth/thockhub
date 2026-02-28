import { Plus } from "lucide-react";

export default function Card(data) {
  data = {
    name: data.name ? data.name : "Example Keyboard",
    price: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(data.price ? data.price : 0),
    image: data.image ? data.image : "https://placehold.net/600x400.png",
    description: data.description
      ? data.description
      : "Example description for a keyboard",
  };

  return (
    <div className="border border-gray-300 shadow-md flex flex-col bg-gray-200 h-full">
      <div className="flex-1 flex flex-col">
        <div className="overflow-hidden h-40">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover object-center w-full h-full bg-white"
          />
        </div>
        <div className="p-4">
          <strong className="block font-bold text-xl mb-3">
            {data.name} ({data.price})
          </strong>
          <p className="mb-3 h-20">{data.description}</p>
        </div>
      </div>
      <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-4 py-2 rounded-md w-auto mx-4 mb-4 cursor-pointer flex items-center justify-center gap-2">
        <Plus className="align-middle" /> Tambah ke Wishlist
      </button>
    </div>
  );
}
