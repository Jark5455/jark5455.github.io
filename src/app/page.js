import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

import { React } from 'react'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative py-[50px] flex-grow items-center justify-between">
        <Background />

        <div className="m-auto" >
          <HomePage />
        </div>
      </main>
    </>
  )
}
