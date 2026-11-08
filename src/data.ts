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
  experienceYears: 12,
  values: {
    quote: "Comfortable prices for perfect service",
    highlights: ["12 Years of Service Experience", "Quick Response Time", "Humble & Expert Technicians", "Local & Highly Trusted"]
  },
  hours: "Open Daily: 8:00 AM - 10:00 PM",
  mapUrl: "https://www.google.com/maps/place/Unique+Cooling+Center/@22.7728495,88.3733732,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89b1a4ac3df4b:0xe07deb14a605a20!8m2!3d22.7728495!4d88.3733732!16s%2Fg%2F11nq08bt28?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
  googleReviewsUrl: "https://www.google.com/maps/place/Unique+Cooling+Center/@22.7728495,88.3733732,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89b1a4ac3df4b:0xe07deb14a605a20!8m2!3d22.7728495!4d88.3733732!16s%2Fg%2F11nq08bt28?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
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
    title: "12 Years Service Experience",
    description: "Courteous, certified technicians with 12 Years of Service Experience who respect your home and solve appliance problems correctly.",
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
    location: "Ichhapur Defence Estate, Barrackpore",
    rating: 5,
    text: "Great place and the owner is very humble. Called them for my Samsung double door refrigerator cooling issue. The service was extremely fast, price was very comfortable, and they did the gas charging so carefully in front of me. Highly recommended technician in Barrackpore!",
    date: "1 week ago",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Refrigerator Gas Charging",
    verified: true,
    helpfulCount: 6
  },
  {
    id: "rev-2",
    name: "Souvik Mukherjee",
    location: "Palta, North Barrackpur",
    rating: 5,
    text: "Nice behaviour and comfortable price. They repaired my IFB front load washing machine on the same day. He diagnosed the spin noise and repaired the PCB board in front of me without taking the machine to a shop. 10/10 doorstep service.",
    date: "2 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Washing Machine PCB Repair",
    verified: true,
    helpfulCount: 9
  },
  {
    id: "rev-3",
    name: "Priya Das",
    location: "Babanpur, Barrackpore",
    rating: 5,
    text: "Excellent AC servicing. My Daikin 1.5 ton split AC was blowing warm air in peak summer. They did deep water servicing using high-pressure jet pump with zero mess in the room. Cools like a brand new AC now! Rates are very fair.",
    date: "3 days ago",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Split AC Jet Wet Wash",
    verified: true,
    helpfulCount: 14
  },
  {
    id: "rev-4",
    name: "Subhasish Roy",
    location: "Barrackpore Cantonment",
    rating: 5,
    text: "Called Unique Cooling Center for my Faber kitchen chimney oil cleaning and suction motor vibration. The technician came with proper degreasing solvents, thoroughly cleaned both baffle filters and balanced the motor. Suction is back to 100%. Very polite and genuine charges.",
    date: "5 days ago",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Kitchen Chimney Deep Servicing",
    verified: true,
    helpfulCount: 8
  },
  {
    id: "rev-5",
    name: "Debjani Banerjee",
    location: "Prafulla Pukur, Barrackpore",
    rating: 5,
    text: "Got my Aquaguard RO water purifier serviced by Unique Cooling Center. They checked TDS levels before and after replacing the sediment and carbon filters. Genuine Eureka Forbes compatible membrane installed at very reasonable rates. Best purifier technician in Barrackpore.",
    date: "1 week ago",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Aquaguard RO Filter Replacement",
    verified: true,
    helpfulCount: 11
  },
  {
    id: "rev-6",
    name: "Ranjit Karmakar",
    location: "Shyamnagar, North 24 Pgs",
    rating: 5,
    text: "My Voltas inverter AC had an E6 error code and stopped cooling. Two other mechanics suggested replacing the outdoor unit, but Unique Cooling Center checked the wiring, found a small gas flare leak, repaired it and refilled R32 refrigerant. Saved me thousands of rupees. True professionals!",
    date: "2 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Inverter AC Leak Repair & Gas Charge",
    verified: true,
    helpfulCount: 17
  },
  {
    id: "rev-7",
    name: "Moumita Chakraborty",
    location: "Ichhapur Station Road",
    rating: 5,
    text: "Our geyser stopped heating water just as winter started. Technician arrived within 45 minutes of my call. Replaced the burned heating coil and cleaned heavy mineral scale from inside the water heater tank. Working perfectly and safe. Very prompt service.",
    date: "3 weeks ago",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Geyser Heating Coil & Descaling",
    verified: true,
    helpfulCount: 5
  },
  {
    id: "rev-8",
    name: "Animesh Ghosh",
    location: "North Barrackpur",
    rating: 4.8,
    text: "Very reliable team. My LG convection microwave was making loud buzzing noise and not heating. They quickly pinpointed the faulty high-voltage diode and capacitor, replaced with original spares in 1 hour. Humble behaviour and honest work.",
    date: "1 month ago",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
    serviceTag: "Microwave Oven Component Fix",
    verified: true,
    helpfulCount: 7
  }
];
