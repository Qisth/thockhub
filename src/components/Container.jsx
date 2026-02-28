export default function Container({ children }) {
  return (
    <main className="bg-gray-100 min-h-[calc(100vh-60px)] w-full flex justify-center p-8 mt-15">
      <div className="w-full h-fit border border-gray-300 rounded-lg shadow-md bg-white p-6">
        {children}
      </div>
    </main>
  );
}