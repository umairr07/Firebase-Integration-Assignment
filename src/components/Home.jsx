// import { signOut } from "firebase/auth";
// import { auth } from "../config/firebase";

function Home() {
  //   const logOut = async () => {
  //     const user = await signOut(auth);
  //     // console.log("logged out");
  //     console.log("logged out", user);
  //   };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-24">
        <h1 className="text-4xl font-mono font-bold">
          Hey👋 there User thank you for sigining in...
        </h1>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
          onClick={logOut}
        >
          Logout
        </button> */}
      </div>
    </div>
  );
}

export default Home;
