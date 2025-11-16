import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
