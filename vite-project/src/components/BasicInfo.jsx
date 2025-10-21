// BasicInfo.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
  // State variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  
  // Navigation function for programmatic routing
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      // Alert if any field is missing
      alert("All fields necessary!");
    } else {
      // Call the addBasicData function provided by the parent component
      addBasicData(name, email, contact);
      // Navigate to the '/questions' route
      navigate('/questions');
    }
  }

  return (
    <div className="w-screen justify-center flex flex-col align-middle items-center h-screen">
      <div className=" justify-center items-center flex flex-col ">
        <div className="">
          <div className="">
            <div className="flex flex-col justify-between">
              <form onSubmit={submit}>
                <label htmlFor="" className='text-blue-400'>
                  <h4>Basic Details</h4>
                </label>
                <div className="flex justify-between mt-4">
                  <label htmlFor="" className='text-blue-400'>
                    <b>1.</b> Name
                  </label>
                  {/* Input field for name */}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    className='outline-blue-400'
                    placeholder='Enter your Name'
                    autoComplete='off'
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <label htmlFor="" className='text-blue-400'>
                    <b>2.</b> Email
                  </label>
                  {/* Input field for email */}
                  <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    className='outline-blue-400'
                    placeholder='Enter your Email'
                    autoComplete='off'
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <label htmlFor="" className='text-blue-400'>
                    <b>3.</b> Contact No.
                  </label>
                  {/* Input field for contact number */}
                  <input
                    type="tel"
                    name='contact'
                    value={contact}
                    onChange={(e) => { setContact(e.target.value) }}
                    className='outline-blue-400'
                    placeholder='Enter your Contact No.'
                    autoComplete='off'
                  />
                </div>
                {/* Submit button */}
                <button type='submit' className='bg-blue-400 text-blue-400'>Next</button>
              </form>
              {/* Step indicators */}
              <center className='m-3'>
                <span className="text-blue-400"><b>1</b></span>
                <span className="">2</span>
                <span className="">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}