import { useCreateUser } from "@/api/userCreateApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const hasCreatedUser = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({
        auth0Id: user.sub,
        email: user.email
      });
      hasCreatedUser.current = true;
    }
    navigate("/")
  }, [,createUser, navigate,user]);
  return <>loading....</>
};
export default AuthCallbackPage;