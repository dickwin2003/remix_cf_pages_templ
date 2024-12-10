import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Welcome to Remix
          </h1>
          <nav className="space-y-6">
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition duration-150"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-gray-900">
                  15m Quickstart Blog Tutorial
                </span>
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition duration-150"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-gray-900">
                  Deep Dive Jokes App Tutorial
                </span>
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}
