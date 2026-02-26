import Container from "../components/Container";
import BtnLink from "../components/BtnLink";

export default function Home() {
  return (
    <Container>
      <h1 className="text-4xl text-center mb-8">Selamat Datang di ThockHub</h1>
      <p className="text-xl text-center mb-8">
        ThockHub adalah sebuah situs web katalog yang menyediakan keyboard
        mechanical untuk keperluan gaming.
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <BtnLink to="/catalog">Periksa Katalog</BtnLink>
        <BtnLink to="/wishlist">Periksa Wishlist</BtnLink>
      </div>
    </Container>
  );
}
