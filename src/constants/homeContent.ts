export interface ExpertiseItem {
  id: string;
  title: string;
  image: string;
  href: string;
  description: string;
}

export interface FeaturedTreatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  recoveryTime: string;
  suitableFor: string;
}

export interface ConditionPreview {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  symptoms: string[];
  treatmentLink: string;
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyPoints: string[];
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  patientType: string;
  procedure: string;
  rating: number;
  quote: string;
  result: string;
  verifiedSource: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ArticlePreview {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  author: string;
}

// 1. Orthopaedic Expertise (Mockup-aligned 5 core areas)
export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "knee-ligament",
    title: "Knee & Ligament Surgery",
    image: "/images/expertise-knee.webp",
    href: "/treatments/knee-ligament-surgery",
    description: "Minimally invasive knee arthroscopy, meniscus repair & preservation.",
  },
  {
    id: "shoulder-arthroscopy",
    title: "Shoulder Arthroscopy",
    image: "/images/expertise-shoulder.webp",
    href: "/treatments/shoulder-arthroscopy",
    description: "Rotator cuff repair, Bankart stabilization & impingement decompression.",
  },
  {
    id: "acl-pcl",
    title: "ACL / PCL Reconstruction",
    image: "/images/expertise-acl.webp",
    href: "/treatments/acl-pcl-reconstruction",
    description: "Anatomical autograft reconstruction enabling rapid return to sports.",
  },
  {
    id: "joint-replacement",
    title: "Joint Replacement",
    image: "/images/expertise-arthroscopy.webp",
    href: "/treatments/joint-replacement",
    description: "Precision partial & total knee and shoulder joint replacements.",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Treatment",
    image: "/images/sports-runner.webp",
    href: "/treatments/sports-injury-treatment",
    description: "Comprehensive non-surgical & surgical sports injury rehabilitation.",
  },
];

// 2. Featured Treatments & Surgeries
export const FEATURED_TREATMENTS: FeaturedTreatment[] = [
  {
    id: "acl-reconstruction",
    slug: "acl-pcl-reconstruction",
    title: "ACL Reconstruction Surgery",
    category: "Knee Arthroscopy",
    description:
      "Minimally invasive arthroscopic reconstruction using anatomical tendon grafts. Restores knee rotational stability for athletic pivots and daily activity.",
    benefits: [
      "Keyhole incisions (minimal scarring)",
      "Anatomical footprint tunnel placement",
      "Next-day assisted weight bearing",
    ],
    recoveryTime: "6 - 9 months to full competitive sports",
    suitableFor: "Athletes, twisting knee injuries, pivot instability",
  },
  {
    id: "meniscus-repair",
    slug: "knee-ligament-surgery",
    title: "Meniscus Repair & Balancing",
    category: "Joint Preservation",
    description:
      "Advanced 'all-inside' and 'inside-out' arthroscopic suturing techniques designed to save the natural cartilage cushion and prevent premature arthritis.",
    benefits: [
      "Preserves natural knee biomechanics",
      "Reduces long-term osteoarthritis risk",
      "Day-care or 24-hr hospital discharge",
    ],
    recoveryTime: "6 - 12 weeks guided rehabilitation",
    suitableFor: "Bucket-handle tears, sports twists, locking knee",
  },
  {
    id: "rotator-cuff-repair",
    slug: "shoulder-arthroscopy",
    title: "Shoulder Rotator Cuff Repair",
    category: "Shoulder Arthroscopy",
    description:
      "High-definition arthroscopic anchor fixation of torn supraspinatus tendons. Alleviates night pain and restores overhead shoulder reaching strength.",
    benefits: [
      "No large open deltoid muscle incisions",
      "Direct anatomical tendon-to-bone fixation",
      "Subacromial decompression included",
    ],
    recoveryTime: "3 - 4 months progressive strength return",
    suitableFor: "Night shoulder pain, weakness lifting arm, overhead athletes",
  },
  {
    id: "shoulder-dislocation-bankart",
    slug: "shoulder-arthroscopy",
    title: "Bankart & Labral Stabilization",
    category: "Shoulder Instability",
    description:
      "Suture anchor repair of the torn glenoid labrum for patients with recurrent shoulder dislocations, popping sensations, and throwing instability.",
    benefits: [
      "Eliminates fear of recurrent dislocation",
      "Restores shoulder joint socket depth",
      "Minimally invasive keyhole approach",
    ],
    recoveryTime: "4 - 6 months for collision/throwing sports",
    suitableFor: "Recurrent shoulder slips, young contact sports players",
  },
  {
    id: "joint-replacement-precision",
    slug: "joint-replacement",
    title: "Total & Partial Knee Replacement",
    category: "Joint Reconstruction",
    description:
      "Modern joint resurfacing for advanced knee osteoarthritis when conservative measures fail. Delivers dependable pain relief and straight-leg walking.",
    benefits: [
      "Subvastus / muscle-sparing approaches",
      "High-flexion implant longevity",
      "Rapid post-op physical rehabilitation",
    ],
    recoveryTime: "3 - 6 weeks for independent daily walking",
    suitableFor: "Severe knee arthritis, night pain, severe bow-leg deformity",
  },
  {
    id: "sports-cartilage",
    slug: "sports-injury-treatment",
    title: "Cartilage Restoration & PRP Therapy",
    category: "Biologic & Sports Care",
    description:
      "Evidence-based regenerative biologics, microfracture, and cartilage restoration for localized chondral defects and early joint wear.",
    benefits: [
      "Targeted joint biological stimulation",
      "Delays invasive joint replacement",
      "Tailored physio conditioning protocol",
    ],
    recoveryTime: "2 - 8 weeks depending on protocol",
    suitableFor: "Focal cartilage defects, patellofemoral cartilage wear",
  },
];

// 3. Conditions Treated
export const CONDITIONS_LIST: ConditionPreview[] = [
  {
    id: "acl-tear",
    slug: "acl-meniscus-tear",
    name: "ACL Tear & Knee Instability",
    tagline: "Popping sound during sport, knee giving way on turns",
    symptoms: ["Sudden pop & swelling within 2 hours", "Inability to bear full weight", "Feeling of instability / knee giving out"],
    treatmentLink: "/treatments/acl-pcl-reconstruction",
  },
  {
    id: "rotator-cuff",
    slug: "rotator-cuff-tear",
    name: "Rotator Cuff Tendon Tear",
    tagline: "Sharp pain reaching overhead, dull ache disrupting sleep",
    symptoms: ["Pain sleeping on affected shoulder", "Weakness lifting or rotating the arm", "Clicking or catching when reaching behind back"],
    treatmentLink: "/treatments/shoulder-arthroscopy",
  },
  {
    id: "shoulder-dislocation",
    slug: "shoulder-dislocation",
    name: "Recurrent Shoulder Dislocation",
    tagline: "Shoulder popping out of socket repeatedly after first injury",
    symptoms: ["Visible deformity or severe joint laxity", "Fear of reaching arm overhead or back", "Bankart labral detachment on MRI"],
    treatmentLink: "/treatments/shoulder-arthroscopy",
  },
  {
    id: "meniscus-tear",
    slug: "acl-meniscus-tear",
    name: "Meniscus Tear & Joint Locking",
    tagline: "Twisting injury causing knee catch, locking, or joint line tenderness",
    symptoms: ["Inability to fully straighten or bend knee", "Localized tenderness along joint line", "Delayed swelling after standing/walking"],
    treatmentLink: "/treatments/knee-ligament-surgery",
  },
  {
    id: "knee-osteoarthritis",
    slug: "knee-osteoarthritis",
    name: "Knee Osteoarthritis & Wear",
    tagline: "Morning stiffness, grinding sensation, difficulty on stairs",
    symptoms: ["Persistent pain climbing stairs or standing", "Crepitus (grating sound) in joint", "Gradual bowing or angular alignment shift"],
    treatmentLink: "/treatments/joint-replacement",
  },
  {
    id: "cartilage-injury",
    slug: "cartilage-ligament-injuries",
    name: "Cartilage Defects & Sports Injury",
    tagline: "Joint surface friction and swelling following athletic impact",
    symptoms: ["Intermittent swelling after exercise", "Dull deep ache inside the joint", "Loss of full athletic pivot power"],
    treatmentLink: "/treatments/sports-injury-treatment",
  },
];

// 4. Why Choose Arthrogenix
export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    title: "Dedicated Joint Replacement & AR Specialization",
    description:
      "Advanced fellowship training in Joint Replacement (TKR/THR) and Augmented Reality computer-guided navigation under Dr. Ankit Jaipal.",
    iconName: "Target",
    highlight: "Fellowship-Trained Specialist",
  },
  {
    title: "Joint Preservation First Philosophy",
    description:
      "We prioritize repairing your natural ligaments, saving meniscus tissue, and preserving native joint cartilage before considering joint replacement.",
    iconName: "Shield",
    highlight: "Preserve Your Natural Joint",
  },
  {
    title: "Minimally Invasive Precision",
    description:
      "High-definition keyhole techniques mean smaller incisions, less muscle trauma, minimal post-op pain, and quicker return to your athletic life.",
    iconName: "Zap",
    highlight: "Keyhole Micro-Incisions",
  },
  {
    title: "RGHS & Cashless Surgical Facilities",
    description:
      "Empanelled surgical admissions at Sevayatan Multispeciality Hospital Jaipur, offering complete cashless insurance, TPA coordination, and RGHS coverage.",
    iconName: "FileCheck2",
    highlight: "100% Cashless Support",
  },
  {
    title: "End-to-End Recovery Protocol",
    description:
      "Your care doesn't end in the OT. We design structured physiotherapy milestones and monitor athletic test batteries until you are safely back on the field.",
    iconName: "Activity",
    highlight: "Guided Return to Sport",
  },
];

// 5. Patient Treatment Journey
export const PATIENT_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    title: "Clinical Evaluation & MRI Review",
    duration: "Day 1",
    description:
      "A thorough physical joint examination, dynamic ligament stress testing, and expert MRI scan review to diagnose the exact root cause of your pain.",
    keyPoints: ["Detailed clinical ligament examination", "MRI second opinion & imaging review", "Honest surgical vs non-surgical guidance"],
  },
  {
    step: "02",
    title: "Personalized Treatment Plan",
    duration: "Pre-Op Phase",
    description:
      "If non-surgical treatment is viable, targeted physio/injections begin. If surgery is required, pre-op optimization and cashless insurance clearance are arranged.",
    keyPoints: ["Transparent surgical options explained", "TPA / RGHS cashless insurance approval", "Pre-rehabilitation exercise guidance"],
  },
  {
    step: "03",
    title: "Precision Minimally Invasive Procedure",
    duration: "Day of Surgery",
    description:
      "Surgery performed using world-class arthroscopic instruments and AR navigation at our high-tech OT. Keyhole incisions ensure minimal pain and rapid recovery.",
    keyPoints: ["High-definition 4K arthroscopic visualization", "AR computer-navigated millimeter alignment", "Most patients walk within 24-48 hours"],
  },
  {
    step: "04",
    title: "Structured Rehabilitation & Athletic Return",
    duration: "Weeks 1 - 24+",
    description:
      "Step-by-step phased recovery protocol. We track joint mobility, muscle activation, agility drills, and functional testing to guarantee a safe return to sport.",
    keyPoints: ["Direct post-op protocol monitoring", "Strength & proprioception milestones", "Objective clearance criteria before sport"],
  },
];

// 6. Verified Patient Reviews & Testimonials
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    patientName: "Rahul Sharma",
    patientType: "District Footballer",
    procedure: "Arthroscopic ACL & Meniscus Repair",
    rating: 5,
    quote:
      "I suffered an ACL tear during a football match and was terrified my playing days were over. Dr. Ankit Jaipal explained the graft technique clearly and performed an arthroscopic ACL reconstruction. 8 months post-op, I am back sprinting and playing competitively with zero pain or instability.",
    result: "Returned to competitive football at 8 months",
    verifiedSource: "Verified Google Review",
  },
  {
    id: "test-2",
    patientName: "Sunita Meena",
    patientType: "Working Professional",
    procedure: "Shoulder Rotator Cuff Repair",
    rating: 5,
    quote:
      "For almost a year I couldn't sleep on my right side or raise my hand to comb my hair due to severe shoulder pain. Dr. Ankit Jaipal performed keyhole rotator cuff repair under RGHS. The entire cashless process was seamless, and today my shoulder has complete strength and range.",
    result: "Complete pain-free range of motion restored",
    verifiedSource: "Verified RGHS Patient",
  },
  {
    id: "test-3",
    patientName: "Vikram Singh",
    patientType: "Fitness Enthusiast & Runner",
    procedure: "Bilateral Knee Arthroscopy & Meniscus Balancing",
    rating: 5,
    quote:
      "Dr. Ankit Jaipal's focus on joint preservation is commendable. Rather than rushing into extensive surgery, he salvaged my meniscus with keyhole surgery. His post-op guidance and rehab plan are world-class. Highly recommended for any sports injury in Jaipur.",
    result: "Completed 10K marathon run 6 months post-surgery",
    verifiedSource: "Verified Google Review",
  },
];

// 7. Frequently Asked Questions
export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "What is arthroscopy and how is it different from open surgery?",
    answer:
      "Arthroscopy is a minimally invasive surgical procedure where a slender pencil-sized camera (arthroscope) and specialized instruments are inserted through tiny 4-5 mm incisions into the joint. Unlike traditional open surgery which cuts large muscles, arthroscopy provides magnified high-definition visualization of joint structures with dramatically less bleeding, minimal tissue trauma, minimal scarring, and significantly faster recovery.",
    category: "Surgical Technique",
  },
  {
    question: "Does every ACL tear or ligament injury require surgery?",
    answer:
      "No. Treatment is personalized based on your activity level, age, instability symptoms, and whether associated structures (like the meniscus) are damaged. Sedentary individuals with partial tears without instability may do well with dedicated physiotherapy and muscular retraining. However, for young, active individuals and athletes wishing to return to pivoting sports, arthroscopic ACL reconstruction is recommended to prevent secondary meniscus damage and early joint wear.",
    category: "ACL & Sports",
  },
  {
    question: "Is cashless mediclaim and RGHS accepted for surgeries?",
    answer:
      "Yes. Surgeries performed by Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital Jaipur are fully empanelled for RGHS (Rajasthan Government Health Scheme), CGHS, and all major corporate health insurance TPAs (Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, etc.). Our hospital desk handles pre-authorization and documentation directly.",
    category: "Insurance & Costs",
  },
  {
    question: "How soon after knee or shoulder arthroscopy can I walk and return to work?",
    answer:
      "Most knee arthroscopy patients are mobilized to bear assisted weight on the day after surgery with a brace. Sedentary desk work can typically be resumed in 7 to 14 days. Driving is usually resumed between 4 to 6 weeks once quadriceps control is achieved, while athletic pivoting sports resume between 6 to 9 months following objective functional testing.",
    category: "Recovery & Rehab",
  },
  {
    question: "Where does Dr. Ankit Jaipal consult in Jaipur?",
    answer:
      "Dr. Ankit Jaipal conducts OPD consultations primarily at Arthrogenix Clinic in Durgapura (Tonk Road, Jaipur) and Sevayatan Multispeciality Hospital, with follow-up consultations at Vaishali Nagar by appointment.",
    category: "Consultation & OPD",
  },
];

// 8. Latest Health Articles
export const FEATURED_ARTICLES: ArticlePreview[] = [
  {
    slug: "recovering-from-acl-tear",
    title: "ACL Tear Recovery Roadmap: When is Surgery Truly Necessary?",
    category: "Knee Health",
    readTime: "5 min read",
    publishedDate: "Nov 2026",
    excerpt:
      "Understanding the anatomy of the anterior cruciate ligament, non-operative management criteria, and why anatomical graft reconstruction protects your knee.",
    author: "Dr. Ankit Jaipal",
  },
  {
    slug: "shoulder-rotator-cuff-exercises",
    title: "Shoulder Rotator Cuff Pain: Early Warning Signs & Treatment",
    category: "Shoulder Care",
    readTime: "4 min read",
    publishedDate: "Nov 2026",
    excerpt:
      "Why ignoring persistent night shoulder pain can turn a simple impingement into a full-thickness tendon tear requiring surgical repair.",
    author: "Dr. Ankit Jaipal",
  },
  {
    slug: "when-to-see-orthopaedic-surgeon",
    title: "When Should You Consult a Sports Orthopaedic Specialist?",
    category: "Sports Medicine",
    readTime: "4 min read",
    publishedDate: "Nov 2026",
    excerpt:
      "Red flag symptoms following a joint twisting injury: sudden joint effusion, locking sensations, and when resting the joint is not enough.",
    author: "Dr. Ankit Jaipal",
  },
];

