import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const funnyMessages = [
    "🚧 Oops! This form is still under construction. Maybe try carrier pigeon? 🐦",
    "🔮 Our crystal ball says this form isn't ready yet. Try again in 2099! ⏳",
    "🚀 Houston, we have a problem. This form isn't operational... yet! 👨‍🚀",
    "🧙‍♂️ Abracadabra! ...Nope, still can't make this form work. Magic is tricky! 🎩",
    "🏖️ This form is on vacation. Please leave a message after the coconut. 🥥",
    "🤖 Beep boop... Form not found. Have you tried turning it off and on again? 🔌",
    "🍕 This form is as useful as a pizza without cheese. We're working on adding the toppings! 🧀",
    "🎭 Plot twist: This form is just pretending to be a form. It's actually a very convincing cake! 🎂",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormClick = () => {
    toast(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-8 rounded-lg w-full max-w-lg mx-auto text-white" onClick={handleFormClick}>
          <p className="text-gray-400 text-center mb-10">Please fill this form in a decent manner</p>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Full Name <div className="inline text-red-500">*</div></label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}

              className="w-1/2 p-3 bg-gray-700 rounded-md text-gray-400 placeholder-gray-500 cursor-not-allowed opacity-50"
              required
              disabled
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}

              className="w-1/2 p-3 bg-gray-700 rounded-md text-gray-400 placeholder-gray-500 cursor-not-allowed opacity-50"
              required
              disabled
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">E-mail <div className="inline text-red-500">*</div></label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}

            className="w-full p-3 bg-gray-700 rounded-md text-gray-400 placeholder-gray-500 cursor-not-allowed opacity-50"
            required
            disabled
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message <div className="inline text-red-500">*</div></label>
          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}

            className="w-full p-3 bg-gray-700 rounded-md text-gray-400 placeholder-gray-500 h-32 resize-none cursor-not-allowed opacity-50"
            required
            disabled
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"

            className="w-full p-3 bg-gradient-to-r from-fuchsia-500 to-orange-400 rounded-md text-white font-semibold hover:opacity-90 opacity-50 cursor-not-allowed"
            disabled
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;