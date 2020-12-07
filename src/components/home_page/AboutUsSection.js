import React from "react";

function AboutUsSection() {
  return (
    <section className="container">
      <div className="row block-h-1">
        <div className="col-8">
          <div className="row">
            <div className="col-6 col-sm-5 col-lg-3 mt-5 pt-5">
              <h1>Немного о нас</h1>
              <hr className="wrap-line float-left" width="50px"/>
            </div>
            <div className="col-12 mt-5">
              <p>
                Здесь нужен текст, помогите его придумать, помогите его придумать, помогите его придумать,
                помогите его придумать, помогите его придумать, помогите его придумать, помогите его придумать,
                помогите его придумать, помогите его придумать, помогите его придумать.
              </p>
            </div>
            <div className="col-12 col-md-6 col-sm-6 mt-4">
              <button className="btn btn-blw">Узнать больше</button>
            </div>
          </div>
        </div>
        <div className="col-4 img-col d-none d-md-block">
          <img src="/img/graduation.jpg" alt="student" className="adj-img"/>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection;