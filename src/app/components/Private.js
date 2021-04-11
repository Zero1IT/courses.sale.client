import {useAuth} from "../hooks";

function Private({children, aRole, permission}) {
  const auth = useAuth();
  const currentPermissions = []; // TODO: loading
  if (aRole === auth.user.role || currentPermissions.includes(permission)) {
    return children;
  }
  return null;
}

export default Private;