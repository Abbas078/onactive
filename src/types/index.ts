export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }[];
}

export interface ClinicLocation {
  name: string;
  slug: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  phone: string;
  email: string;
  opdHours: string;
  days: string;
  googleMapUrl: string;
  isPrimary?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  specialization: string;
  degrees: string[];
  fellowships: string[];
  experienceYears: number;
  surgeriesCount: string;
  patientsTreated: string;
  googleRating: number;
  reviewCount: string;
  shortBio: string;
  fullBio: string;
  quote?: string;
}

export interface TreatmentItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "knee" | "shoulder" | "sports" | "joint-replacement";
  iconName: string;
  keyBenefits: string[];
}

export interface ConditionItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "knee" | "shoulder" | "sports" | "general";
  commonSymptoms: string[];
}

