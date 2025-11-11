
import { Link } from 'react-router-dom';
import { services, schedule } from '../data';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
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

      {/* Doctor's Schedule Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Doctor's Schedule</h2>
            <p className="text-lg text-text-main mt-4">
              Find our on-duty doctors for the week.
            </p>
          </div>
          <div className="relative">
            <div className="flex space-x-4 pb-4 overflow-x-auto">
              {schedule.map((daySchedule) => (
                <div key={daySchedule.day} className="flex-shrink-0 w-72 md:w-80">
                  <div className="rounded-lg overflow-hidden bg-background-alt border border-gray-200 h-full flex flex-col">
                    <div className="bg-primary text-white text-center py-3">
                      <h3 className="font-bold text-base">{daySchedule.day}</h3>
                    </div>
                    <div className="p-3 space-y-3 flex-grow">
                      {daySchedule.doctors.map((doctor) => (
                        <DoctorCard key={doctor.name} doctor={doctor} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
