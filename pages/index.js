import Head from "next/head"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Glance</title>
        <meta name="description" content="Glance main page" />
      </Head>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center flex-col space-y-16 scrollbar-hide no-scrollbar">
        <h2 className="text-white text-3xl">Welcome to</h2>
        <h1 className="text-white text-8xl">Glance</h1>
        <h2 className="text-white text-3xl">your todo list dashboard</h2>
        <Link href="/register">
          <a className="text-2xl rounded-full px-16 py-6 flex items-center text-green-400 border-2 border-green-400 hover:text-white hover:bg-green-400  ">
            Get Started
          </a>
        </Link>
      </main>
    </>
  )
}
