function HomePage() {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
            Please fill the form
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  autoComplete="phoneNumber"
                  required
                  className="block w-64 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Services"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Services type
              </label>
              <div className="mt-2">
                <select
                  id="Services"
                  name="Services"
                  autoComplete="Services"
                  required
                  className="block w-32 rounded-md border-0 py-1.5 pl-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected hidden>
                    Select one
                  </option>
                  <option value="singer">Singer</option>
                  <option value="wl">WL</option>
                  <option value="drum">Drum</option>
                  <option value="guitar">Guitar</option>
                  <option value="bass">Bass</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="biola">Biola</option>
                  <option value="saxophone">Saxophone</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="Availabilty"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select dates :
            </label>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="option"
                  value="option1"
                  // checked={selectedOption === 'option1'}
                  // onChange={handleOptionChange}
                />
                <span className="ml-2">Date 1</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="option"
                  value="option1"
                  // checked={selectedOption === 'option1'}
                  // onChange={handleOptionChange}
                />
                <span className="ml-2">Date 2</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="option"
                  value="option1"
                  // checked={selectedOption === 'option1'}
                  // onChange={handleOptionChange}
                />
                <span className="ml-2">Date 3</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  name="option"
                  value="option1"
                  // checked={selectedOption === 'option1'}
                  // onChange={handleOptionChange}
                />
                <span className="ml-2">Date 4</span>
              </label>
            </div>
          </div>
          {/* <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="checkbox" className="ml-2 text-sm text-gray-700">
              I can take responsibility for my choices
            </label>
          </div> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
          <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
            Jesus blessed you!
          </p>
        </form>
      </div>
    </>
  );
}

export default HomePage;
