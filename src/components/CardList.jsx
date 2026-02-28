import Card from "./Card";
import kbData from "../assets/data.json";

export default function CardList() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {kbData.map((kb, id) => (
        <Card key={id} {...kb} />
      ))}
    </div>
  )
}