/**
 * Centralized Media Configuration for Arthrogenix
 * Single source of truth for all client-provided photographs, videos, posters and derivatives.
 * Doctor: Dr. Ankit Jaipal – Consultant Orthopaedics
 */

export interface MediaImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
}

export interface MediaVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  caption: string;
  category: "doctor" | "surgery" | "interview";
  durationSeconds?: number;
  advisory?: string;
}

export const DOCTOR_IMAGES = {
  // Hero Section Primary: Frontal AR Surgical Navigation glasses portrait
  heroPrimary: {
    id: "dr-ankit-hero",
    src: "/images/doctor/dr-ankit-jaipal-ar-navigation-front.jpeg",
    alt: "Dr. Ankit Jaipal - Consultant Orthopaedics & AR Navigation Knee Replacement Surgeon",
    width: 1200,
    height: 1600,
    description: "Dr. Ankit Jaipal wearing black scrub suit with name embroidery and Pixee Medical AR surgical navigation headset.",
  },
  // Doctor Introduction: Approachable outdoor scrubs portrait in front of hospital facade
  doctorIntro: {
    id: "dr-ankit-intro",
    src: "/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg",
    alt: "Dr. Ankit Jaipal - MS Orthopaedics, Consultant Orthopaedics",
    width: 1200,
    height: 1600,
    description: "Dr. Ankit Jaipal in grey scrub suit and cap outdoors in front of hospital glass facade.",
  },
  // Technology Spotlight: Profile AR navigation view
  techProfile: {
    id: "dr-ankit-tech-profile",
    src: "/images/doctor/dr-ankit-jaipal-ar-headset-profile.jpeg",
    alt: "Dr. Ankit Jaipal performing computer-navigated knee replacement surgery with AR glasses",
    width: 1200,
    height: 1600,
    description: "Dr. Ankit Jaipal profile view in black scrub suit with Pixee Medical AR surgical navigation headset.",
  },
  // Biography & Standing Portrait
  bioStanding: {
    id: "dr-ankit-standing",
    src: "/images/doctor/dr-ankit-jaipal-standing-scrubs.jpeg",
    alt: "Dr. Ankit Jaipal - Orthopaedic and Joint Replacement Surgeon Jaipur",
    width: 1200,
    height: 1600,
    description: "Dr. Ankit Jaipal 3/4 length standing outdoors in grey scrubs.",
  },
} as const;

export const DOCTOR_VIDEOS: Record<string, MediaVideo> = {
  introReel: {
    id: "dr-ankit-intro-reel",
    src: "/videos/doctor/dr-ankit-jaipal-intro-reel.mp4",
    poster: "/posters/poster-dr-ankit-intro-reel.png",
    title: "Meet Dr. Ankit Jaipal",
    caption: "Clinical introduction & philosophy on evidence-based orthopaedic care and mobility restoration.",
    category: "doctor",
    durationSeconds: 12,
  },
  recoveryTalk: {
    id: "dr-ankit-recovery-talk",
    src: "/videos/doctor/dr-ankit-jaipal-recovery-talk.mp4",
    poster: "/posters/poster-dr-ankit-recovery-talk.png",
    title: "Recovery & Rehabilitation Pathway",
    caption: "Dr. Ankit Jaipal explains rapid recovery protocols for joint and arthroscopy surgeries.",
    category: "interview",
    durationSeconds: 18,
  },
  sportsInjury: {
    id: "dr-ankit-sports-injury",
    src: "/videos/doctor/dr-ankit-jaipal-sports-injury.mp4",
    poster: "/posters/poster-dr-ankit-sports-injury.png",
    title: "Sports Injury & Arthroscopic Care",
    caption: "Guidance for athletes and active individuals on meniscus, ligament, and cartilage preservation.",
    category: "interview",
    durationSeconds: 21,
  },
  patientGuidance: {
    id: "dr-ankit-patient-guidance",
    src: "/videos/doctor/dr-ankit-jaipal-patient-guidance.mp4",
    poster: "/posters/poster-dr-ankit-patient-guidance.png",
    title: "Timely Consultation & Joint Health",
    caption: "Clinical insights on when to seek orthopaedic intervention before irreversible joint damage occurs.",
    category: "interview",
    durationSeconds: 11,
  },
};

export const SURGICAL_VIDEOS: Record<string, MediaVideo> = {
  jointReplacementOT: {
    id: "joint-replacement-ot-procedure",
    src: "/videos/surgery/joint-replacement-ot-procedure.mp4",
    poster: "/posters/poster-joint-replacement-ot.png",
    title: "Precision Joint Surgery Demonstration",
    caption: "Sterile operation theatre procedure highlighting surgical technique, anatomical alignment, and instrumentation.",
    category: "surgery",
    durationSeconds: 84,
    advisory: "Clinical surgical demonstration intended for patient education and procedural insight.",
  },
  otTeamwork: {
    id: "ot-teamwork-surgical-action",
    src: "/videos/surgery/ot-teamwork-surgical-action.mp4",
    poster: "/posters/poster-ot-teamwork.png",
    title: "Modular Operation Theatre In Action",
    caption: "Surgical team coordination, laminar airflow sterile protocols, and surgical lights in a modern hospital OT.",
    category: "surgery",
    durationSeconds: 18,
    advisory: "Authentic footage of Dr. Ankit Jaipal and surgical team inside the operation theatre.",
  },
  precisionTechnique: {
    id: "precision-surgical-technique",
    src: "/videos/surgery/precision-surgical-technique.mp4",
    poster: "/posters/poster-precision-technique.png",
    title: "Bone & Joint Instrumentation",
    caption: "Detailed surgical instrumentation and keyhole technique during joint reconstruction.",
    category: "surgery",
    durationSeconds: 51,
    advisory: "Sterile field instrumentation. Available strictly upon patient request and click.",
  },
};

