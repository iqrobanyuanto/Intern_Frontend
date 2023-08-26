import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterManager.css";
import illusregister from "../assets/register.png";

const RegisterManager = () => {
  const navigate = useNavigate();
  return (
    <div id="register-body">
      {/*body*/}

      {/*Header */}
      <div className="register-company font-poppins text-white font-semibold text-2xl text-center pt-[30px] sm:text-left sm:pl-[30px] sm:text-3xl">
        <h2>Industrial</h2>
      </div>
      {/*End Header */}

      <div className="register-container flex items-center justify-center mt-[3rem] gap-[12rem]">
        <div className="register-form flex flex-col items-center p-5 rounded-2xl sm:w-[400px] sm:rounded-3xl">
          <h2 className="font-poppins font-bold text-white text-xl sm:text-2xl">Join This Website</h2>

          {/*username */}
          <h3 className="font-poppins font-medium text-white text-sm mt-[1rem] sm:text-md">Username</h3>
          <input className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Username" />
          {/*end username */}

          {/*password */}
          <h3 className="font-poppins font-medium text-white text-sm mt-[1rem] sm:text-md">Password</h3>
          <input type="password" className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Password" />
          {/*end password */}

          {/*Telp */}
          <h3 className="font-poppins font-medium text-white text-sm mt-[1rem] sm:text-md">Telp</h3>
          <input type="text" className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Telp" />
          {/*end Telp */}

          {/*Alamat */}
          <h3 className="font-poppins font-medium text-white text-sm mt-[1rem] sm:text-md">Alamat</h3>
          <input type="text" className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Alamat" />
          {/*end Alamat */}

          {/*button */}
          <button className="bg-sky-500 w-[250px] font-poppins font-medium text-white py-2 mt-6 rounded-md sm:w-[280px]">Register</button>
          {/*end button */}

          <h2 className="text-white font-poppins text-[12px] mt-4 sm:text-[16px]">
            Have an Account ?{" "}
            <span className="text-sky-500 cursor-pointer" onClick={() => navigate("/LoginManager")}>
              Login
            </span>
          </h2>
        </div>
        <img src={illusregister} className="register-illus hidden sm:flex w-[500px]" />
      </div>
      {/*end body */}
    </div>
  );
};

export default RegisterManager;
