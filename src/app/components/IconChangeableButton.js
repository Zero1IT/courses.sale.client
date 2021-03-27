import React, {useCallback, useState} from "react";
import {Button} from "react-bootstrap";

function IconChangeableButton({icons, selectedIconCallback, ...rest}) {
  if (!icons.length) {
    throw Error(`Icons length is ${icons.length}`);
  }

  const [clickTimes, setClickTimes] = useState(0);
  const btnClick = useCallback(() => {
    setClickTimes((prev) => {
      const newState = (prev + 1) % icons.length;
      selectedIconCallback && selectedIconCallback(newState);
      return newState;
    });
  }, [icons.length, selectedIconCallback]);

  return (
    <Button {...rest} onClick={btnClick}>{icons[clickTimes]}</Button>
  )
}

export default IconChangeableButton;