import React, {Component} from 'react';

class Background extends Component {
  state = {
    width: 150,
    height: 150,
  }

  onResize() {
    this.performBackgroundUpdate();
  }

 performBackgroundUpdate() {
    this.updateSize();
  }

  updateSize() {
    const mainCanvas = document.getElementById("main");
    console.log('main canvas', mainCanvas);
    if (mainCanvas) {
      const boundingRect = mainCanvas.getBoundingClientRect();
      console.log('rect', boundingRect);
      this.setState({
        width: boundingRect.width,
        height: boundingRect.height,
      }, ()=>this.drawBackground())
    }
  }

  drawBackground() {
    const backgroundCanvas = document.getElementById(
      "backgroundImage"
    );
    const ctx = backgroundCanvas.getContext("2d");
    if (!ctx) return;
    const w = this.state.width;
    const h = this.state.height;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.85);
    ctx.quadraticCurveTo(w / 1.85, h, w, h / 2);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = "#393939";
    ctx.strokeStyle = "#393939";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  componentDidMount() {
    window.addEventListener("resize", ()=>this.onResize());
    this.performBackgroundUpdate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ()=>this.onResize);
  }

  render() {
    const {width, height} = this.state;
    return (
      <div style={{
        height: '100%',
        width: '100%',
        position: "fixed",
        backgroundColor: '#3e3e3e',
        zIndex: -2
      }} id={'main'}>
        <div>
          <canvas
            style={{
              position: 'fixed',
              zIndex: -1,
            }}
            id="backgroundImage"
            width={width}
            height={height}
          />
        </div>
      </div>
    );
  }
}

export default Background;
