import React, { useState, useMemo } from 'react';
import { Search, UserRound, Hospital } from 'lucide-react';
import { doctorData } from '../data';
import DoctorCard from '../components/DoctorCard';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  const specialties = useMemo(() => {
    const specs = ['all', ...new Set(doctorData.map(d => d.specialty).sort())];
    return specs;
  }, []);

  const filteredDoctors = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return doctorData.filter(d => {
      const matchesSearch = 
        d.name.toLowerCase().includes(term) || 
        d.specialty.toLowerCase().includes(term) ||
        d.degrees.toLowerCase().includes(term);
      
      const matchesFilter = currentFilter === 'all' || d.specialty === currentFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, currentFilter]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-center gap-3">
                <Hospital className="w-8 h-8" />
                Find a Specialist
              </h1>
              <p className="text-slate-500 text-sm mt-1">Full directory of our medical professionals</p>
            </div>
            
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Search className="w-5 h-5" />
              </span>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" 
                placeholder="Search name, degree or specialty..."
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setCurrentFilter(spec)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                currentFilter === spec
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {spec === 'all' ? 'All Doctors' : spec}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-600 font-medium">
            Showing <span className="text-primary font-bold">{filteredDoctors.length}</span> specialists
          </p>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc, index) => (
              <DoctorCard key={`${doc.name}-${index}`} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserRound className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No doctors found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setCurrentFilter('all'); }}
              className="mt-6 text-primary font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Doctors;
