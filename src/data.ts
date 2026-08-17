import { ServiceItem, WhyChooseUsItem, Testimonial, BusinessDetails } from "./types";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import acServicingImage from "./assets/images/regenerated_image_1780639469528.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import washingMachineImage from "./assets/images/regenerated_image_1780639906803.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import refrigeratorImage from "./assets/images/regenerated_image_1780641044743.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import microwaveImage from "./assets/images/regenerated_image_1780641415675.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import chimneyImage from "./assets/images/regenerated_image_1786914425520.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import aquaguardImage from "./assets/images/regenerated_image_1786917383340.png";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import geyserImage from "./assets/images/regenerated_image_1786944836030.png";

export const businessDetails: BusinessDetails = {
  brandName: "UNIQUE COOLING CENTER",
  ratingAverage: 4.9,
  ratingCount: 251,
  location: "25(8/A), PURBA DHANGAR PARA, BARRACKPORE, Kolkata, West Bengal 700122",
  servingAreas: ["Babanpur", "Ichhapur Defence Estate", "North Barrackpur", "Ichhapur", "Palta", "Barrackpore", "Shyamnagar"],
  phone: "098308 70878",
  phoneFormatted: "+919830870878",
  values: {
    quote: "Comfortable prices for perfect service",
    highlights: ["Quick Response Time", "Humble & Expert Technicians", "Local & Highly Trusted"]
  },
  hours: "Open Daily: 8:00 AM - 10:00 PM",
  mapUrl: "https://www.google.com/maps/place/Unique+Cooling+Center/@22.7728495,88.3733732,17z/data=!4m6!3m5!1s0x39f89b1a4ac3df4b:0xe07deb14a605a20!8m2!3d22.7728495!4d88.3733732!16s%2Fg%2F11nq08bt28"
};

export const services: ServiceItem[] = [
  {
    id: "ac-repair",
    title: "AC Repair & Servicing",
    description: "Expert installation, deep filter cleaning, gas refilling, and rapid troubleshooting to beat the humid Bengal heat.",
    benefits: [
      "Deep Jet-Pump Wet Wash & Filter Sterilization",
      "Gas Leak Detection & Eco-friendly Top-ups (R32 / R410)",
      "Compressor, Fan Motor & Circuit Board Repair",
      "Split & Window AC Installation/Dismantling"
    ],
    imageUrl: acServicingImage,
    iconName: "Snowflake"
  },
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    description: "Whether front-load, top-load, or semi-automatic, we solve drum issues, drainage faults, and key-panel problems quickly.",
    benefits: [
      "Inlet Valve & Drainage Pump Replacements",
      "Drum Shaft, Bearing & Suspension Rod Fixes",
      "Digital Controller & PCB Board Repair",
      "Noisy Spinning & Vibration Dampening Tuning"
    ],
    imageUrl: washingMachineImage,
    iconName: "WashingMachine"
  },
  {
    id: "refrigerator",
    title: "Fridge/Refrigerator Repair",
    description: "Keep your food fresh and drinks chilled. We diagnose cooling failures, thermostat defects, and defrost issues on-site.",
    benefits: [
      "Thermostat, Defrost Timer & Sensor Replacements",
      "Compressor Overhaul & Gas Charging",
      "Door Gasket/Seal Replacements",
      "Double Door, Single Door & Side-by-Side Expert Care"
    ],
    imageUrl: refrigeratorImage,
    iconName: "Refrigerator"
  },
  {
    id: "kitchen-chimney",
    title: "Kitchen Chimney Repair",
    description: "Expert installation, deep duct cleaning, suction motor tuning, and PCB repairs for Elica, Faber, Glen, Hindware, and KAFF chimneys.",
    benefits: [
      "Baffle & Mesh Filter Chemical Deep Cleaning",
      "Auto-Clean Heating Coil & Suction Motor Repair",
      "Touch Control, Gesture Sensor & PCB Fixes",
      "Duct Pipe Installation & Noise Vibration Reduction"
    ],
    imageUrl: chimneyImage,
    iconName: "Sparkles"
  },
  {
    id: "aquaguard-ro",
    title: "Aquaguard & RO Purifier Repair",
    description: "Pure water, healthy life. Fast repairs, genuine filter replacements, and membrane servicing for Aquaguard, Kent, Livpure, Pureit, and Eureka Forbes.",
    benefits: [
      "RO Membrane, Sediment & Carbon Filter Replacement",
      "UV Lamp, TDS Controller & Booster Pump Fixes",
      "Leakage Troubleshooting & Sensor PCB Repairs",
      "Complete Sanitization & Genuine Quality Spares"
    ],
    imageUrl: aquaguardImage,
    iconName: "Droplets"
  },
  {
    id: "geyser-repair",
    title: "Geyser & Water Heater Repair",
    description: "Hot water, anytime! Certified on-site servicing, genuine heating element replacements, thermostat calibration, and tank descaling for Crompton, Venus, Bajaj, Havells, and AO Smith.",
    benefits: [
      "Heating Element Replacement & Quick Heating Fixes",
      "Thermostat Check, Calibration & Overheating Cut-off",
      "Tank Leakage, Rust Descaling & Anode Rod Servicing",
      "Complete Safety Inspection & Genuine Quality Spares"
    ],
    imageUrl: geyserImage,
    iconName: "Flame"
  },
  {
    id: "microwave",
    title: "Microwave Repair",
    description: "Safe, precision servicing for convection, grill, and solo microwave ovens with authentic spare parts.",
    benefits: [
      "Magnetron Repair & High-Voltage Capacitor Replacements",
      "Touchpad & Display Panel Fixes",
      "Turntable Motor & Roller Ring Servicing",
      "Safety Switch, Fuse & Door Latch Repair"
    ],
    imageUrl: microwaveImage,
    iconName: "Microwave"
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "comfort-pricing",
    title: "Comfortable Prices",
    description: "Premium service shouldn't empty your pocket. We strictly offer honest, budget-friendly pricing with no mock estimations.",
    iconName: "IndianRupee"
  },
  {
    id: "quick-response",
    title: "Quick Response",
    description: "We understand that a broken AC or Fridge is an emergency. Our technicians are deployed swiftly across North Barrackpur.",
    iconName: "Zap"
  },
  {
    id: "humble-expert",
    title: "Humble & Expert Technicians",
    description: "Courteous, certified technicians with over 10+ years of repair wisdom who respect your home and solve problems correctly.",
    iconName: "Wrench"
  },
  {
    id: "guaranteed-parts",
    title: "100% Genuine Spares",
    description: "We use only authentic, certified replacement parts so your cooling appliances run smooth for years.",
    iconName: "ShieldCheck"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Arijit Sen",
    location: "Ichhapur Defence Estate, WB",
    rating: 5,
    text: "Great place and the owner is very humble. Called them for my Samsung refrigerator cooling issue. The service was extremely fast, price was comfortable, and they did the gas charging so carefully. Highly recommended technician!",
    date: "1 week ago",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: "rev-2",
    name: "Souvik Mukherjee",
    location: "Palta, North Barrackpur",
    rating: 5,
    text: "Nice behaviour and comfortable price. They repaired my IFB front load washing machine on the same day. He explained the drum issue very politely and repaired the PCB board in front of me. 10/10 service.",
    date: "2 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: "rev-3",
    name: "Priya Das",
    location: "Babanpur, West Bengal",
    rating: 5,
    text: "Excellent AC servicing. My split AC was not cooling at all. They did deep water servicing using jet pump. The dust came out completely and now it chills like a showroom piece! Rates are very fair.",
    date: "3 days ago",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: "rev-4",
    name: "Animesh Ghosh",
    location: "North Barrackpur",
    rating: 4.8,
    text: "Very reliable team. My microwave convection mode was sparking. They identified bad magnetron and resolved it safely within 2 hours of calling them. Very polite and humble. Best of North Barrackpur area.",
    date: "1 month ago",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];
