import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  displayName: string;
  email: string;
  password: string;
}

const AuthContext = createContext<{
  userInfo: UserInfo | unknown;
  logOut: () => void;
}>({
  userInfo: {},
  logOut: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserInfo | unknown>({});

  const logOut = async () => {
    await localStorage.removeItem("pretest");
    setUserInfo({});
    navigate("/signin");
  };

  React.useEffect(() => {
    const userInfo = localStorage.getItem("pretest");
    if (!userInfo) return;
    const parsedUserInfo = JSON.parse(userInfo);
    setUserInfo(parsedUserInfo);
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
