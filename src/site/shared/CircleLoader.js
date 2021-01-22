import React from "react";
import cx from "classnames";

const circles = [];

for (let i = 1; i <= 20; i++) {
  const style = {"--i": i};
  circles.push(<span key={i} style={style}/>)
}

function CircleLoader({small, noBg}) {
  const styles = cx({
    "mct-loader-bg": !noBg,
    "mct-loader-no-bg": noBg,
    "mct-loader-full": !small,
    "mct-loader-small": small
  });

  return (
    <div className={[styles, "mct-loader-container"].join(" ")}>
      <div className="mct-loader">
        {circles}
      </div>
    </div>
  );
}
export default CircleLoader;