import { Link } from "react-router-dom";

export default function BtnLink({ to, children }) {
  return (
    <Link to={to} className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-center px-4 py-2 rounded-md">
      {children}
    </Link>
  );
}