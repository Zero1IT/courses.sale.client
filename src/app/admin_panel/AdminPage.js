import React, {Suspense} from "react";

import {Route, Switch} from "react-router-dom";
import {CircleLoader} from "../components/Loaders";

const AdminComponent = React.lazy(async () => import('./panel/AdminComponent'));

const AdminPage = () => (
  <Suspense fallback={<CircleLoader />}>
    <Switch>
      <Route path="/admin" component={AdminComponent} />
    </Switch>
  </Suspense>
);

export default AdminPage;