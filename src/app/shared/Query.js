import React, {useEffect, useState} from "react";
import CircleLoader from "./CircleLoader";
import ErrorViewer from "../components/ErrorViewer";

/**
 * @param promise {Promise}
 * @param children {Function}
 * @return {JSX.Element|*}
 * @constructor
 */
function Query({promise, children}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    promise
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [promise]);

  if (loading) {
    return <CircleLoader noBg />
  }

  return data ? children(data) : <ErrorViewer error={error} />
}

export default Query;