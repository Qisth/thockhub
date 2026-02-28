import Card from "./Card";
import kbData from "../assets/data.json";

export default function CardList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {kbData.map((kb) => (
        <Card key={kb.id} name={kb.name} price={kb.price} image={kb.image} description={kb.description} />
      ))}
    </div>
  )
}