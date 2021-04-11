import React from "react";
import {CircleLoader} from "./Loaders";
import ErrorViewer from "./ErrorViewer";

function StorageQueryWaiting({data, children}) {
  if (!data) {
    return <CircleLoader noBg />
  }

  // TODO: error handler
  return data ? children(data) : <ErrorViewer error={{msg: "Error handler not found SQW:11"}} />
}

export default StorageQueryWaiting;