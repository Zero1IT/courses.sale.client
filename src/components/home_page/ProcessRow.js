import React from "react";


function ProcessRow(props) {
  return (
    <div className="row mt-5 align-items-center">
      <div className="offset-1 mr-5 col-5 col-sm-4 col-lg-4">
        <div className="card r-arrow">
          <div className="card-header px-lg-1 py-lg-3 px-1 py-1">
            {props.text}
          </div>
        </div>
      </div>
      <div className="col-md-2 col-lg-1 col-2 b-card py-4">
        <div className="v-line" style={{height: "100%"}} />
        {props.content || props.children}
      </div>
    </div>
  )
}

export default ProcessRow;