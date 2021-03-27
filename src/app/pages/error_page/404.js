import React from "react";
import {useLocation} from "react-router-dom";
import Link from "../../components/Link";
import {Button} from "react-bootstrap";

function Error404({close}) {
  const location = useLocation();

  let message;
  let action;

  if (close) {
    message = <>
        <h2>Упс! Запрашиваемый ресурс не найден</h2>
        <p>Ресурс был удалён или перемещён</p>
      </>;
    action = <Button variant="outline-success" onClick={close}>Закрыть</Button>;
  } else {
    message = <>
        <h2>Упс! Страница не найдена: <em>{location.pathname}</em></h2>
        <p>Извините, страница, которую вы ищите, удалена или была перемещена</p>
      </>;
    action = <Link to="/">На главную страницу</Link>;
  }

  return (
    <div className="notfound">
      <div>
        <div className="notfound-img"/>
        <h1>404</h1>
        {message}
        {action}
      </div>
    </div>
  )
}

export default Error404;