import React from "react";

function GreetingSection() {

  const startBtnClick = () => {
    document.getElementById("mail").scrollIntoView({behavior: "smooth"});
  };

  return (
    <section className="container-fluid">
      <div className="row block-h-1">
        <div className="col-lg-6 col-md-12 dark-section greet-block-1 p-5">
          <h1 className="pb-3">Доступное онлайн обучение</h1>
          <p className="my-5">
            Портал создан для предоставления доступа как к платным, так и бесплатным обучающим курсам.
            Чтобы начать пользоваться курсами, или предоставить свои услуги, необходимо зарегистрироваться.
          </p>
          <div className="btn-group p-3">
            <button onClick={startBtnClick} className="btn btn-bw py-2 px-4">Нажми чтобы начать</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 img-col">
          <img src="/img/home-student.jpg" alt="student" className="adj-img"/>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection;