const svgElement = document.getElementById('svg');
const viewBoxX     = svgElement.viewBox.baseVal.x;
const viewBoxWidth = svgElement.viewBox.baseVal.width;
const initialDevicePixelRatio = 1;//window.devicePixelRatio;
let lastZoomRatio = 0;
let viewportWidth = 0;
let firstTime = 1;
function handleZoomChange() {
    newViewportWidth = Math.min(svgElement.clientWidth, svgElement.clientHeight);
    isTop = window === window.top;
    currentZoomRatio = window.devicePixelRatio * window.visualViewport.scale;
    if (currentZoomRatio !== lastZoomRatio || newViewportWidth !== viewportWidth) {
        viewportWidth = newViewportWidth;
        lastZoomRatio = currentZoomRatio;
        {        } adjustedDevicePixelRatio  = currentZoomRatio / initialDevicePixelRatio;
        if (isTop) adjustedDevicePixelRatio *= window.devicePixelRatio;
        strokeWidth = viewBoxWidth * 0.75 / (viewportWidth * adjustedDevicePixelRatio);
        if (firstTime || isTop) {
            firstTime = 0;
            svgElement.viewBox.baseVal.y      = svgElement.viewBox.baseVal.x     = viewBoxX     - viewBoxWidth * (isTop ? 0.5 : 1.5) / viewportWidth;
            svgElement.viewBox.baseVal.height = svgElement.viewBox.baseVal.width = viewBoxWidth + viewBoxWidth * (isTop ? 1   : 3  ) / viewportWidth;
        }
        svgElement.style.strokeWidth = strokeWidth;
    }
}
handleZoomChange();
setInterval(handleZoomChange, 100);
