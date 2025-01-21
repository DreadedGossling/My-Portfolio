import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactDetails = () => {
  return (
    <div className="bg-stone-900 shadow-lg rounded-lg p-8 font-serif text-white
                    outline outline-1 outline-cyan-800">
      <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
      <p className=" font text-lg">Feel free to contact me for any queries or collaboration opportunities.</p>
      <ul className="space-y-6 mt-8">
        <li className="flex items-center space-x-6">
          <i className="text-3xl"><FaUser /></i>
          <div>
            <h3 className="text-lg">Name</h3>
            <h1 className="font-semibold text-lg">Ravi Kumar Sharma</h1>
          </div>
        </li>
        <li className="flex items-center space-x-6">
          <i className="text-3xl"><MdEmail /></i>
          <div>
            <h3 className="text-lg">Email</h3>
            <h1 className="font-semibold text-lg">ravirockskkr@gmail.com / ravisharma8gec@gmail.com</h1>
          </div>
        </li>
        <li className="flex items-center space-x-6">
          <i className="text-3xl"><FaLocationDot /></i>
          <div>
            <h3 className="text-lg">Address</h3>
            <h1 className="font-semibold text-lg">Bengaluru, Karnataka</h1>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default contactDetails
