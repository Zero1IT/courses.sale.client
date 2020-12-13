import React from "react";

function CircleLoader() {
  const circles = [];
  for (let i = 1; i <= 20; i++) {
    const style = {"--i": i};
    circles.push(<span style={style}/>)
  }

  return (
    <div className="mct-loader-container">
      <div className="mct-loader">
        {circles}
      </div>
    </div>
  );
}
export default CircleLoader;