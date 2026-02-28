import NavBtn from "./NavBtn";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 w-full fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <div className="text-lg md:text-xl font-semibold">ThockHub</div>
        <div className="flex items-center">
          <div className="hidden sm:flex">
            <NavBtn link="/">Home</NavBtn>
            <NavBtn link="/catalog">Katalog</NavBtn>
            <NavBtn link="/wishlist">Wishlist</NavBtn>
          </div>
          <div className="sm:hidden flex items-center">
            {/* On small screens we show compact links stacked vertically via NavBtn's padding */}
            <NavBtn link="/">Home</NavBtn>
            <NavBtn link="/catalog">Katalog</NavBtn>
            <NavBtn link="/wishlist">Wishlist</NavBtn>
          </div>
        </div>
      </div>
    </nav>
  );
}
