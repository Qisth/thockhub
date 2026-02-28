import Container from "../components/Container";
import BtnLink from "../components/BtnLink";

export default function Home() {
  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-8">
        Selamat Datang di ThockHub
      </h1>
      <p className="text-xl text-center mb-8">
        ThockHub adalah sebuah situs web katalog yang menyediakan keyboard
        mechanical untuk pekerjaan yang memerlukan penggunaan keyboard secara intensif.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-base sm:text-xl">
        <BtnLink to="/catalog">Periksa Katalog</BtnLink>
        <BtnLink to="/wishlist">Periksa Wishlist</BtnLink>
      </div>
    </Container>
  );
}
