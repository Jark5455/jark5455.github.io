import Background from './particles-bg';
import NavBar from './navbar/navbar';
import HomePage from './main/home';

import { React } from 'react'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative flex-grow items-center justify-between">
        <Background />

        <div className="m-auto py-[75px] max-w-xs" >
          <HomePage />
        </div>
      </main>
    </>
  )
}
