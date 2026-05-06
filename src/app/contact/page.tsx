'use client'
import { MapPin, Mail, Building } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Now</h2>
          <p className="text-gray-600 mb-8">
           Reach out to us today! Our dedicated team is here to assist you with any inquiries regarding our products, services, or your account.
          </p>

     <form
  className="space-y-5"
onSubmit={async (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = {
    organization: formData.get("organization"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    requirements: formData.get("requirements"),
  };

  try {
    const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const result = await res.json();
    alert(result.message);
    form.reset();
  } catch (err) {
    alert("Failed to send email.");
    console.error(err);
  }
}}

>
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Organization Name
    </label>
    <input
      type="text"
      name="organization"
      placeholder="Your company name"
      className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      Contact Number
    </label>
    <input
      type="text"
      name="phone"
      placeholder="+91 1234567890"
      className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">
      Your Requirements
    </label>
    <textarea
      name="requirements"
      rows={4}
      placeholder="Please tell us about your project..."
      className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
  >
    Submit Request
  </button>
</form>

        </div>

        {/* Right - Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
           <p className="flex items-center gap-3 text-gray-700">
  <Mail className="w-5 h-5 text-indigo-600" />
  <a
    href="mailto:Mahesh@traceefin.com"
    className="font-semibold text-indigo-600 hover:underline"
  >
    Mahesh@traceefin.com
  </a>
</p>


              <div className="flex items-start gap-3 text-gray-700">
                <Building className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-semibold">Office Address</p>
                  Traceefin.com Private limited<br />
                  2A, 2nd Floor, SUN PLAZA <br />
                  Old No# 19, New No# 39 <br />
                  G.N. Chetty Road, <br />
                  Chennai – 600006
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <p className="font-semibold">Connect with Us</p>
                  <a href="#" className="text-indigo-600 hover:underline">
                    Facebook
                  </a>{" "}
                  |{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.939317090489!2d80.243272!3d13.059345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664e1b5cbb6d%3A0x4a6c8c44f5e1a08b!2sSun%20Plaza%2C%20G%20N%20Chetty%20Rd%2C%20Chennai%2C%20Tamil%20Nadu%20600006!5e0!3m2!1sen!2sin!4v1694345678901!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
