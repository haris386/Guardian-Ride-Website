import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={30}
          className="mb-6"
        />
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to <span className="text-blue-600">Next.js + TailwindCSS</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Build modern, responsive web apps effortlessly with the power of Next.js and the beauty of TailwindCSS.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            📘 Read Docs
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-all"
          >
            🚀 Deploy Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          ⚡ Features You’ll Love
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Fast Refresh",
              desc: "See your edits instantly with Next.js’ blazing fast refresh.",
            },
            {
              title: "Responsive by Default",
              desc: "Tailwind makes it easy to design for all screen sizes.",
            },
            {
              title: "SEO Friendly",
              desc: "Next.js automatically optimizes your pages for better SEO.",
            },
            {
              title: "Built-in Routing",
              desc: "No config needed — pages become routes automatically.",
            },
            {
              title: "Image Optimization",
              desc: "Serve perfectly sized and optimized images with next/image.",
            },
            {
              title: "Production Ready",
              desc: "Deploy on Vercel or anywhere Node runs in seconds.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-gray-500 text-sm">
        Made with ❤️ using Next.js & TailwindCSS
      </footer>
    </main>
  );
}
