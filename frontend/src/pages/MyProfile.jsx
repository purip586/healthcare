import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Pradip Puri",
    image: assets.profile_pic,
    email: "purip586@gmail.com",
    phone: "+81 07084282924",
    address: {
      line1: "Tokyo to Suginami ku",
      line2: "Minamiogikubo 2-2-5-310",
    },
    gender: "Male",
    dob: "1994-03-13",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src={userData.image}
            alt="user profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          />
          <div className="w-full">
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-2 text-center"
              />
            ) : (
              <p className="text-xl font-bold text-gray-800 text-center">
                {userData.name}
              </p>
            )}
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Contact Information:
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 font-medium">Email:</p>
              <p className="text-gray-800">{userData.email}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Phone:</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              ) : (
                <p className="text-gray-800">{userData.phone}</p>
              )}
            </div>
            <div>
              <p className="text-gray-600 font-medium">Address:</p>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line1: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line2: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ) : (
                <p className="text-gray-800">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Basic Information:
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 font-medium">Gender:</p>
              <p className="text-gray-800">{userData.gender}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Date of Birth:</p>
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              ) : (
                <p className="text-gray-800">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition"
            >
              Edit Information
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
