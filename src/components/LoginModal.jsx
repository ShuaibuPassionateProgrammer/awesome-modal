
const LoginModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[400px] bg-white p-6 shadow rounded relative">
        <div className="flex justify-between">
          <div className="mb-4">
            <h1 className="text-xl font-bold">Login</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="w-full rounded bg-gray-200 px-4 py-2" />
          <input type="password" placeholder="Password" className="w-full rounded bg-gray-200 px-4 py-2" />
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;