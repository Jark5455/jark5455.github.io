import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script';
import Background from './particles-bg';
import NavBar from './navbar/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Head>
        </Head>

        <Background />
        <NavBar />
    </main>
  )
}
