import { Navigate, useOutlet, Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import { AppBar } from "./AppBar";

export const ProtectedLayout = () => {
  // const { user } = useAuth();
  const outlet = useOutlet();
  let token = true;

  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  if (false) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" }
        ]}
      /> */}
      {outlet}
    </div>
  );
};
