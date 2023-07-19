import Script from 'next/script';

export default function Background() {
  return (
    <div className="w-full h-full">
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
        <div id="particles-bg" className="top-0 left-0 w-full h-full bg-yellow bg-cover bg-center bg-no-repeat -z-10"/>
      <Script src="/js/bg.js" />
    </div>
  )
}