import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopSpecialist = () => {
  const navigate = useNavigate();
  const { data } = useContext(AppContext);

  // Ensure data is an array
  const doctors = Array.isArray(data) ? data : [];

  return (
    <section className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      {/* Heading Section */}
      <h1 className="text-3xl font-medium text-center">
        Top Specialists to Book Your Appointment With
      </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through the list to find your trusted doctor.
      </p>
      
      {/* Doctors List */}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map(({ id, image, name, speciality }) => (
          <div
            key={id} // Use unique key for each list item
            className="relative border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            onClick={() => navigate(`/appointment/${id}`)}
          >
            {/* Doctor Image */}
            <img
              className="w-full h-48 object-cover bg-blue-50"
              src={image}
              alt={`Doctor ${name}`}
              loading="lazy"
            />
            
            {/* Doctor Details with Blue Overlay on Hover */}
            <div className="relative p-4 flex flex-col gap-2">
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-blue-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Doctor Info */}
              <div className="flex items-center gap-2 text-sm text-center text-green-500 z-20">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 truncate z-20">{name}</h3>
              <p className="text-sm text-gray-500 truncate z-20">{speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-colors duration-300"
        onClick={() => {
          navigate('/doctors');
          window.scrollTo(0, 0); // Ensure scroll to top
        }}
      >
        More
      </button>
    </section>
  );
};

export default TopSpecialist;