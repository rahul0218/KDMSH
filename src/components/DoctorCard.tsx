import React from 'react';
import { User, Calendar, Clock, CheckCircle } from 'lucide-react';

export interface Doctor {
  name: string;
  degrees: string;
  specialty: string;
  day: string;
  timing: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const [showToast, setShowToast] = React.useState(false);

  const handleBooking = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-xl p-5 flex flex-col h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-primary-light text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
          <User className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary-light text-primary uppercase tracking-tighter">
          {doctor.specialty}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
        {doctor.name}
      </h3>
      <p className="text-xs text-slate-500 mt-1 mb-4 flex-grow font-medium">
        {doctor.degrees}
      </p>
      
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex items-start text-sm text-slate-700">
          <Calendar className="w-4 h-4 text-primary mt-0.5 mr-2" />
          <div>
            <span className="font-semibold block text-[10px] uppercase text-slate-400">Available Days</span>
            <span className="text-sm">{doctor.day || 'On Call / Appt'}</span>
          </div>
        </div>
        <div className="flex items-start text-sm text-slate-700">
          <Clock className="w-4 h-4 text-primary mt-0.5 mr-2" />
          <div>
            <span className="font-semibold block text-[10px] uppercase text-slate-400">Timing</span>
            <span className="text-sm">{doctor.timing || 'By Appointment'}</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleBooking}
        className="mt-5 w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-800 transition-all active:scale-95 flex items-center justify-center gap-2"
      >
        Book Now
      </button>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-2xl z-[100] animate-in fade-in slide-in-from-bottom-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-accent-yellow" />
          <span>Requesting appointment with {doctor.name}...</span>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
