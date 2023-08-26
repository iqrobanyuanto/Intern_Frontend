import user from "../assets/user.png";

export default function Nav() {
  return (
    <div className="navbar bg-transparent px-3 sm:px-7 py-6 sm:py-7 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-white normal-case text-2xl sm:text-[35px]">Industrial</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-1.5 sm:mr-0">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 sm:w-12 rounded-full">
              <img src={user} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 sm:w-48 items-center">
            <p className="justify-center font-bold text-lg mb-4 mt-3">Rifki</p>
            <p className="justify-center font-medium text-sm">Status : Manager</p>
            <p className="justify-center font-medium text-sm mt-2.5">08037362736</p>
            <button className="btn btn-sm logout text-white !text-xs w-28 mt-5 mb-3">Logout</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
