import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Background />

      <div className="absolute flex w-[1240px] min-h-[calc(100%-200px)] h-fit" >
        <HomePage />
      </div>
    </main>
  )
}
