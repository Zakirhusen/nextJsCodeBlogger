import { useState } from "react";
const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    let name = inputs.name;
    let email = inputs.email;
    let phone = inputs.phone;
    let message = inputs.message;
    let data = { name, email, phone, message };
    // console.log(data);
    // / POST request using fetch()
    fetch("http://localhost:3000/api/contact", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));

    setInputs({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    // console.log(e);
  };
  const inputHandler = (e) => {
    // console.log(e)
    let name = e.target.name;

    setInputs((prevState) => {
      return { ...prevState, [name]: e.target.value };
    });
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  name
                </label>
                <input
                  value={inputs.name}
                  onChange={inputHandler}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="current-name"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={inputs.email}
                  onChange={inputHandler}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Password
                </label>
                <input
                  value={inputs.phone}
                  onChange={inputHandler}
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="current-phone"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone no"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Password
                </label>
                <textarea
                  value={inputs.message}
                  onChange={inputHandler}
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="current-message"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message "
                />
              </div>
            </div>

            <div>
              <button
                onClick={submitHandler}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
