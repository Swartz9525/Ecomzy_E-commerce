
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const PaymentProcess=()=>{
    const [formData, setFormData] = useState({ FullName: '', Mobile: '', PinCode: '', City: '', State: '', Address: '', Road: '' })
    const [focusedInput, setFocusedInput] = useState('');
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };
    function ChangeHandler(event) {
        const { id, name, value } = event.target;
        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value }
        })
    }
    useEffect(()=>{
        localStorage.setItem('formdataArr',formData);
    },[ChangeHandler])
    return(
      <div className="w-full">
        <form className="w-full py-[6rem] flex flex-col gap-5" >
                <div className="relative w-full flex justify-center items-center">
                    <input
                        type="text"
                        name="FullName"
                        className={`w-[96%] px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'FullName' ? 'border-blue-500' : ''
                            }`}
                        onFocus={() => handleFocus('FullName')}
                        onBlur={handleBlur}
                        onChange={ChangeHandler}
                        value={formData.FullName}
                        required
                    />
                    <label
                        className={`absolute top-1/2 ${formData.FullName === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-10 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'FullName'
                                ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                : ''
                            }`}
                    >
                        Full Name (Required)*
                    </label>
                </div>

                <div className="relative w-full flex justify-center items-center">
                    <input
                        type="text"
                        name="Mobile"
                        className={`w-[96%] px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'Mobile' ? 'border-blue-500' : ''
                            }`}
                        onFocus={() => handleFocus('Mobile')}
                        onBlur={handleBlur}
                        onChange={ChangeHandler}
                        value={formData.Mobile}
                        required
                    />
                    <label
                        className={`absolute top-1/2 ${formData.Mobile === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-10 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'Mobile'
                                ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                : ''
                            }`}
                    >
                        Mobile number (Required)*
                    </label>
                </div>

                <div className="relative w-full flex justify-center items-center">
                    <input
                        type="number"
                        name="PinCode"
                        className={`w-[96%] px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'PinCode' ? 'border-blue-500' : ''
                            }`}
                        onFocus={() => handleFocus('PinCode')}
                        onBlur={handleBlur}
                        onChange={ChangeHandler}
                        value={formData.PinCode}
                        required
                    />
                    <label
                        className={`absolute top-1/2 ${formData.PinCode === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-10 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'PinCode'
                                ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                : ''
                            }`} 
                    >
                        Pincode (Required)*
                    </label>
                </div>

                <div className="relative w-full flex justify-center items-center">
                    <div className="w-[96%] flex gap-3">
                        <div className="w-full md:relative flex justify-center ">
                            <input
                                type="text"
                                name="City"
                                className={`w-full px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'City' ? 'border-blue-500' : ''
                                    }`}
                                onFocus={() => handleFocus('City')}
                                onBlur={handleBlur}
                                onChange={ChangeHandler}
                                value={formData.City}
                                required
                            />
                            <label
                                className={`absolute top-1/2 ${formData.City === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-5 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'City'
                                        ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                        : ''
                                    }`}
                            >
                                City (Required)*
                            </label>
                        </div>
                        {/* <div className={`w-1/2 border-[1px] ${focusedInput === 'State' ? 'border-blue-500' : 'border-gray-500'} border-gray-500 h-[3rem] flex items-center px-2`}>
                            <select className="w-full h-[2rem] outline-none px-3 " onFocus={() => handleFocus('State')} required >
                                 {
                                    stateVal.map((st)=>{
                                        return <option key={st.id} value={formData.State} onChange={ChangeHandler} className="appearance-none p-2">{st.name}</option>
                                    })
                                 }
                            </select>
                            <label
                                className={`absolute -top-3  transform  right-50 px-2 text-gray-500 bg-white pointer-events-none`}>
                                State (Required)*
                            </label>
                        </div> */}
                    </div>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <input
                        type="text"
                        name="Address"
                        className={`w-[96%] px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'Address' ? 'border-blue-500' : ''
                            }`}
                        onFocus={() => handleFocus('Address')}
                        onBlur={handleBlur}
                        onChange={ChangeHandler}
                        value={formData.Address}
                        required
                    />
                    <label
                        className={`absolute top-1/2 ${formData.Address === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-10 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'Address'
                                ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                : ''
                            }`}
                    >
                        House No, Building Name (Required)*
                    </label>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <input
                        type="text"
                        name="Road"
                        className={`w-[96%] px-4 h-[3rem] border-[1px] border-gray-400 outline-none ${focusedInput === 'Road' ? 'border-blue-500' : ''
                            }`}
                        onFocus={() => handleFocus('Road')}
                        onBlur={handleBlur}
                        onChange={ChangeHandler}
                        value={formData.Road}
                        required
                    />
                    <label
                        className={`absolute top-1/2 ${formData.Road === ''?'transform -translate-y-1/2':'-translate-y-8 text-[11px]'} left-10 px-2 text-gray-500 bg-white pointer-events-none ${focusedInput === 'Road'
                                ? 'text-[11px] -translate-y-8 text-blue-500 transition duration-100 ease-in-out'
                                : ''
                            }`}
                    >
                        Road name, Area, Colony (Required)*
                    </label>
                </div>
                <NavLink to={"/ PaymentCheckout"}>
                <div className="w-full flex justify-center items-center">
                   <button className="w-[96%] h-[3rem] bg-orange-600 flex justify-center items-center font-bold text-white cursor-pointer">Save Address</button>
                </div>
                </NavLink>
          </form>
      </div>
    )
}
export default PaymentProcess;