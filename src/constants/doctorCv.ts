/**
 * Dr. Ankit Jaipal - Authoritative CV Data
 * Extracted directly from NAUKRI_ANKIT_JAIPAL (2) (1).pdf
 * Single source of truth for all professional qualifications, experience, and academic details.
 */

export interface WorkExperienceItem {
  role: string;
  institution: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  year: string;
  grade?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  forum: string;
  type: "Paper Presentation" | "Poster Presentation" | "Certification Course";
}

export const DR_ANKIT_CV = {
  personalInfo: {
    name: "Dr. Ankit Jaipal",
    designation: "Consultant Orthopaedics",
    phone: "(+91) 7351755551",
    email: "dr.ankitjaipal@gmail.com",
    location: "Jaipur, Rajasthan, India",
    currentAffiliation: "Sevayatan Multispeciality Hospital",
    experienceSummary: "Consultant Orthopaedics with specialized post-MS surgical practice & over 15 years in medical clinical care.",
  },

  profileSummary:
    "Compassionate orthopaedic surgeon skilled in managing medical emergencies and fostering positive relationships with patients and families. Expert in communicating medical terminology clearly and concisely to patients, families, and healthcare professionals. Highly organized and detail-oriented with a strong commitment to accurate clinical documentation, innovative surgical techniques, and comprehensive rehabilitation programs.",

  coreHighlights: [
    {
      title: "M.S. Orthopaedics from SMS Medical College",
      description: "Postgraduate orthopaedic residency completed at Sawai Man Singh Medical College & Hospital, Jaipur (2023).",
    },
    {
      title: "Triple Fellowship Certification",
      description: "Formal fellowships in Total Knee Replacement (TKR), Arthroscopy, and Joint Replacement.",
    },
    {
      title: "Consultant at Sevayatan Hospital",
      description: "Leading inpatient surgical care, innovative joint procedures, and structured recovery protocols.",
    },
    {
      title: "Extensive Clinical Foundation",
      description: "Over 15 years in comprehensive clinical practice including BHEL Haridwar, ESIC Delhi, and Hindu Rao Hospital.",
    },
  ],

  certifications: [
    {
      title: "Fellowship in Total Knee Replacement",
      issuer: "Specialized Orthopaedic Fellowship",
      focus: "Primary & complex total knee arthroplasty, implant alignment, and ligament balance.",
    },
    {
      title: "Fellowship in Arthroscopy",
      issuer: "Specialized Orthopaedic Fellowship",
      focus: "Keyhole minimally invasive surgical techniques for shoulder and knee joint preservation.",
    },
    {
      title: "Fellowship in Joint Replacement",
      issuer: "Specialized Orthopaedic Fellowship",
      focus: "Anatomical reconstruction, total hip replacement (THR), and joint biomechanics.",
    },
    {
      title: "Basic Course in Biomedical Research",
      issuer: "ICMR / DHR Accredited",
      focus: "Methodology, ethics, clinical trials, and evidence-based orthopaedic investigations.",
    },
  ],

  keySkills: [
    {
      category: "Joint Replacement & Arthroplasty",
      skills: [
        "Total Knee Replacement (TKR)",
        "Total Hip Replacement (THR)",
        "Revision Arthroplasty",
        "Joint Preservation Techniques",
        "Augmented Reality (AR) Computer Navigation",
      ],
    },
    {
      category: "Arthroscopy & Sports Medicine",
      skills: [
        "Knee Arthroscopy (ACL/PCL & Meniscus Balancing)",
        "Shoulder Arthroscopy (Rotator Cuff & Instability)",
        "Tissue-sparing Keyhole Procedures",
        "Rapid Athletic Rehabilitation",
      ],
    },
    {
      category: "Trauma & Fracture Management",
      skills: [
        "AO Principles of Fracture Fixation",
        "Use of Locking Plates & Intramedullary Nailing Systems",
        "Complex Trauma Reconstruction",
        "Limb Lengthening & Deformity Correction",
        "Orthopaedic Emergency Care",
      ],
    },
    {
      category: "Specialized Orthopaedics",
      skills: [
        "Paediatric Orthopaedics",
        "Hand & Microvascular Surgery",
        "Bone Tumor Excision & Reconstruction",
      ],
    },
  ],

  workExperience: [
    {
      role: "Consultant Orthopaedics",
      institution: "Sevayatan Multispeciality Hospital",
      location: "Jaipur, Rajasthan",
      period: "09-2023 - Present",
      isCurrent: true,
      bulletPoints: [
        "Implemented innovative surgical techniques which led to enhanced patient recovery.",
        "Established a comprehensive rehabilitation program, resulting in measurable increases in patient satisfaction scores.",
        "Leading specialized OPD consultations and elective joint replacement procedures.",
      ],
    },
    {
      role: "Resident Orthopaedics",
      institution: "Sawai Man Singh Medical College and Hospital",
      location: "Jaipur, Rajasthan",
      period: "07-2020 - 07-2023",
      isCurrent: false,
      bulletPoints: [
        "Thoroughly examined patients and elicited medical history data to use in assessing health and identifying conditions.",
        "Evaluated patient histories, complaints, and current symptoms in high-volume trauma and orthopaedic emergency departments.",
        "Diagnosed and treated patients suffering from acute trauma, ligament injuries, and chronic joint wear conditions.",
      ],
    },
    {
      role: "Senior Medical Officer",
      institution: "Bharat Heavy Electricals (BHEL)",
      location: "Haridwar, Uttarakhand",
      period: "04-2012 - 03-2020",
      isCurrent: false,
      bulletPoints: [
        "Directed and coordinated patient care activities of nursing and clinical support staff for 8 years.",
        "Confirmed consistent and accurate medical recordkeeping practices, emergency protocols, and preventative occupational health.",
      ],
    },
    {
      role: "Medical Officer",
      institution: "Babu Jagjivan Ram Memorial Hospital",
      location: "Delhi",
      period: "01-2012 - 04-2012",
      isCurrent: false,
      bulletPoints: [
        "Directed and coordinated patient care activities of nursing and support staff.",
        "Confirmed consistent and accurate medical recordkeeping practices.",
        "Led a diverse team of medical and administrative professionals in day-to-day clinical activities and patient relations.",
      ],
    },
    {
      role: "Senior Internal Medicine Resident",
      institution: "ESIC Hospital, Okhla",
      location: "Delhi",
      period: "04-2009 - 01-2012",
      isCurrent: false,
      bulletPoints: [
        "Provided patient education and counseling, covering health status, test results, disease processes, and discharge planning.",
        "Ordered and executed diagnostic tests and analyzed diagnostic images to further investigate patient conditions.",
      ],
    },
    {
      role: "Senior Internal Medicine Resident",
      institution: "ESIC Medical College and Hospital, Basaidarapur",
      location: "Delhi",
      period: "12-2008 - 04-2009",
      isCurrent: false,
      bulletPoints: [
        "Provided patient education and counseling, covering health status, test results, and discharge planning.",
        "Performed initial and ongoing assessments of patients' medical, physical, and psychosocial status.",
      ],
    },
    {
      role: "Junior Medicine Resident",
      institution: "North DMC Medical College & Hindu Rao Hospital",
      location: "Delhi",
      period: "12-2007 - 12-2008",
      isCurrent: false,
      bulletPoints: [
        "Thoroughly examined patients and elicited medical history data in acute care wards.",
        "Teamed with other physicians, specialists, and healthcare providers to provide well-rounded care for complex medical cases.",
        "Collected, recorded, and maintained patient medical history, reports, and clinical examination results.",
      ],
    },
  ] as WorkExperienceItem[],

  education: [
    {
      degree: "M.S. Orthopaedics",
      specialization: "Trauma, Hand Surgery & Joint Replacement",
      institution: "Sawai Man Singh (SMS) Medical College",
      location: "Jaipur, Rajasthan",
      year: "2023",
      grade: "Pass",
    },
    {
      degree: "MBBS (Medicine)",
      specialization: "Bachelor of Medicine & Bachelor of Surgery",
      institution: "H.I.M.S - Dehradoon (Himalayan Institute of Medical Sciences)",
      location: "Dehradun, Uttarakhand",
      year: "2006",
      grade: "Graduated",
    },
  ],

  researchAndPublications: [
    {
      id: "ioacon-paper",
      type: "Paper Presentation",
      title:
        "PROXIMAL TIBIA FRACTURES, CT SCANS, X-RAYS, LUO THREE COLUMN CONCEPT",
      forum: "IOACON (Indian Orthopaedic Association National Conference), Amritsar",
      description:
        "Clinical study on multi-planar CT evaluation versus conventional radiographs in tibial plateau fracture classification and surgical column reconstruction.",
    },
    {
      id: "rosacon-poster",
      type: "Poster Presentation",
      title: "Clinical Innovations & Orthopaedic Case Studies",
      forum: "ROSACON (Rajasthan Orthopaedic Surgeons Association Conference), 2023",
      description:
        "Poster presentation showcasing surgical outcomes and postoperative recovery pathways in complex orthopaedic cases.",
    },
    {
      id: "icmr-biomedical",
      type: "Certification Course",
      title: "Basic Course in Biomedical Research",
      forum: "ICMR & National Institute of Epidemiology",
      description:
        "Completed rigorous clinical research methodology, biostatistics, and medical ethics course.",
    },
  ],

  languages: ["English", "Hindi"],

  hobbiesAndInterests: [
    {
      category: "Academic & Professional",
      items: ["Reading medical literature", "Surgical innovations & navigation robotics"],
    },
    {
      category: "Physical Fitness & Sports",
      items: ["Fitness and strength training", "Playing tennis, cricket & badminton"],
    },
    {
      category: "Mindfulness & Adventure",
      items: ["Trekking & outdoor adventure activities", "Meditation and mindfulness practices"],
    },
  ],
};

