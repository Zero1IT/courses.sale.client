import React from "react";

/**
 * Enum string values.
 * @enum {string}
 */
const WINDOW_TYPE = {
  small: "small",
  large: "large",
  medium: "medium"
};

const types = {
  [WINDOW_TYPE.large]: "modal-lg",
  [WINDOW_TYPE.small]: "modal-sm",
  [WINDOW_TYPE.medium]: "",
}

/**
 * @param id {Number} - modal id
 * @param children {Any} - modal content
 * @param title {String} - modal title
 * @param type {WINDOW_TYPE} - modal type
 * @return {JSX.Element}
 * @constructor
 */
function ModalWindow({id, children, title, type}) {
  return (
    <div id={id} className="modal fade" tabIndex="-1" role="dialog"
         aria-labelledby="xModalTitle" aria-hidden="true">
      <div className={"modal-dialog " + (types[type] || "")}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="mySmallModalLabel">{title}</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  ModalWindow,
  WINDOW_TYPE
};