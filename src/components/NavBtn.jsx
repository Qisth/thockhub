import { Link } from "react-router-dom";

export default function NavBtn({ link, children }) {
  return (
    <Link to={link} className="px-6 py-4 hover:bg-gray-400">
      {children}
    </Link>
  );
}
