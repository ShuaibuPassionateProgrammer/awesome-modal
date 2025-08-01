const Contact = () => {
  return (
    <div className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
