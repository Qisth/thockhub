export default function Container({ children }) {
  return (
    <main className="bg-gray-100 min-h-[calc(100vh-60px)] w-full flex justify-center mt-15 px-4 md:px-6">
      <div className="max-w-5xl w-full h-fit mx-auto border border-gray-300 rounded-lg shadow-md bg-white p-4 md:p-6 mt-12 mb-8">
        {children}
      </div>
    </main>
  );
}
