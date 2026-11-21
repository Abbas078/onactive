import { ClinicLocation, DoctorProfile } from "@/types";

export const CLINIC_INFO = {
  brandName: "Arthrogenix",
  legalName: "Arthrogenix Orthopaedic & Joint Centre",
  doctorName: "Dr. Ankit Jaipal",
  tagline: "Sports • Joints • Orthopaedics",
  eyebrow: "Consultant Orthopaedics & AR Joint Replacement Specialist",
  mainHeadline: "Restoring Motion with Advanced Surgical Precision",
  subHeadline: "Specialized orthopaedic care, computer-navigated & AR joint replacement, sports arthroscopy, and complex trauma management in Jaipur.",
  primaryPhone: "+91 7351755551",
  primaryPhoneRaw: "917351755551",
  clinicPhone: "+91 96100 26600",
  whatsappNumber: "+91 7351755551",
  whatsappLink: "https://wa.me/917351755551?text=Hello%20Dr.%20Ankit%20Jaipal,%20I%20would%20like%20to%20book%20an%20orthopaedic%20consultation.",
  email: "dr.ankitjaipal@gmail.com",
  rghsCashlessNote: "RGHS & Cashless Empanelled",
  opdTimings: "Mon - Sat: 10:00 AM to 5:00 PM",
  sundayStatus: "Sunday: Closed (Emergency by Appointment)",
};

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    name: "Arthrogenix Clinic - Durgapura",
    slug: "durgapura",
    tagline: "Primary Orthopaedic Consultation & Sports Care",
    address: "Durgapura, Tonk Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302018",
    landmark: "Near Durgapura Elevated Road / Railway Station",
    phone: "+91 7351755551",
    email: "dr.ankitjaipal@gmail.com",
    opdHours: "10:00 AM – 2:00 PM & 5:00 PM – 7:00 PM",
    days: "Monday – Saturday",
    googleMapUrl: "https://maps.google.com/?q=Arthrogenix+Jaipur",
    isPrimary: true,
  },
  {
    name: "Sevayatan Multispeciality Hospital",
    slug: "sevayatan-hospital",
    tagline: "Inpatient, Advanced OT & Inpatient Surgical Facility",
    address: "Sevayatan Hospital Campus",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302018",
    landmark: "Sevayatan Multispeciality Hospital, Jaipur",
    phone: "+91 7351755551",
    email: "dr.ankitjaipal@gmail.com",
    opdHours: "OPD & Surgical Admissions as Scheduled",
    days: "Monday – Saturday",
    googleMapUrl: "https://maps.google.com/?q=Sevayatan+Multispeciality+Hospital+Jaipur",
    isPrimary: false,
  },
  {
    name: "Arthrogenix Clinic - Vaishali Nagar",
    slug: "vaishali-nagar",
    tagline: "Orthopaedic Consultation & Follow-Up OPD",
    address: "Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    landmark: "Vaishali Nagar Hub",
    phone: "+91 96100 26600",
    email: "dr.ankitjaipal@gmail.com",
    opdHours: "By Prior Appointment",
    days: "Monday – Saturday",
    googleMapUrl: "https://maps.google.com/?q=Vaishali+Nagar+Jaipur",
    isPrimary: false,
  },
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Ankit Jaipal",
  title: "Consultant Orthopaedics | Joint Replacement & AR Knee Surgeon",
  specialization: "AR Computer-Navigated Joint Replacement, Arthroscopy & Sports Medicine",
  degrees: ["MBBS (H.I.M.S. Dehradun, 2006)", "MS Orthopaedics (SMS Medical College, Jaipur, 2023)"],
  fellowships: [
    "Fellowship in Joint Replacement (Total Knee & Hip Replacement)",
    "Fellowship in Arthroscopy & Sports Medicine",
    "Computer-Navigated & AR Knee Replacement (Pixee Medical Certified)",
  ],
  experienceYears: 12,
  surgeriesCount: "1000+",
  patientsTreated: "15,000+",
  googleRating: 4.9,
  reviewCount: "250+ Reviews",
  shortBio:
    "Dr. Ankit Jaipal is a Consultant Orthopaedics in Jaipur with specialized fellowship training in joint replacement, sports injury management, and cutting-edge AR computer-navigated knee surgeries.",
  fullBio:
    "Dr. Ankit Jaipal (MBBS, MS Orthopaedics from Sawai Man Singh / SMS Medical College Jaipur) is a trusted orthopaedic and joint replacement surgeon. Currently serving as Consultant Orthopaedics at Sevayatan Multispeciality Hospital, he combines extensive clinical experience with cutting-edge Augmented Reality (Pixee Medical AR) navigation to provide millimeter-accurate implant placement, tissue-sparing techniques, and accelerated post-op recovery.",
  quote:
    "Empowering patients to move without pain through millimeter-accurate computer-assisted surgery, tissue preservation, and dedicated compassionate rehabilitation.",
};

export const CLINIC_STATS = [
  {
    label: "SMS Medical College, Jaipur",
    value: "M.S. Orthopaedics",
    subtext: "Post-Graduate Residency",
    icon: "GraduationCap",
  },
  {
    label: "Joint Replacement & Arthroscopy",
    value: "Fellowship Trained",
    subtext: "Sub-specialty Fellowship",
    icon: "Award",
  },
  {
    label: "Computer-Navigated Knee Care",
    value: "Pixee AR Certified",
    subtext: "Sub-millimeter Precision",
    icon: "Activity",
  },
  {
    label: "Sevayatan Multispeciality Hospital",
    value: "Cashless & RGHS",
    subtext: "Empaneled OT Center",
    icon: "ShieldCheck",
  },
];
