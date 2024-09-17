import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeader, Container, Loader } from "./components";
import { Toaster } from "react-hot-toast";
import { authService } from "./service";
import { useDispatch } from "react-redux";
import { storeAdminLogin } from "./store/authSlice/authSlice";

function AdminApp() {
  // local state
  const [loading,setLoading]=useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // On Page Load => Fetch the currently logged-in Admin (if at all)
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await authService.getCurrentAdmin();
        if (response) {
          // modify the admin auth slice
          dispatch(storeAdminLogin({ adminData: response.data }));
          // redirect to the inventory
          navigate("/admin/inventory", { replace: true });
        }
      } catch (error) {
        console.log(`Admin Login failed | Error = ${error.message}`);
        throw error;
      } finally{
        setLoading(false);
      }
    })();
  }, []);

  if(loading){
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Loader/>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Toaster />
      <div className="min-h-[80vh] flex-grow w-full flex flex-col justify-start items-center">
        <AdminHeader />
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default AdminApp;