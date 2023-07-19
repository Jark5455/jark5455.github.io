import Head from 'next/head';
import Background from './particles-bg';
import NavBar from './navbar/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar">
        <Head>
        </Head>

        <Background />
        <NavBar />       
    </main>
  )
}
