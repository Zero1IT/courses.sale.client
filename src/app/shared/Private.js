import {useAuth} from "../hooks";

function Private({children, aRole}) {
  const auth = useAuth();
  if (aRole === auth.user.role) {
    return children;
  }
  return null;
}

export default Private;