import React from 'react';

interface Doctor {
  name: string;
  specialty: string;
  color: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow-schedule border-l-4 ${doctor.color}`}>
      <h4 className="font-semibold text-text-dark text-base leading-tight">{doctor.name}</h4>
      <p className="text-sm text-primary">{doctor.specialty}</p>
    </div>
  );
};

export default DoctorCard;
