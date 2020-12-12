import React from "react";
import {Route, Link as RouterLink} from "react-router-dom";
import {createPath} from "history";

const Link = ({to, replace, ...props}) => (
  <Route path={typeof to === 'string' ? to : createPath(to)} exact>
    {
      ({match}) => <RouterLink {...props} to={to} replace={replace || !!match} />
    }
  </Route>
);

Link.propTypes = RouterLink.propTypes;
Link.defaultProps = RouterLink.defaultProps;

export default Link;