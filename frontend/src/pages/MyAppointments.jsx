import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

// const appointments = [
//   {
//     doctor: "Dr. Richard James",
//     specialty: "General physician",
//     address: "57th Cross, Richmond Circle, Church Road, London",
//     dateTime: "25 July, 2024 | 8:30 PM",
//     status: "unpaid",
//   },
//   {
//     doctor: "Dr. Richard James",
//     specialty: "General physician",
//     address: "57th Cross, Richmond Circle, Church Road, London",
//     dateTime: "25 July, 2024 | 8:30 PM",
//     status: "payable",
//   },
//   {
//     doctor: "Dr. Richard James",
//     specialty: "General physician",
//     address: "57th Cross, Richmond Circle, Church Road, London",
//     dateTime: "25 July, 2024 | 8:30 PM",
//     status: "paid",
//   },
// ];


const MyAppointments = () => {
  const {doctors} = useContext(AppContext)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">My Appointments</h1>
      <div className="space-y-6">
        {doctors.slice(0,3).map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt="Doctor"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.speciality}</p>
                <p className="text-sm text-gray-600">
                  <strong>Address: </strong>{item.address.line1} {item.address.line2}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Date & Time:</strong> {''}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {item.status === "unpaid" && (
                <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
                  Cancel appointment
                </button>
              )}
              {item.status === "payable" && (
                <>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Pay here
                  </button>
                  <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
                    Cancel appointment
                  </button>
                </>
              )}
              {item.status === "paid" && (
                <>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-not-allowed">
                    Paid
                  </button>
                  <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
                    Cancel appointment
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
