import Script from 'next/script';

export default function Background() {
  return (
    <div id="particles-bg" className="absolute flex top-0 bottom-0 right-0 left-0 bg-yellow bg-cover bg-center bg-no-repeat -z-10">
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" onload="particlesJS.load('particles-bg', 'json/particles.json');" />
    </div>
  )
}
