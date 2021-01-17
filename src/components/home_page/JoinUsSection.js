import React from "react";
import EmailField from "../root/EmailField";

function JoinUsSection() {
  return (
    <section className="container-fluid">
      <div className="row block-h-1">
        <div className="col-lg-6 col-md-12 img-col">
          <img src="/img/join-us.jpg" alt="join us" className="adj-img"/>
        </div>
        <div className="col-lg-6 col-md-12 greet-block-1 dark-section">
          <h1 className="text-center mt-4">Заполни форму</h1>
          <div className="row justify-content-around mt-3">
            <form className="form-1 col-md-6">
              <div className="form-group">
                <input type="text" id="first_name" className="form-control" placeholder="Имя"/>
              </div>
              <div className="form-group">
                <input type="text" id="last_name" className="form-control" placeholder="Фамилия"/>
              </div>
              <div className="form-group">
                <input type="text" id="email" className="form-control" placeholder="Электронная почта"/>
              </div>
              <div className="form-group">
                <input type="password" id="password" className="form-control" placeholder="Пароль"/>
              </div>
              <div className="form-group">
                <input type="password" id="repeat_password" className="form-control" placeholder="Подтвердите пароль"/>
              </div>
              <button className="btn btn-primary">Регистрация</button>
            </form>
          </div>
          <h1 className="text-center text-uppercase mt-2">или</h1>
          <p className="text-center">Введи email и на почту будет выслан пароль для входа</p>
          <div className="row no-gutters justify-content-center pb-3">
            <div className="col-md-5">
              <EmailField />
            </div>
            <div className="col-md-2">
              <button className="btn btn-success">Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUsSection;