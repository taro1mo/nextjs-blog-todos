import Head from "next/head";

export default function Layout({ children, title = "default title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white text-sm font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        @Udemy 2021
      </footer>
    </div>
  );
}
