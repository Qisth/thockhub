import Container from "../components/Container";
import BtnLink from "../components/BtnLink";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-8">404 Not Found</h1>
      <p className="text-xl text-center mb-8">Halaman yang Anda cari tidak ditemukan.</p>
      <div className="flex justify-center">
        <BtnLink to="/">Kembali ke beranda</BtnLink>
      </div>
    </Container>
  )
}