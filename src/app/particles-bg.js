import Script from 'next/script';

export default function Background() {
  return (
    <div id="particles-bg" className="absolute flex top-0 left-0 w-full min-h-full bg-yellow bg-cover bg-center bg-no-repeat -z-10">
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
      <Script src="/js/bg.js" />
    </div>
  )
}