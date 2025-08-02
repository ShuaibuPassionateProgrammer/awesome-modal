import { IoClose } from "react-icons/io5";

const ForgotPasswordModal = ({ setIsForgotPasswordModal }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black/50 fixed top-0 left-0">
      <div className="w-[400px] bg-white p-6 shadow rounded relative">
        <div className="flex justify-between">
          <div className="mb-4">
            <h1 className="textxl font-bold">Reset Password</h1>
            <IoClose size={28} onClick={() => setIsForgotPasswordModal(false)} className="cursor-pointer absolute top-5 right-5" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-base">Enter your email address Address, the we will send you OTP</p>
          <input type="email" placeholder="Email" className="w-full rounded bg-gray-200 px-4 py-2" />
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;