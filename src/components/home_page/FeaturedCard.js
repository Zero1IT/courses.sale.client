import React from "react";
import {Card} from "react-bootstrap";

function FeaturedCard() {
  return (
    <Card className="p-3 col-12 col-md-6 col-lg-3 slide-up-anim-parent border-0 bg-transparent">
      <div className="card-wrapper text-center">
        <div className="card-img position-relative">
          <img src="/img/065.jpg" className="w-100" alt="featured"/>
          <div className="card-img-btn p-2">
            <button className="btn btn-bw slide-up-anim">Просмотреть</button>
          </div>
        </div>
        <div className="card-bottom-title">
          <h4 className="card-title">Footer</h4>
        </div>
      </div>
    </Card>
  )
}

export default FeaturedCard;