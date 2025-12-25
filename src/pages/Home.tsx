import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, UserRound, Hospital } from 'lucide-react';
import { services, doctorData } from '../data';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Calculate a scroll distance equal to approximately one card width or half the container width
      const scrollAmount = Math.min(clientWidth * 0.8, 350); 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Show only the first 12 doctors for the featured section, or fewer if less data is available
  const featuredDoctors = doctorData.slice(0, 12);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">Hospital and their work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Welcome To
              Kasturi Das Memorial Superspeciality Hospital</h2>
              <p className="text-base text-text-main leading-relaxed">
                “Kasturi Das Memorial Super Speciality Hospital, is a subsidiary unit of Dishari Health Point Pvt Ltd , is providing services to the people in distress, in different specialties since 2019 and hospital is located at Mollargate Maheshtala, 24 Parganas South. Our hospital is 164 bedded hospital. We provide all investigative and diagonostic procedures like pathology , histopathology , radiology including X-ray , CT-SCAN , MRI , Ultrasound; Cardiology investigations like ECG , TMT , HOLTER; Spirometry , NCV ,and Endoscopic procedures like Bronchoscopy , Upper GI Endoscopy, Colonoscopy and ERCP facilities. The hospital can boast of facilities with Cath Lab and CTVS surgeries, specially in the field of cardiology; multi bedded ICU, PICU, NICU facilities as well as General Ward , HDU and others.”
              </p>
              <div className="pt-4">
                <Link to="/about" className="bg-primary hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="images/IMG_20200328_133922.jpg" 
                alt="Modern hospital building exterior" 
                className="rounded-lg shadow-image w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">Our Specialties</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-2">Our Services</h2>
            <p className="text-lg text-text-main mt-4">
              We offer a wide range of specialized medical services to meet your health needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Specialists Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">Expert Care</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mt-2">Meet Our Specialists</h2>
              <p className="text-lg text-text-main mt-4">
                See a selection of our expert medical professionals. Click 'View All' to see the full directory.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm text-slate-600 hover:text-white"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm text-slate-600 hover:text-white"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              <Link 
                to="/doctors" 
                className="inline-flex items-center gap-1 font-bold text-primary hover:text-teal-800 transition-colors text-sm md:text-base"
              >
                View All <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-scroll pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredDoctors.map((doctor, index) => (
              <motion.div 
                key={`${doctor.name}-${index}`}
                className="flex-shrink-0 w-[300px] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
            {/* Call to Action Card */}
            <div className="flex-shrink-0 w-[300px] snap-start flex items-center justify-center">
              <Link 
                to="/doctors" 
                className="group flex flex-col items-center gap-4 text-center p-6 rounded-xl border-2 border-dashed border-slate-300 hover:border-primary transition-all h-full w-full justify-center hover:bg-primary-light"
              >
                <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Hospital className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-slate-800 group-hover:text-primary">View Full Directory</h4>
                <p className="text-sm text-slate-500 mt-1">59 Specialists Available</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
