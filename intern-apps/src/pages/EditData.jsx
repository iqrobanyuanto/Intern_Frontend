import React from "react";
import "./EditData.css";
import userimg from "../assets/user.png";
import Delete from "../assets/delete.png";
import Nav from "../components/nav";

const EditData = () => {
  return (
    <div id="edit-body">
      {/*Header */}
      <Nav />
      {/*End Header */}

      <div className="edit-container flex justify-center mt-[3rem] sm:mt-[4rem]">
        <div className="edit-card bg-black w-[300px] p-5 rounded-xl sm:w-auto sm:p-7">
          <div className="edit-card-header justify-between flex items-center">
            <h2 className="text-white font-poppins font-semibold sm:text-2xl">Edit Form</h2>
            <img src={Delete} className="w-[30px] sm:w-[35px] cursor-pointer" />
          </div>
          <div className="edit-form text-center mt-[1rem] sm:flex sm:items-center sm:gap-[60px] sm:text-left sm:mt-[2rem]">
            <div className="edit-left">
              <h2 className="text-white font-poppins font-medium">Nama Produk</h2>
              <input placeholder="Nama Produk" className="p-1 pl-3 bg-white rounded-md w-[230px] mt-2 text-black" />
              {/*space */}
              <h2 className="text-white font-poppins font-medium mt-3 sm:mt-8">Jumlah Produk</h2>
              <input placeholder="Jumlah Produk" className="p-1 pl-3 bg-white rounded-md w-[230px] mt-2 text-black" />
            </div>
            <div className="edit-right mt-3 sm:mt-0">
              <h2 className="text-white font-poppins font-medium">Kategori</h2>
              <select class="select select-bordered select-sm w-[230px] h-[33px] bg-white mt-2 font-poppins font-normal rounded-md">
                <option disabled selected>
                  Masukan Kategori
                </option>
                <option>Makanan</option>
                <option>Minuman</option>
                <option>Kesehatan</option>
                <option>Kecantikan</option>
                <option>Perabotan</option>
              </select>
              {/*space */}
              <h2 className="text-white font-poppins font-medium mt-3 sm:mt-8">Harga Produk</h2>
              <input placeholder="Harga Produk" className="p-1 pl-3 bg-white rounded-md w-[230px] mt-2 text-black" />
            </div>
          </div>
          <div className="edit-button mt-5 justify-center flex sm:mt-10">
            <button className="bg-sky-700 text-white px-6 py-2 mr-5 rounded-md font-poppins sm:mr-10 sm:px-8">Save</button>
            <button className="bg-red-700 text-white px-4 py-2 rounded-md font-poppins sm:px-6">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditData;
