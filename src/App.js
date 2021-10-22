import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import React from "react";
import Routes from "Routes";

export default function App(){
  return(
    <div>
      <Routes/>
      <ToastContainer autoClose={3000}/>
    </div>
  );

};