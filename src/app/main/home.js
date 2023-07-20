import { useState } from "react";

export default function HomePage() {

  const [navBarSize, setSize] = useState(null);

  useEffect(() => {
    const element = document.getElementById('navbar');
    if (element) {
      setSize(element.clientHeight);
    }
  }, []);


  return (
    <div className={`relative w-full h-fit text-center mt-[calc(${navBarSize}px+24px)]`}>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center item-center rounded-3xl bg-lightgrey">
            <p className="uppercase text-sm tracking-widest text-darkergrey">Welcome to The Banan Project</p>
        </div>    
    </div>
  )
}