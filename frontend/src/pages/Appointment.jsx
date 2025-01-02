import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import AppointmentScheduler from '../components/AppointmentScheduler'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const doctorInfo = await doctors.find(doc => doc._id === docId)
    setDocInfo(doctorInfo)
    console.log(doctorInfo);   
  }

  useEffect(() => {
    fetchDocInfo()
  },[doctors, docId])

  return docInfo && (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-10">
  
          {/* Doctor Image */}
          <div className="w-full sm:w-1/3">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
              src={docInfo.image} 
              alt="Doctor Image" 
            />
          </div>
  
          {/* Doctor Details */}
          <div className="flex-1 space-y-6">
            {/* Name and Verification */}
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold text-gray-800">{docInfo.name}</h2>
              <img className="w-6 h-6" src={assets.verified_icon} alt="Verified" />
            </div>
  
            {/* Degree and Specialty */}
            <p className="text-gray-600 text-lg">
              {docInfo.degree} - <span className="font-medium text-gray-800">{docInfo.speciality}</span>
            </p>
  
            {/* Experience */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
              {docInfo.experience} Experience
            </button>
  
            {/* About Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-medium text-gray-800">About</h3>
                <img className="w-5 h-5" src={assets.info_icon} alt="Info" />
              </div>
              <p className="text-gray-600">{docInfo.about}</p>
            </div>
            <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>
      </div>
      <div>
        <AppointmentScheduler />
      </div>
      <div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    </div>
  );
  
}

export default Appointment
