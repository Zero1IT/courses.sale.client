import React from "react";
import ProcessRow from "./ProcessRow";

function ProcessSection() {

  const processes = [
    [<i className="icon-2 icofont-search-2"> </i>, "Найди интересующий курс в списке доступных курсов"],
    [<i className="icon-2 icofont-read-book"> </i>, "Прочти информацию о курсе, которая предоставляется лектором"],
    [<i className="icon-2 icofont-meeting-add"> </i>, "Запишись на курс, в заданную дату"],
    [<i className="icon-2 icofont-brainstorming"> </i>, "Отслеживай информацию о курсе в личном кабинете"],
  ];

  return (
    <section className="container">
      <div className="block-h-1 text-center pb-5">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-6">
            <div className="card">
              <div className="card-body">
                <h1>Процесс</h1>
                <p>Процесс записи пользователя на курсы, предоставляемые порталом</p>
              </div>
            </div>
          </div>
        </div>
        {processes.map(item => <ProcessRow content={item[0]} text={item[1]} />)}
      </div>
    </section>
  )
}

export default ProcessSection;