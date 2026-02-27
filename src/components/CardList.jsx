import Card from "./Card";

export default function CardList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}