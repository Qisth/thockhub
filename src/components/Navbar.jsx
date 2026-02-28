import NavBtn from "./NavBtn";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 w-full pl-6 flex text-xl fixed top-0">
      <NavBtn link="/">Home</NavBtn>
      <NavBtn link="/catalog">Katalog</NavBtn>
      <NavBtn link="/wishlist">Wishlist</NavBtn>
    </nav>
  );
}
