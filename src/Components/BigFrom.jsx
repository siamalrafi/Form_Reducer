import React from 'react';
import { useReducer } from 'react';

const BigFrom = () => {
    const intiialState = 23

    const reducer = () => {
        console.log('object');
    };
    
    const [state, dispatch] = useReducer(reducer, intiialState);






    const submitHadle = (event) => {
        event.preventDefault();

        const form = event.target;
        const username = form.username.value;
        const emailAddress = form.emailAddress.value;
        const password = form.password.value;
        console.log(username, emailAddress, password);

    }

    return (

        <div>

            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
                <form
                    onSubmit={submitHadle}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="username">Username</label>
                            <input
                                name='username' id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input
                                name='emailAddress' id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">Password</label>
                            <input
                                name='password' id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Color</label>
                            <input id="color" type="color" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option>Surabaya</option>
                                <option>Jakarta</option>
                                <option>Tangerang</option>
                                <option>Bandung</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Range</label>
                            <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Date</label>
                            <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />


                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Text Area</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={""} />
                        </div>

                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>

        </div>

    );
};

export default BigFrom;