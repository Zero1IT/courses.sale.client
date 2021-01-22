import React from "react";
import {useLocation} from "react-router-dom";

function NoMatch() {
  const location = useLocation();

  return (
    <div className="mt-5 pt-5">
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    </div>
  )
}

export default NoMatch;