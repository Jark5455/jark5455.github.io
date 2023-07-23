import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-between">
      <Background />
      <NavBar />

      <div className="absolute flex top-[125px] w-fit h-fit" >
        <HomePage />
      </div>
    </main>
  )
}
