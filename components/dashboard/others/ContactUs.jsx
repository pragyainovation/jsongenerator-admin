function ContactUs() {
  return (
    <div className="border rounded w-full h-full overflow-y-auto custom-scrollbar p-6 bg-gray5">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        {/* Contact Information Section */}
        <div className="space-y-6">
          {/* Office Address */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Office Address</h2>
              <p className="text-gray-700">
                123 Main Street, Suite 400
                <br />
                City, State, ZIP Code
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-700">contact@example.com</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-2xl">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start space-x-4">
            <div className="text-green-500 text-2xl">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div>
              <h2 className="text-lg font-semibold">WhatsApp</h2>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <a href="mailto:contact@example.com" className="px-6 py-2 bg-black w-full sm:w-auto text-white rounded-md shadow hover:bg-gray-800">
            Email
          </a>
          <a href="tel:+1234567890" className="px-6 py-2 bg-black w-full sm:w-auto text-white rounded-md shadow hover:bg-gray-800">
            Call
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-black w-full sm:w-auto text-white rounded-md shadow hover:bg-gray-800">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
