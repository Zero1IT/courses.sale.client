import React, {useEffect, useMemo} from "react";
import cx from "classnames";
import {Button} from "react-bootstrap";

function CircleLoaderSuccess({active, success, onReset, duration= 1000, asButton, ...rest}) {

  useEffect(() => {
    if (active && success && onReset) {
      const timer = setTimeout(onReset, duration);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [active, success, onReset, duration]);

  const classes = useMemo(() => cx({
    "cls-btn": asButton,
    "cls-active": active,
    "cls-success": success
  }), [active, success, asButton]);

  if (asButton) {
    return <Button className={classes} {...rest}>{asButton}</Button>
  } else {
    return <div className={classes} />
  }
}

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

export {
  CircleLoaderSuccess, CircleLoader
}