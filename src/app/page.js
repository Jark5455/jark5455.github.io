import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Background />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <NavBar />

        <div className="absolute flex top-[125px] w-fit h-fit" >
          <HomePage />
        </div>
      </main>
    </div>
  )
}
