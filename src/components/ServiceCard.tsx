import React from 'react';
import { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, iconBg, iconColor }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-card text-center flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBg} mb-6`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-text-dark mb-2">{title}</h3>
      <p className="text-sm text-text-main flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
