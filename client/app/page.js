// app/page.js

export const metadata = {
  title: 'Home Page 🏡',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-gray-300 rounded-xl overflow-hidden lg:flex">
        {/* Left column: your text */}
        <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Welcome to the Homepage
          </h1>
          <p className="text-lg mb-8">
            Find Your Perfect Fit Today
          </p>
        </div>

        {/* Right column: placeholder for image or additional content */}
        <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-400"></div>
      </div>
    </main>
  );
}
