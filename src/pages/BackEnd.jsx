import React, { useState } from 'react';
import axios from 'axios';

function BackEnd() {
    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        No_Phone: '',
        Activity: '',
        Service: '',
        Date: ''
    });

    const [selectedRadio, setSelectedRadio] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.value);
        setFormData({
            ...formData,
            Activity: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5173/api/user/save', formData);
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <h1>User Answer</h1>
            <form onSubmit={handleSubmit}>
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
                            name="First_Name"
                            id="first-name"
                            autoComplete="given-name"
                            value={formData.First_Name}
                            onChange={handleChange}
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
                            name="Last_Name"
                            id="last-name"
                            autoComplete="family-name"
                            value={formData.Last_Name}
                            onChange={handleChange}
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
                            name="No_Phone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.No_Phone}
                            onChange={handleChange}
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
                            name="Service"
                            autoComplete="Services"
                            value={formData.Service}
                            onChange={handleChange}
                            required
                            className="block w-full md:w-32 rounded-md border-0 py-1.5 px-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>
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

                <div className="sm:col-span-3">
                    <label
                        htmlFor="Date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="Date"
                            id="date"
                            value={formData.Date}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BackEnd;
