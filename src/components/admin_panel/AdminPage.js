import React, {Suspense} from "react";

import CircleLoader from "../shared/CircleLoader";
import {Route, Switch} from "react-router-dom";

const AdminComponent = React.lazy(() => import('./panel/AdminComponent'));

const AdminPage = () => (
  <Suspense fallback={<CircleLoader />}>
    <Switch>
      <Route path="/admin" component={AdminComponent} />
    </Switch>
  </Suspense>
);

export default AdminPage;