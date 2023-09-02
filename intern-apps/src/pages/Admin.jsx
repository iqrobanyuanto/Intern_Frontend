import Nav from "../components/nav";
import sort from '../assets/sort.png';
import edit from '../assets/edit.png';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

export default function Admin() {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTM3MjY2NzcsInJvbGUiOiJtYW5hZ2VyIiwidXNlcl9pZCI6M30.Qzq9dNNA7eFdD5AR9ApXEz6aaAEiVg0YPe9sFLjId2M';
    const [allProduct, setAllProduct] = useState([])
    const [category, setCategory] = useState(null)
    const [search, setSearch] = useState('')
    const isFirstRun = useRef(true);

    useEffect(() => {
        const getAllUrl = "https://internbackend-production.up.railway.app/get-product/search"

        const fetchAllData = async () => {
            try {
                const response = await axios.get(getAllUrl, {
                    headers: {
                        Authorization: token,
                    }
                });
                const data = await response.data.barangModel;
                setAllProduct(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllData()
    }, [])

    const handleCategory = (e) => {
        const value = e.target.getAttribute("data-value")
        setCategory(value)
    }

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        const getFilteredData = async () => {
            try {
                const filterResponse = await axios.get(`https://internbackend-production.up.railway.app/get-product/filter?kategori=${category}`, {
                    headers: {
                        Authorization: token,
                    }
                })
                const filteredData = await filterResponse.data.barangModel
                setAllProduct(filteredData)
            } catch (err) {
                console.log(err)
            }
        }
        getFilteredData()
    }, [category])

    const handleSearch = () => {
        const getSearchedData = async () => {
            try {
                const searchResponse = await axios.get(`https://internbackend-production.up.railway.app/get-product/search?nama=${search}`, {
                    headers: {
                        Authorization: token,
                    }
                })
                const searchData = await searchResponse.data.barangModel
                setAllProduct(searchData)
            } catch (err) {
                console.log(err)
            }
        }
        getSearchedData()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            event.target.value = ''
        }
    };

    return (
        <div className="gradient min-h-screen">
            <Nav />
            <div className="px-8 mt-0 sm:mt-2.5">
                <div className="flex justify-center">
                    <div className="form-control flex-row items-center w-3/4 sm:w-auto">
                        <div className="input-group justify-center">
                            <input
                                type="text"
                                placeholder="Search product…"
                                onChange={(e) => setSearch(e.target.value)}
                                className="input input-bordered product-card input-sm sm:input-md sm:w-80 w-full sm:text-lg text-sm"
                                onKeyDown={handleKeyDown}
                            />
                            <button className="btn btn-square btn-sm sm:btn-md search-btn" onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 search-img" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>

                    </div>
                    <div className="dropdown ml-2 sm:ml-4 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img src={sort} className="h-8 sm:h-10" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow profile-drop rounded-box w-40">
                            <li><a onClick={handleCategory} data-value="Makanan" className="justify-center filters">Makanan</a></li>
                            <li><a onClick={handleCategory} data-value="Minuman" className="justify-center filters">Minuman</a></li>
                            <li><a onClick={handleCategory} data-value="Kesehatan" className="justify-center filters">Kesehatan</a></li>
                            <li><a onClick={handleCategory} data-value="Kecantikan" className="justify-center filters">Kecantikan</a></li>
                            <li><a onClick={handleCategory} data-value="Perabotan" className="justify-center filters">Perabotan</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full flex mt-12 sm:mt-20">
                <div className="flex w-full justify-center">
                    <div className="flex w-4/5 lg:w-3/5 justify-center flex-col shadow-bot">
                        <div className="flex gap-4 sm:gap-5 flex-wrap justify-center h-[450px] overflow-y-scroll">
                            {allProduct.map((e, i) => (
                                <div key={i} className="card w-44 h-24 sm:w-60 sm:h-28 bg-base-100 shadow-xl product-card rounded-[10px]">
                                    <div className="card-body px-4 py-[15px]">
                                        <h2 className="card-title text-xs sm:text-sm pt-0 capitalize">{e.nama}</h2>
                                        <p className="text-xs">Harga : Rp.{e.harga}</p>
                                        <div className="flex flex-row">
                                            <p className="text-xs stok">Tersedia : {e.jumlah} barang</p>
                                            <Link to={`/${e.id}`}>
                                                <img src={edit} alt="Edit" className="h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divide mt-7"></div>
                    </div>
                </div>
                <div className="fixed left-[81%] top-[88%] lg:left-[88%] lg:top-[88%] flex justify-center items-center">
                    <Link to="/AddData">
                        <button className="btn w-14 h-14 sm:w-32 sm:h-16 bg-[#1F531E] rounded-3xl text-white font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-green-950 border-0 capitalize p-0">
                            <p className="hidden sm:block">Add Product</p>
                            <p className="font-bold text-2xl sm:text-base">+</p>
                        </button>
                    </Link>
                    {/* <button className="btn">Add product +</button> */}
                </div>
            </div>
        </div>
    )
}