import React from "react";
import "./AddData.css";
import Nav from "../components/nav";

const AddData = () => {
  return (
    <div id="add-body">
      {/*Header */}
      <Nav />
      {/*End Header */}

      <div className="add-container flex justify-center mt-[3rem] sm:mt-[4rem]">
        <div className="add-card bg-black w-[300px] p-5 rounded-xl sm:w-auto sm:p-7">
          <div className="add-card-header justify-between flex items-center">
            <h2 className="text-white font-poppins font-semibold sm:text-2xl">Add Data</h2>
          </div>
          <div className="add-form text-center mt-[1rem] sm:flex sm:items-center sm:gap-[60px] sm:text-left sm:mt-[2rem]">
            {/*left Side */}
            <div className="add-left">
              <h2 className="text-white font-poppins font-medium">Nama Produk</h2>
              <input placeholder="Nama Produk" className="p-1 pl-3 bg-white rounded-md w-[230px] mt-2 text-black" />
              {/*space */}
              <h2 className="text-white font-poppins font-medium mt-3 sm:mt-8">Jumlah Produk</h2>
              <input placeholder="Jumlah Produk" className="p-1 pl-3 bg-white rounded-md w-[230px] mt-2 text-black" />
            </div>
            {/*end left Side */}

            {/*right side */}
            <div className="add-right mt-3 sm:mt-0">
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
            {/*end right side */}
          </div>
          <div className="add-button mt-5 justify-center flex sm:mt-8">
            <button className=" btn bg-sky-700 text-white px-6 py-2 mr-5 rounded-md font-poppins sm:mr-10 sm:px-8 hover:bg-sky-800 border-0 capitalize">Save</button>
            <button className="btn bg-red-700 text-white px-4 py-2 rounded-md font-poppins sm:px-6 hover:bg-red-800 border-0 capitalize">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
