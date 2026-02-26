export default function Container({ children }) {
  return (
    <main className="bg-gray-100 pt-15 min-h-screen">
      <div className="border border-gray-300 rounded-lg shadow-md  bg-white m-8 p-6">
        {children}
      </div>
    </main>
  );
}