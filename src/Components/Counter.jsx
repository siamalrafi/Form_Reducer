import React from 'react';
import { useReducer } from 'react';

const Counter = () => {
    const initialstate = {
        fName: '',
        lName: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zip: '',
        term: false,


    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
            case "TOOGLE":
                return {
                    ...state,
                    term: !state.term,
                }

            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate);



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <div className='flex justify-center mt-10'>


            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            name='fName'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            name='lName'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                        </label>
                        <input
                            name='email'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="******************" />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input
                            name='password'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input
                            name='city'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select
                                name='state'
                                onBlur={(e) => dispatch({
                                    type: 'INPUT',
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label>
                        <input
                            name='zip'
                            onBlur={(e) => dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={90210} />

                    </div>

                    <input name="term"
                        onClick={() => dispatch({
                            type: 'TOOGLE'
                        })} type="radio" className="radio radio-primary" />

                </div>
                <input className='btn btn-success btn-sm' type="submit" value="Submit" disabled={!state.term} />
            </form>
        </div>
    );
};

export default Counter;