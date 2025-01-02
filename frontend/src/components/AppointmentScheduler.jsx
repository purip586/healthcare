import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlot, setBookedSlot] = useState(null);

  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour > 12 ? hour - 12 : hour;
    timeSlots.push(`${formattedHour}:00 ${period}`);
    if (hour !== 20) timeSlots.push(`${formattedHour}:30 ${period}`);
  }

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    const bookingData = {
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
    };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (response.ok) {
        setBookedSlot(`${selectedDate.toDateString()} at ${selectedTime}`);
        alert('Appointment booked successfully!');
      } else {
        alert(data.message || 'Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Calendar */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Select a Date</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="mx-auto"
          />
        </div>

        {/* Time Slots */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4 text-center">
            Available Time Slots for {selectedDate.toDateString()}
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSlotClick(time)}
                className={`px-4 py-2 rounded-lg shadow text-sm font-medium text-white ${
                  selectedTime === time ? 'bg-blue-500' : 'bg-gray-400 hover:bg-blue-400'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Booking */}
        <div className="p-6 text-center">
          {selectedTime && (
            <p className="mb-4 text-lg">
              Selected Slot: {selectedDate.toDateString()} at {selectedTime}
            </p>
          )}
          <button
            onClick={handleBooking}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!selectedTime}
          >
            Confirm Booking
          </button>
        </div>

        {/* Booking Confirmation */}
        {bookedSlot && (
          <div className="p-6 text-center bg-green-100 rounded-lg mt-6">
            <p className="text-lg font-medium text-green-800">
              Successfully booked an appointment for {bookedSlot}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;
