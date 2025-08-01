import { IoClose } from "react-icons/io5";

const SignupModal = ({ setIsSignUpModal, setIsLoginModal }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black/50 fixed top-0 left-0">
      <div className="w-[400px] bg-white p-6 shadow rounded relative">
        <div className="flex justify-between">
          <div className="mb-4">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <IoClose
              size={20}
              onClick={() => setIsSignUpModal(false)}
              className="cursor-pointer absolute top-5 right-5"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded bg-gray-200 px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded bg-gray-200 px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded bg-gray-200 px-4 py-2"
          />
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an Account?{" "}
            <button
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setIsLoginModal(true);
                setIsSignUpModal(false);
              }}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;