import React from "react";
import "./LoginAdmin.css";
import illusAdm from "../assets/login2.png";

const LoginAdmin = () => {
  return (
    <div id="loginadm-body">
      {/*body */}

      {/*Header */}
      <div className="loginadm-company font-poppins text-white font-semibold text-2xl text-center pt-[30px] sm:text-left sm:pl-[30px] sm:text-3xl">
        <h2>Industrial</h2>
      </div>
      {/*End Header */}

      <div className="loginadm-container flex justify-center mt-[9rem] sm:gap-[10rem] sm:mt-[5rem]">
        <div className="loginadm-form w-[300px] flex flex-col items-center p-7 rounded-3xl sm:w-[400px] sm:h-[290px] sm:mt-[4rem]">
          <h2 className="font-poppins font-bold text-white text-xl sm:text-2xl">Welcome Back</h2>

          {/*kode */}
          <h3 className="font-poppins font-medium text-white text-md mt-[2rem]">Kode Pegawai</h3>
          <input type="password" className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Kode Pegawai" />
          {/*end kode */}

          {/*button */}
          <button className="bg-sky-500 w-[250px] font-poppins font-medium text-white py-2 mt-9 rounded-md sm:w-[280px]">SignIn</button>
          {/*end button */}
        </div>
        <img src={illusAdm} className="loginadm-illus w-[450px] hidden sm:flex" />
      </div>

      {/*end body */}
    </div>
  );
};

export default LoginAdmin;
