// import React from "react";
// import Title from "./Title";

// TODO: Fix Contact.jsx

function Contact(isDarkMode) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const subject = event.target.elements.subject.value;
    const message = event.target.elements.message.value;


    if (!email || !subject || !message) {
      alert('All fields are required.');
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }



    // Do something with email, subject, and message
    // For example, open the user's email client
    // window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = `mailto:isidorssona@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };
  return (
    // <section className="bg-white dark:bg-gray-900">
    //  <section className={`bg-white dark:bg-gray-900`}>  
    <section className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">Got a technical issue? Want to give us feedback? Just want to say hi? We'd love to hear from you.</p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label for="email" className="block mb-2 text-sm font-extrabold text-black-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-extrabold text-black dark:text-white">Subject</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-extrabold text-black dark:text-white">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-extrabold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
    </section>

  );
}



export default Contact;
