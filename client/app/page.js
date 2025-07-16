// app/page.js
export const metadata = {
  title: 'Home Page 🏡',
};

export default function Home() {
  return (
    <main className="
      min-h-screen
      bg-[url('/images/hero-bg.png')]
      bg-cover
      bg-center
      bg-no-repeat
      flex items-center justify-center p-4">

      {/* Hero section */}
      <div className="w-full max-w-5xl bg-cyan-100 rounded-xl border-b-2 border-r-2 overflow-hidden lg:flex">

        {/* Left column: your text */}
        <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Welcome to the Homepage
          </h1>
          <p className="text-lg mb-8">
            Find Your Perfect Fit Today
          </p>
          <button className="bg-cyan-600 rounded-lg px-4 py-2">Shop Now!!</button>
        </div>

        {/* Right column: placeholder for image or additional content */}
        <div className="w-full h-128 bg-[url('/images/hero-section.png')] bg-cover bg-center">
        </div>

      </div>
    </main>
  );
}
