import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Background />

      <div className="absolute w-[1240px] top-[200px] h-[calc(100%-60px)]" >
        <HomePage />
      </div>
    </main>
  )
}
