import CardList from "../components/CardList";
import Container from "../components/Container";

export default function Catalog() {
  return (
    <Container>
      <h1 className="text-4xl text-center mb-8">Katalog Keyboard</h1>
      <p className="text-xl text-center mb-8">
        Berikut adalah daftar keyboard yang tersedia. Keyboard yang tersedia
        berjenis mechanical, cocok untuk pekerjaan yang memerlukan kecepatan,
        akurasi tinggi, dan kenyamanan mengetik intensif. Anda dapat menyaring
        pencarian keyboard berdasarkan kriteria tertentu.
      </p>
      <CardList />
    </Container>
  );
}
