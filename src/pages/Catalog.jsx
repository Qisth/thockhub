import Card from "../components/Card";
import Container from "../components/Container";
import kbData from "../assets/data.json";

export default function Catalog() {
  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-8">Katalog Keyboard</h1>
      <p className="text-xl text-center mb-8">
        Berikut adalah daftar keyboard yang tersedia. Keyboard yang tersedia
        berjenis mechanical, cocok untuk pekerjaan yang memerlukan kecepatan,
        akurasi tinggi, dan kenyamanan mengetik intensif. Anda dapat menyaring
        pencarian keyboard berdasarkan kriteria tertentu.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kbData.map((kb, id) => (
          <Card key={id} {...kb} />
        ))}
      </div>
    </Container>
  );
}
