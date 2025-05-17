import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Utils/appContext";
import { useFetchQuery } from "../Utils/useQueries";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  const { setUserData } = useAppContext();

  const useID = localStorage.getItem("userId");

  useFetchQuery({
    key: ["GET_USER_DATA", useID],
    route: `Customer/${useID}/`,
    enabled: Boolean(useID),
    success: (response: any) => {
      setUserData(response?.data[0]);
    },
  });

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
