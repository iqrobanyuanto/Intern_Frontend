import Nav from "../components/nav"
import sort from '../assets/sort.png'
import edit from '../assets/edit.png'

export default function Admin() {

    const productsData = [
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },
        {
            judul: "Indomie goreng jumbo",
            harga: "Rp.10.000/box",
            stok: "100box"
        },

    ]

    return (
        <div className="gradient min-h-screen">
            <Nav />
            <div className="px-8 mt-0 sm:mt-2.5">
                <div className="flex justify-center">
                    <div className="form-control flex-row items-center w-3/4 sm:w-auto">
                        <div className="input-group justify-center">
                            <input type="text" placeholder="Search product…" className="input input-bordered product-card input-sm sm:input-md sm:w-80 w-full sm:text-lg text-sm" />
                            <button className="btn btn-square btn-sm sm:btn-md search-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 search-img" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>

                    </div>
                    <div className="dropdown ml-2 sm:ml-4 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img src={sort} className="h-8 sm:h-10" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow profile-drop rounded-box w-40">
                            <li><a className="justify-center filters">Makanan</a></li>
                            <li><a className="justify-center filters">Minuman</a></li>
                            <li><a className="justify-center filters">Kesehatan</a></li>
                            <li><a className="justify-center filters">Kecantikan</a></li>
                            <li><a className="justify-center filters">Perabotan</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full flex mt-12 sm:mt-20">
                <div className="flex w-full justify-center">
                    <div className="flex w-4/5 lg:w-3/5 justify-center flex-col shadow-bot">
                        <div className="flex gap-4 sm:gap-5 flex-wrap justify-center h-[450px] overflow-y-scroll">
                            {productsData.map((e, i) => (
                                <div key={i} className="card w-44 h-24 sm:w-60 sm:h-28 bg-base-100 shadow-xl product-card rounded-[10px]">
                                    <div className="card-body px-4 py-[15px]">
                                        <h2 className="card-title text-xs sm:text-sm pt-0">{e.judul}</h2>
                                        <p className="text-xs">Harga : {e.harga}</p>
                                        <div className="flex flex-row">
                                            <p className="text-xs stok">Tersedia : {e.stok}</p>
                                            <a href="">
                                                <img src={edit} alt="Edit" className="h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divide mt-7"></div>
                    </div>
                </div>
                <div className="fixed left-[81%] top-[88%] lg:left-[88%] lg:top-[88%] flex justify-center items-center">
                    <button className="btn w-14 h-14 sm:w-32 sm:h-16 bg-[#1F531E] rounded-3xl text-white font-semibold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-green-950 border-0 capitalize p-0">
                        <p className="hidden sm:block">Add Product</p>
                        <p className="font-bold text-2xl sm:text-base">+</p>
                    </button>
                    {/* <button className="btn">Add product +</button> */}
                </div>
            </div>
        </div>
    )
}