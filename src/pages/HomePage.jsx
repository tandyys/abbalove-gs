import { useState } from "react";

function HomePage() {
  // State to track selected radio button
  const [selectedRadio, setSelectedRadio] = useState("");

  // Handling radio button change
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <div className="bg-white rounded-2xl shadow-lg border-y-8 border-red-600 p-6 md:p-8 lg:p-10 xl:p-12">
            <img
              className="mx-auto h-10 w-auto mb-4"
              src="src/assets/logo.png"
              alt="Your Company"
            />
            <form className="space-y-6" action="#" method="POST">
              <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
                Please fill the form
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
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
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
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
                      className="block w-full md:w-32 rounded-md border-0 py-1.5 px-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  htmlFor="Activity"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select activity
                </label>
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name="activity"
                        value="activity1"
                        checked={selectedRadio === "activity1"}
                        onChange={handleRadioChange}
                      />
                      <span className="ml-2">Ibadah Raya</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name="activity"
                        value="activity2"
                        checked={selectedRadio === "activity2"}
                        onChange={handleRadioChange}
                      />
                      <span className="ml-2">SPK</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name="activity"
                        value="activity3"
                        checked={selectedRadio === "activity3"}
                        onChange={handleRadioChange}
                      />
                      <span className="ml-2">Pemakaman</span>
                    </label>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name="activity"
                        value="activity4"
                        checked={selectedRadio === "activity4"}
                        onChange={handleRadioChange}
                      />
                      <span className="ml-2">Pernikahan</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name="activity"
                        value="activity5"
                        checked={selectedRadio === "activity5"}
                        onChange={handleRadioChange}
                      />
                      <span className="ml-2">DC</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="Availabilty"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select availability dates :
                </label>
                <div className="flex flex-col space-y-2">
                  {selectedRadio === "activity1" && (
                    <>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option1"
                        />
                        <span className="ml-2">7 July 2024</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option2"
                        />
                        <span className="ml-2">14 July 2024</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option3"
                        />
                        <span className="ml-2">21 July 2024</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option4"
                        />
                        <span className="ml-2">28 July 2024</span>
                      </label>
                    </>
                  )}

                  {selectedRadio === "activity2" && (
                    <>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option1"
                        />
                        <span className="ml-2">12 July 2024</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option2"
                        />
                        <span className="ml-2">15 July 2024</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-red-600"
                          name="option"
                          value="option3"
                        />
                        <span className="ml-2">27 July 2024</span>
                      </label>
                    </>
                  )}

                  {selectedRadio === "activity3" && (
                    <>
                      <p>There is no schedule</p>
                    </>
                  )}

                  {selectedRadio === "activity4" && (
                    <>
                      <p>There is no schedule</p>
                    </>
                  )}

                  {selectedRadio === "activity5" && (
                    <>
                      <p>There is no schedule</p>
                    </>
                  )}
                </div>
              </div>
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
        </div>
      </div>
    </>
  );
}

export default HomePage;
