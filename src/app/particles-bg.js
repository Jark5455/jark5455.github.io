import './css/particles-bg.css'
import Script from 'next/script';

export default function Background() {
    return (
        <div>
            <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
            <div id="particles-bg" />
            <Script src="/js/bg.js" />
        </div>
    )
}