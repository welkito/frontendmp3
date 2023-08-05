import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./protected.routes"
// import addProduct from "views/product/components/addProduct.js";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useDispatch, useSelector } from "react-redux";
import { keepLogin } from "store/slices/auth/slices";
import { Toaster } from "react-hot-toast"
function App () {
  const dispatch = useDispatch()
  
  const { isKeepLoginLoading, } = useSelector(state => {
		return {
			isKeepLoginLoading : state.auth?.loading

		}
	})
  useEffect(() => {
    dispatch(keepLogin())
  }, [])
  
  
  if (isKeepLoginLoading) return (
    <div className="h-screen w-screen flex flex-row align-bottom justify-center">
			<span className="loading loading-dots loading-lg"></span>
		</div>
	)
  
  return (<div>

    <Routes>
      {/* <Route path="/admin/product/editProduct" element={<addProduct/>}/> */}
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={
        <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
        <Toaster
       />
  </div>
  );
};

export default App;
