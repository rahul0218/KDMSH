import { HeartPulse, Brain, Baby, Bone, Siren, Scan } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    title: 'Expert Care, Close to Home',
    description: 'Providing compassionate and comprehensive healthcare for our community.',
    image: '/images/hero/cover-980x481.jpg',
    buttonText: 'Find a Doctor',
    buttonLink: '/doctors'
  },
  {
    id: 2,
    title: '24/7 Emergency Services',
    description: 'Round-the-clock emergency care for critical and life-threatening conditions.',
    image: '/images/hero/IMG_20200328_133922-1-980x481.jpg',
    buttonText: 'Emergency Info',
    buttonLink: '/services'
  },
  {
    id: 3,
    title: 'Advanced Medical Technology',
    description: 'State-of-the-art equipment and cutting-edge medical treatments.',
    image: '/images/hero/cov-1-980x481.jpg',
    buttonText: 'Our Services',
    buttonLink: '/services'
  }
];

export const services = [
  {
    icon: HeartPulse,
    title: 'Cardiology',
    description: 'Comprehensive heart care, from diagnosis to treatment and rehabilitation.',
    iconBg: 'bg-accent-yellow-light',
    iconColor: 'text-accent-yellow',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert treatment for disorders of the nervous system, brain, and spinal cord.',
    iconBg: 'bg-accent-blue-light',
    iconColor: 'text-accent-blue',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    iconBg: 'bg-secondary-light',
    iconColor: 'text-secondary',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Advanced care for bone, joint, ligament, tendon, and muscle issues.',
    iconBg: 'bg-primary-lighter',
    iconColor: 'text-primary',
  },
  {
    icon: Siren,
    title: 'Emergency Services',
    description: '24/7 emergency care for critical and life-threatening conditions.',
    iconBg: 'bg-secondary-light',
    iconColor: 'text-secondary',
  },
  {
    icon: Scan,
    title: 'Radiology',
    description: 'State-of-the-art imaging services for accurate diagnoses.',
    iconBg: 'bg-accent-blue-light',
    iconColor: 'text-accent-blue',
  },
];

export const schedule = [
    {
        day: 'Sunday',
        doctors: [
            { name: 'Dr. Emily Carter', specialty: 'Cardiologist', color: 'border-l-secondary' },
            { name: 'Dr. Ben Adams', specialty: 'Pediatrician', color: 'border-l-accent-blue' },
        ],
    },
    {
        day: 'Monday',
        doctors: [
            { name: 'Dr. Olivia Chen', specialty: 'Neurologist', color: 'border-l-accent-yellow' },
            { name: 'Dr. James Wilson', specialty: 'Orthopedist', color: 'border-l-primary' },
        ],
    },
    {
        day: 'Tuesday',
        doctors: [
            { name: 'Dr. Sophia Lee', specialty: 'General Surgeon', color: 'border-l-secondary' },
            { name: 'Dr. Daniel Kim', specialty: 'Dermatologist', color: 'border-l-accent-blue' },
        ],
    },
    {
        day: 'Wednesday',
        doctors: [
            { name: 'Dr. Ava Martinez', specialty: 'Oncologist', color: 'border-l-accent-yellow' },
            { name: 'Dr. Noah Garcia', specialty: 'Cardiologist', color: 'border-l-primary' },
        ],
    },
    {
        day: 'Thursday',
        doctors: [
            { name: 'Dr. Isabella Smith', specialty: 'Pediatrician', color: 'border-l-secondary' },
            { name: 'Dr. Liam Johnson', specialty: 'Neurologist', color: 'border-l-accent-blue' },
        ],
    },
    {
        day: 'Friday',
        doctors: [
            { name: 'Dr. Mia Brown', specialty: 'Orthopedist', color: 'border-l-accent-yellow' },
            { name: 'Dr. Ethan Davis', specialty: 'Radiologist', color: 'border-l-primary' },
        ],
    },
    {
        day: 'Saturday',
        doctors: [
            { name: 'Dr. Chloe Miller', specialty: 'Emergency Physician', color: 'border-l-secondary' },
            { name: 'Dr. Lucas Rodriguez', specialty: 'General Practitioner', color: 'border-l-accent-blue' },
        ],
    },
];
