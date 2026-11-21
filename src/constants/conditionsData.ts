/**
 * Authoritative Orthopaedic Conditions Database
 * Dr. Ankit Jaipal - Consultant Orthopaedics (Arthrogenix & Sevayatan Hospital, Jaipur)
 * 
 * Strict Medical Accuracy & Patient Education Rules:
 * - Patient-friendly, accessible explanations of joint anatomy and pathology
 * - No guaranteed cures or fixed recovery promises
 * - Conservative (non-surgical) care explained first for every condition
 * - Clear red-flag warning signs for prompt specialist consultation
 * - Direct cross-linking to specialized treatment routes (/treatments/...)
 */

export interface RelatedTreatmentLink {
  slug: string;
  title: string;
  description: string;
  badge: string;
}

export interface ConditionDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: "Knee" | "Shoulder" | "Hip" | "Sports Injuries" | "Trauma";
  categorySlug: "knee" | "shoulder" | "hip" | "sports" | "trauma";
  heroBadge: string;
  urgency: "Elective Consultation" | "Prompt Specialist Review" | "Urgent Trauma Care";
  image: string;
  imageAlt: string;
  shortDescription: string;
  whatIsCondition: {
    overview: string;
    anatomyDetail: string;
    clinicalNote: string;
  };
  commonSymptoms: string[];
  causesAndRiskFactors: string[];
  diagnosticEvaluation: {
    physicalTests: string[];
    imagingAndScans: string[];
  };
  treatmentApproaches: {
    nonSurgical: {
      title: string;
      description: string;
    }[];
    surgical: {
      title: string;
      description: string;
    }[];
  };
  whenSurgeryConsidered: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedTreatments: RelatedTreatmentLink[];
}

export const CONDITIONS_DATA: Record<string, ConditionDetail> = {
  "knee-pain": {
    slug: "knee-pain",
    title: "Knee Pain & Joint Stiffness",
    subtitle: "Comprehensive clinical evaluation of acute knee injuries, chronic joint discomfort, and mobility restrictions.",
    category: "Knee",
    categorySlug: "knee",
    heroBadge: "Symptom & Joint Evaluation",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-knee.webp",
    imageAlt: "Knee joint examination and diagnostic evaluation by Dr. Ankit Jaipal",
    shortDescription: "Expert diagnosis and individualized treatment pathways for acute and chronic knee pain, locking, swelling, and joint stiffness.",
    whatIsCondition: {
      overview: "Knee pain is one of the most frequent reasons patients visit an orthopaedic clinic. The knee is a high-demand hinge joint subjected to tremendous compressive and rotational forces during everyday walking, stair climbing, and sports activities.",
      anatomyDetail: "The knee joint comprises the femur (thigh bone), tibia (shin bone), and patella (kneecap), cushioned by articular cartilage and two shock-absorbing C-shaped fibrocartilages called menisci. It is stabilized by four primary ligaments: ACL, PCL, MCL, and LCL.",
      clinicalNote: "Pain can originate from acute ligament trauma, meniscus fraying, articular cartilage wear, patellofemoral misalignment, or inflammatory synovitis. Accurate clinical examination is essential before initiating any therapy.",
    },
    commonSymptoms: [
      "Persistent dull aching pain during or after prolonged walking or standing",
      "Sharp pain when bending the knee, squatting, or taking stairs",
      "Noticeable fluid buildup, puffiness, or swelling around the joint",
      "Sensation of the knee 'catching', 'locking', or grinding (crepitus)",
      "Feeling of knee instability or 'giving way' unexpectedly while bearing weight",
    ],
    causesAndRiskFactors: [
      "Sports-related twisting injuries, rapid pivots, or sudden deceleration",
      "Gradual age-related degeneration of articular cartilage (osteoarthritis)",
      "Repetitive stress from occupational kneeling, heavy lifting, or running",
      "Direct traumatic impact, falls, or road traffic collisions",
      "Excess body weight placing amplified mechanical load on weight-bearing joints",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Comprehensive palpation for joint-line tenderness and fluid effusion",
        "Ligamentous stability testing including Lachman, anterior drawer, and valgus/varus stress tests",
        "Meniscal provocation tests including McMurray and Thessaly maneuvers",
        "Patellofemoral tracking and quadriceps angle (Q-angle) measurement",
      ],
      imagingAndScans: [
        "Weight-bearing digital X-rays to assess joint space narrowing and alignment",
        "High-resolution 3T MRI scan for soft tissue, ligament, and meniscus visualization",
        "Diagnostic ultrasound when evaluating superficial bursitis or patellar tendon tears",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Targeted Physical Rehabilitation",
          description: "Strengthening the quadriceps, hamstrings, and hip abductors to absorb ground impact forces and de-load the joint.",
        },
        {
          title: "Activity & Ergonomic Modification",
          description: "Substituting high-impact running with non-impact swimming or stationary cycling while inflammation settles.",
        },
        {
          title: "Supportive Bracing & Footwear",
          description: "Unloader braces or patellar stabilizing sleeves to optimize joint mechanics during active daily routines.",
        },
      ],
      surgical: [
        {
          title: "Minimally Invasive Arthroscopy",
          description: "Keyhole surgery to trim unstable meniscus tears, remove loose bodies, or smooth damaged cartilage surfaces.",
        },
        {
          title: "Ligament Reconstruction",
          description: "Anatomical reconstruction of ruptured cruciate or collateral ligaments using autologous tendon grafts.",
        },
        {
          title: "Computer-Navigated Joint Replacement",
          description: "Advanced partial or total knee arthroplasty using AR precision tools for severe end-stage joint wear.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Mechanical locking where the knee cannot physically straighten due to a displaced meniscus fragment",
      "Gross joint instability causing frequent falls or inability to perform basic occupational duties",
      "Severe end-stage joint wear refractory to structured physiotherapy and medical management",
      "Full-thickness ligament rupture in active individuals desiring return to pivoting athletics",
    ],
    faqs: [
      {
        question: "Does having knee pain mean I will definitely need surgery?",
        answer: "No. The vast majority of knee pain cases are treated successfully without surgery. Early-stage wear, mild sprains, tendon inflammation, and small tears often respond well to structured physical therapy, guided muscle strengthening, and weight management.",
      },
      {
        question: "When should I see an orthopaedic specialist for knee pain?",
        answer: "You should schedule a clinical consultation if your knee gave an audible 'pop' during injury, swells rapidly, cannot support your weight, locks in one position, or if pain persists beyond 2–3 weeks despite rest.",
      },
      {
        question: "Can an X-ray detect all causes of knee pain?",
        answer: "X-rays show bones, alignment, fractures, and cartilage thinning (joint space narrowing), but cannot visualize soft tissues like ligaments and menisci. When soft tissue damage is suspected, an MRI scan is recommended.",
      },
    ],
    relatedTreatments: [
      {
        slug: "knee-ligament-surgery",
        title: "Knee Ligament & Meniscus Surgery",
        description: "Minimally invasive keyhole diagnosis and joint preservation procedures.",
        badge: "Arthroscopy",
      },
      {
        slug: "joint-replacement",
        title: "AR Joint Replacement",
        description: "Computer-assisted augmented reality knee replacement for severe arthritis.",
        badge: "Surgical Arthroplasty",
      },
    ],
  },

  "osteoarthritis": {
    slug: "osteoarthritis",
    title: "Knee & Joint Osteoarthritis",
    subtitle: "Evidence-based management of age-related cartilage thinning, bone-on-bone friction, and chronic joint degeneration.",
    category: "Knee",
    categorySlug: "knee",
    heroBadge: "Degenerative Joint Care",
    urgency: "Elective Consultation",
    image: "/images/doctor/dr-ankit-jaipal-ar-headset-profile.jpeg",
    imageAlt: "Dr. Ankit Jaipal evaluating knee osteoarthritis for joint replacement",
    shortDescription: "Structured conservative care and advanced AR computer-navigated joint replacement for progressive knee osteoarthritis.",
    whatIsCondition: {
      overview: "Osteoarthritis is a chronic, progressive degenerative condition where the smooth, protective articular cartilage that caps the ends of the bones gradually wears thin over time.",
      anatomyDetail: "In a healthy joint, hyaline cartilage allows frictionless gliding and absorbs weight. As cartilage breaks down, the underlying bone responds by thickening and forming marginal bone spurs (osteophytes), causing narrowing of the joint space.",
      clinicalNote: "Osteoarthritis progresses through clinical stages (Grade 1 to Grade 4). Early stages focus on joint preservation and muscle strengthening, whereas advanced bone-on-bone stages with angular deformity (bow legs) may benefit from joint replacement.",
    },
    commonSymptoms: [
      "Joint stiffness upon waking in the morning, typically easing within 30 minutes of gentle movement",
      "Gradual onset of aching pain that intensifies after prolonged walking or standing",
      "Audible or palpable grinding sensation (crepitus) during knee bending",
      "Progressive bowing of the legs (varus deformity) causing an uneven walking gait",
      "Difficulty climbing stairs, getting up from low chairs, or sitting cross-legged",
    ],
    causesAndRiskFactors: [
      "Natural biological aging and diminished cartilage cellular repair capacity",
      "Previous traumatic joint injuries (past ACL rupture or meniscus removal)",
      "Excessive body weight multiplying mechanical load across the joint surface",
      "Genetic predisposition and family history of joint wear",
      "Chronic occupational kneeling, squatting, or heavy load carriage",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Assessment of standing limb alignment, gait deviations, and varus/valgus deformity",
        "Evaluation of active and passive knee range of motion and flexion contractures",
        "Palpation for bony spurs, joint line crepitus, and capsular thickening",
      ],
      imagingAndScans: [
        "Standing weight-bearing full-length bilateral knee X-rays to assess joint space loss",
        "Skyline patellofemoral view to check kneecap cartilage wear",
        "Long-leg scanogram when planning precise surgical alignment correction",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Low-Impact Conditioning",
          description: "Water aerobics, stationary cycling, and isometric quadriceps strengthening to improve stability without joint impact.",
        },
        {
          title: "Weight Optimization",
          description: "Every kilogram of weight loss reduces compressive force across the knee joint by approximately four kilograms per step.",
        },
        {
          title: "Prescription Unloader Braces",
          description: "Custom biomechanical braces that shift weight away from the damaged compartment to the healthier compartment.",
        },
      ],
      surgical: [
        {
          title: "Partial (Unicompartmental) Knee Replacement",
          description: "Resurfacing solely the damaged medial or lateral compartment while preserving all healthy native ligaments.",
        },
        {
          title: "Total Knee Replacement (TKR)",
          description: "Precision resurfacing of the entire knee joint using modern biocompatible cobalt-chromium and polyethylene implants.",
        },
        {
          title: "AR Augmented Reality Computer Navigation",
          description: "Using Pixee AR glasses to achieve sub-millimeter bony cut precision and individualized soft tissue balancing.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Severe resting pain or nocturnal pain that routinely awakens the patient from sleep",
      "Significant loss of mobility preventing independent shopping, family activities, or work",
      "Severe joint space obliteration (bone-on-bone contact) visible on standing X-rays",
      "Exhaustion of conservative therapy, medication, and lifestyle adjustments over 3–6 months",
    ],
    faqs: [
      {
        question: "Can worn-out knee cartilage grow back naturally?",
        answer: "Mature adult hyaline articular cartilage has very limited natural blood supply and cannot regrow on its own once worn away. However, dedicated strengthening of surrounding muscles can relieve pressure and dramatically improve daily comfort.",
      },
      {
        question: "What is AR computer-navigated knee replacement?",
        answer: "AR navigation uses lightweight Augmented Reality smart glasses (Pixee AR) worn by the surgeon in the operating theatre. It projects real-time 3D anatomical alignment data directly into the surgical field for high accuracy in bone cuts and ligament balance.",
      },
      {
        question: "Is knee replacement surgery covered under RGHS and cashless insurance?",
        answer: "Yes. Surgical procedures performed by Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital Jaipur are empaneled with RGHS (Rajasthan Government Health Scheme) and major cashless health insurance TPAs.",
      },
    ],
    relatedTreatments: [
      {
        slug: "joint-replacement",
        title: "Computer-Assisted AR Joint Replacement",
        description: "Precision Total Knee and Hip Replacement using Augmented Reality navigation.",
        badge: "Flagship Procedure",
      },
      {
        slug: "knee-ligament-surgery",
        title: "Knee Ligament & Meniscus Surgery",
        description: "Joint preservation and keyhole arthroscopic management for early joint damage.",
        badge: "Joint Preservation",
      },
    ],
  },

  "acl-pcl-injuries": {
    slug: "acl-pcl-injuries",
    title: "ACL & PCL Cruciate Ligament Tears",
    subtitle: "Complete clinical guide to cruciate ligament ruptures, joint instability, pivot-shift mechanisms, and anatomical reconstruction.",
    category: "Knee",
    categorySlug: "knee",
    heroBadge: "Cruciate Ligament Care",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-acl.webp",
    imageAlt: "Dr. Ankit Jaipal ACL and PCL ligament tear examination",
    shortDescription: "Specialized arthroscopic diagnosis, multi-ligament stabilization, and functional athletic return protocols for ACL and PCL tears.",
    whatIsCondition: {
      overview: "The cruciate ligaments—the Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL)—are the primary internal stabilizers of the knee joint, crossing each other like an 'X' inside the center of the joint.",
      anatomyDetail: "The ACL prevents the tibia from sliding forward on the femur and controls rotational twisting. The PCL is a thicker, stronger ligament that prevents the shin bone from sliding backward. When ruptured, the joint loses fundamental mechanical stability.",
      clinicalNote: "Cruciate tears rarely occur in complete isolation; associated meniscus tears and articular cartilage bruises are common. Treatment depends on functional demands, joint laxity, and patient activity goals.",
    },
    commonSymptoms: [
      "Audible 'pop' or snap sound accompanied by immediate severe knee pain",
      "Rapid joint swelling (hemarthrosis) developing within 2 to 6 hours after injury",
      "Sudden sensation of the knee giving way or buckling, especially when attempting to turn",
      "Difficulty putting full weight on the injured leg immediately after the incident",
      "Loss of full range of motion with inability to fully bend or straighten the leg",
    ],
    causesAndRiskFactors: [
      "Sudden non-contact pivot, cutting maneuver, or sharp change of direction in football, cricket, or basketball",
      "Awkward landing from a jump with the knee collapsed inward (valgus stress)",
      "Direct blow to the front of the bent shin (dashboard injury) frequently causing PCL tears",
      "Sudden hyperextension of the knee joint during athletic collisions",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Lachman test: The most sensitive clinical examination for evaluating ACL integrity",
        "Pivot-shift test: Assesses dynamic rotational joint instability under stress",
        "Posterior drawer test and posterior sag sign (Godfrey's test) for PCL evaluation",
        "Dial test to check for concomitant posterolateral corner (PLC) ligamentous laxity",
      ],
      imagingAndScans: [
        "High-field 3T MRI of the knee to confirm complete vs. partial fiber tear and identify meniscus tears",
        "Weight-bearing knee X-rays to check for tibial spine avulsion fractures or bone bruising",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Pre-habilitation & Acute Protection",
          description: "RICE protocol, crutch-assisted protected ambulation, and regaining full knee extension before any planned procedure.",
        },
        {
          title: "Conservative Care for Low-Demand Patients",
          description: "For isolated partial tears in sedentary individuals, structured hamstring and quad strengthening can sometimes provide functional stability.",
        },
        {
          title: "Functional Derotation Bracing",
          description: "Specialized knee orthosis designed to restrict rotational shifting during daily non-pivoting activities.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic ACL Reconstruction",
          description: "Anatomical single-bundle keyhole reconstruction using the patient's own hamstring or bone-patellar tendon autograft.",
        },
        {
          title: "PCL Reconstruction / Repair",
          description: "Minimally invasive anatomical reconstruction of the posterior cruciate ligament, often combined with collateral balancing.",
        },
        {
          title: "Concomitant Meniscus Suturing",
          description: "Repairing associated meniscus tears simultaneously to safeguard long-term joint cartilage from premature arthritis.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Active individuals, athletes, and working professionals who require rotational knee stability",
      "Episodes of the knee repeatedly buckling during routine walking or pivoting",
      "Combined ligament injuries (e.g., ACL + MCL or ACL + Meniscus bucket-handle tear)",
      "Persistent joint laxity leading to progressive cartilage wear on follow-up examinations",
    ],
    faqs: [
      {
        question: "Can an ACL tear heal back together without surgery?",
        answer: "A complete ACL tear has poor natural healing capacity because it is bathed in synovial fluid that washes away the healing blood clot. While some sedentary individuals function without surgery through muscle compensation, active individuals usually require reconstruction to prevent cartilage damage.",
      },
      {
        question: "What tendon graft is used for ACL reconstruction?",
        answer: "Dr. Ankit Jaipal uses autologous tendon grafts (most commonly hamstring tendons or patellar tendon) taken from the patient's own leg. Autografts have high biological compatibility and strong integration into bone tunnels.",
      },
      {
        question: "When can an athlete return to running and sports after ACL surgery?",
        answer: "Straight-line jogging typically begins around 3 to 4 months under physiotherapist supervision. Return to pivoting competitive sports requires objective functional milestones, limb symmetry strength tests (>90%), and clinical stability evaluation.",
      },
    ],
    relatedTreatments: [
      {
        slug: "acl-pcl-reconstruction",
        title: "ACL & PCL Reconstruction",
        description: "Anatomical arthroscopic reconstruction and tendon autograft procedures.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Comprehensive joint preservation and athletic return-to-play programs.",
        badge: "Sports Medicine",
      },
    ],
  },

  "meniscus-tear": {
    slug: "meniscus-tear",
    title: "Meniscus Tears & Joint Cartilage Damage",
    subtitle: "Understanding meniscus tears, mechanical joint locking, shock absorption loss, and keyhole meniscus preservation.",
    category: "Knee",
    categorySlug: "knee",
    heroBadge: "Meniscus Preservation",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-knee.webp",
    imageAlt: "Meniscus tear diagnosis and arthroscopic repair by Dr. Ankit Jaipal",
    shortDescription: "Advanced keyhole meniscus repair, preservation, and clinical care to protect native knee cartilage and restore smooth motion.",
    whatIsCondition: {
      overview: "The menisci are two wedge-shaped rings of tough, rubbery fibrocartilage positioned between your thigh bone and shin bone. They act as essential shock absorbers, distributing weight evenly across the knee joint.",
      anatomyDetail: "Each knee has a medial (inner) and lateral (outer) meniscus. The outer third has rich blood supply ('red zone') and can heal when sutured, whereas the inner two-thirds ('white zone') have limited blood supply.",
      clinicalNote: "Modern orthopaedic practice prioritizes meniscus preservation ('Save the Meniscus'). Trimming is reserved strictly for non-repairable degenerative fragments to maintain as much native shock-absorbing tissue as possible.",
    },
    commonSymptoms: [
      "Sharp pain localized directly along the inner or outer joint line of the knee",
      "Mechanical locking or catching where the knee gets stuck and cannot fully straighten",
      "Delayed swelling developing 12 to 24 hours after an athletic twisting event or deep squat",
      "Inability to squat fully or sit cross-legged without acute joint discomfort",
      "Tenderness when pressing along the joint crevice on the side of the knee",
    ],
    causesAndRiskFactors: [
      "Forceful twisting or rotating of the knee while the foot is planted firmly on the ground",
      "Deep squatting, heavy lifting, or awkward kneeling in everyday activities",
      "Age-related degenerative wear where older meniscus tissue becomes brittle and tears easily",
      "Associated knee injuries such as acute ACL ruptures",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "McMurray's test: Rotational manipulation of the knee to elicit joint line clicks and pain",
        "Apley's grind test: Compression and distraction maneuvers to isolate meniscal pathology",
        "Thessaly test: Dynamic weight-bearing rotational test performed at 5° and 20° knee flexion",
      ],
      imagingAndScans: [
        "High-resolution 3T MRI of the knee to classify tear pattern (radial, horizontal, longitudinal, bucket-handle)",
        "Weight-bearing X-rays to evaluate associated osteoarthritis and bony joint space height",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "RICE & Guided Rehabilitation",
          description: "Rest, ice, compression, and elevation followed by targeted quadriceps and hamstring conditioning.",
        },
        {
          title: "Temporary Activity Modification",
          description: "Avoiding deep squats, repetitive stairs, and pivoting athletic drills during active tissue inflammation.",
        },
        {
          title: "Conservative Trial for Degenerative Tears",
          description: "Small, stable tears in older patients often become completely symptom-free with structured physiotherapy.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Meniscus Repair",
          description: "Using specialized inside-out or all-inside bio-absorbable sutures to repair tears in vascular zones and preserve natural tissue.",
        },
        {
          title: "Partial Meniscectomy",
          description: "Minimally trimming solely the frayed, unstable fragment that causes mechanical catching, leaving all stable tissue intact.",
        },
        {
          title: "Root Tear & Complex Repair",
          description: "Re-anchoring avulsed meniscus root attachments to restore hoop stress mechanics and prevent rapid arthritis.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Mechanical knee locking caused by a displaced bucket-handle tear fragment",
      "Persistent joint line pain and swelling failing to improve after 6–8 weeks of physical therapy",
      "Tears located in the vascular 'red-white' zone in young active patients suitable for biological repair",
      "Associated ACL tear where repairing the meniscus protects the new ligament graft",
    ],
    faqs: [
      {
        question: "Can a meniscus tear heal without surgery?",
        answer: "Yes, certain small tears located in the vascular outer third (red zone) and stable degenerative tears can heal or become asymptomatic with rest, physiotherapy, and quadriceps strengthening.",
      },
      {
        question: "Why is meniscus repair preferred over removing the meniscus?",
        answer: "Removing significant portions of the meniscus transfers heavy stress directly onto the articular cartilage, accelerating the onset of osteoarthritis. Whenever anatomically feasible, Dr. Ankit Jaipal prioritizes repairing and preserving native meniscus tissue.",
      },
      {
        question: "What is the recovery like after meniscus surgery?",
        answer: "For a simple trimming (meniscectomy), patients usually walk comfortably within days. For a formal meniscus repair (suturing), the knee is protected in a brace with restricted weight-bearing for 4–6 weeks to allow the sutured tissue to heal securely.",
      },
    ],
    relatedTreatments: [
      {
        slug: "knee-ligament-surgery",
        title: "Knee Ligament & Meniscus Surgery",
        description: "Keyhole arthroscopic meniscus repair and joint stabilization.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Rehabilitation and joint preservation for athletic knee injuries.",
        badge: "Sports Medicine",
      },
    ],
  },

  "shoulder-pain": {
    slug: "shoulder-pain",
    title: "Shoulder Pain & Mobility Restriction",
    subtitle: "Clinical diagnosis and treatment pathways for impingement, bursitis, tendonitis, and restricted overhead shoulder motion.",
    category: "Shoulder",
    categorySlug: "shoulder",
    heroBadge: "Shoulder Evaluation",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-shoulder.webp",
    imageAlt: "Dr. Ankit Jaipal evaluating shoulder pain and overhead mobility",
    shortDescription: "Specialized orthopaedic care for persistent shoulder pain, subacromial impingement, bursitis, and overhead movement restrictions.",
    whatIsCondition: {
      overview: "The shoulder is the most mobile joint in the human body, capable of moving across a nearly 360-degree sphere. However, this remarkable mobility comes at the expense of inherent bony stability, making it reliant on a delicate muscular cuff and capsular ligaments.",
      anatomyDetail: "The shoulder joint is a ball-and-socket formed by the humeral head and shallow glenoid cavity, stabilized by the four rotator cuff muscles (supraspinatus, infraspinatus, teres minor, subscapularis) and cushioned by subacromial bursae.",
      clinicalNote: "Shoulder pain commonly stems from subacromial impingement, rotator cuff tendinopathy, biceps tendonitis, acromioclavicular (AC) joint arthritis, or capsular contracture. Early evaluation prevents chronic tendon retraction and weakness.",
    },
    commonSymptoms: [
      "Aching pain in the outer shoulder or upper arm that worsens when lifting the arm overhead",
      "Night pain and sleep disturbance, especially when lying on the affected shoulder",
      "Weakness or difficulty when reaching behind the back or putting on a jacket",
      "Painful arc: sharp discomfort when elevating the arm between 60° and 120°",
      "Clicking, popping, or grating sensation when rotating the arm",
    ],
    causesAndRiskFactors: [
      "Repetitive overhead motions in sports (cricket bowling, badminton, tennis, swimming) or manual work",
      "Bony spurs on the underside of the acromion rubbing against rotator cuff tendons (impingement)",
      "Age-related tendon degeneration with reduced microvascular blood supply",
      "Acute falls onto an outstretched hand or direct blows to the shoulder joint",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Neer's and Hawkins-Kennedy impingement tests to detect subacromial bursal pinch",
        "Empty-can (Jobe's) and full-can tests to assess supraspinatus muscle strength",
        "Speed's and Yergason's tests for long head of biceps tendon irritation",
        "Active vs. passive range-of-motion comparison to differentiate impingement from frozen shoulder",
      ],
      imagingAndScans: [
        "True AP, axillary, and scapular Y-view shoulder X-rays to assess acromial morphology and AC joint spurs",
        "High-resolution shoulder MRI to evaluate rotator cuff tendon continuity, fluid, and labral integrity",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Scapular & Rotator Cuff Strengthening",
          description: "Restoring scapulothoracic rhythm and strengthening rotator cuff stabilizers to decompress the subacromial space.",
        },
        {
          title: "Postural & Ergonomic Adjustments",
          description: "Correcting forward head and rounded shoulder posture to eliminate mechanical tendon pinch during desk work.",
        },
        {
          title: "Targeted Medical Management",
          description: "Judicious short-course oral anti-inflammatories or subacromial therapeutic injections under clinical guidance.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Subacromial Decompression",
          description: "Keyhole shaving of the impinging bony spur on the acromion and inflamed bursal tissue.",
        },
        {
          title: "Rotator Cuff Repair",
          description: "Reattaching torn tendons back down onto the greater tuberosity bone footprint using suture anchors.",
        },
        {
          title: "Biceps Tenodesis / Tenotomy",
          description: "Addressing co-existing diseased long head of biceps tendon to eliminate anterior shoulder catching.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Failure of 8–12 weeks of structured physiotherapy and medical management to relieve pain",
      "Full-thickness rotator cuff tendon tear confirmed on MRI in an active patient",
      "Substantial weakness preventing functional arm elevation or performance of work tasks",
      "Prominent subacromial bony spur causing persistent mechanical tendon attrition",
    ],
    faqs: [
      {
        question: "Why does shoulder pain hurt more at night when sleeping?",
        answer: "When lying down, the effect of gravity pulling the arm downward disappears, allowing the humerus to ride upward slightly into the subacromial space. Direct pressure on the shoulder also restricts local blood flow, amplifying nighttime inflammation.",
      },
      {
        question: "How is shoulder impingement different from a rotator cuff tear?",
        answer: "Impingement is irritation and pinching of the tendons and bursa under the acromion bone without structural tendon discontinuity. A rotator cuff tear means the tendon fibers have actually detached from the bone.",
      },
      {
        question: "Can shoulder pain be caused by neck problems?",
        answer: "Yes. Cervical spine radiculopathy (pinched nerve in the neck) often radiates pain into the shoulder and upper arm. A thorough orthopaedic physical examination by Dr. Ankit Jaipal differentiates true shoulder joint pathology from referred cervical pain.",
      },
    ],
    relatedTreatments: [
      {
        slug: "shoulder-arthroscopy",
        title: "Shoulder Arthroscopy & Rotator Cuff Repair",
        description: "Minimally invasive keyhole shoulder surgery and tendon repair.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Rehabilitation and joint preservation for athletic overhead injuries.",
        badge: "Sports Medicine",
      },
    ],
  },

  "rotator-cuff-tear": {
    slug: "rotator-cuff-tear",
    title: "Rotator Cuff Tears",
    subtitle: "Clinical understanding of partial and full-thickness rotator cuff tears, tendon retraction, and arthroscopic anchor repair.",
    category: "Shoulder",
    categorySlug: "shoulder",
    heroBadge: "Rotator Cuff Care",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-shoulder.webp",
    imageAlt: "Dr. Ankit Jaipal rotator cuff tear clinical examination and repair",
    shortDescription: "Specialized keyhole arthroscopic rotator cuff repair, tendon preservation, and progressive rehabilitation in Jaipur.",
    whatIsCondition: {
      overview: "The rotator cuff is a cohesive group of four muscles and their tendons that envelop the shoulder joint like a cuff, holding the head of the humerus firmly inside the shallow glenoid socket while enabling complex arm rotations.",
      anatomyDetail: "The supraspinatus tendon (running across the top of the shoulder) is by far the most commonly torn, followed by the infraspinatus and subscapularis. Tears can range from partial-thickness fraying to complete full-thickness detachment from bone.",
      clinicalNote: "Untreated chronic full-thickness tears can retract away from the bone, and over time the unused muscle can undergo irreversible fatty infiltration and muscle atrophy. Timely clinical assessment prevents loss of repairability.",
    },
    commonSymptoms: [
      "Persistent dull ache deep inside the shoulder that frequently interrupts sleep at night",
      "Significant muscular weakness when attempting to lift the arm overhead or pour from a jug",
      "Audible clicking, snapping, or catching when moving the arm through certain angles",
      "Severe pain when attempting to reach into the backseat of a car or fasten clothing behind the back",
      "In severe tears: 'drop arm' sign where the patient cannot smoothly lower their arm from an overhead position",
    ],
    causesAndRiskFactors: [
      "Age-related degeneration: Blood supply to the rotator cuff tendon diminishes after age 40",
      "Chronic mechanical friction against acromial bone spurs (subacromial impingement)",
      "Acute high-velocity trauma, such as falling onto an outstretched hand or lifting an unexpectedly heavy object",
      "Repetitive overhead athletic stress in badminton, volleyball, cricket, and gym workouts",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Drop arm test: Evaluates complete supraspinatus and infraspinatus detachment",
        "External rotation lag sign: Identifies significant infraspinatus and teres minor deficiency",
        "Belly-press test and lift-off test: Specifically assesses subscapularis tendon integrity",
      ],
      imagingAndScans: [
        "3T High-resolution MRI of the shoulder: Gold standard for grading tear dimensions (small, medium, large, massive), retraction, and muscle fatty infiltration",
        "Shoulder X-rays to check for acromial spurs and superior migration of the humeral head",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Physical Therapy for Partial Tears",
          description: "Targeted conditioning of intact anterior and posterior rotator cuff fibers to compensate for partial-thickness tears.",
        },
        {
          title: "Guided Activity Modification",
          description: "Avoiding aggravating overhead positions while tendon inflammation subsides.",
        },
        {
          title: "Therapeutic Injections",
          description: "Subacromial corticosteroid injection administered under strict aseptic protocols to manage acute inflammation.",
        },
      ],
      surgical: [
        {
          title: "All-Arthroscopic Rotator Cuff Repair",
          description: "Keyhole surgery using miniature instruments and bio-composite suture anchors to secure the detached tendon back onto bone.",
        },
        {
          title: "Double-Row Footprint Reconstruction",
          description: "Advanced anatomical stitching technique that maximizes tendon-to-bone contact area for robust biological healing.",
        },
        {
          title: "Subacromial Acromioplasty",
          description: "Shaving the impinging acromial bone spur simultaneously to remove mechanical friction on the newly repaired tendon.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Acute traumatic full-thickness rotator cuff tear in active patients",
      "Substantial shoulder weakness interfering with daily work, overhead lifting, or sports",
      "Progressive tear enlargement observed on sequential MRI imaging",
      "Failure of conservative physiotherapy and medical management after 3 months",
    ],
    faqs: [
      {
        question: "Can a completely torn rotator cuff heal on its own without surgery?",
        answer: "A complete full-thickness tear where the tendon has separated from the bone cannot reattach itself on its own. While pain can sometimes be reduced with physiotherapy by strengthening adjacent muscles, the tendon remains detached and may enlarge over time.",
      },
      {
        question: "How is arthroscopic rotator cuff surgery performed?",
        answer: "Dr. Ankit Jaipal performs this procedure using 3 to 4 tiny keyhole incisions (approx 4–5 mm). A pencil-sized camera visualizes the torn tendon under 4K magnification, and specialized bio-absorbable anchors with high-strength sutures re-anchor the tendon to the bone.",
      },
      {
        question: "How long do I have to wear a shoulder sling after rotator cuff surgery?",
        answer: "Patients typically wear a specialized abduction shoulder sling for 4 to 6 weeks. This protects the newly repaired tendon from tensile stress while biological bone-tendon healing takes place.",
      },
    ],
    relatedTreatments: [
      {
        slug: "shoulder-arthroscopy",
        title: "Shoulder Arthroscopy & Rotator Cuff Repair",
        description: "Minimally invasive keyhole repair using advanced suture anchor techniques.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Athletic shoulder rehabilitation and strength conditioning.",
        badge: "Sports Medicine",
      },
    ],
  },

  "frozen-shoulder": {
    slug: "frozen-shoulder",
    title: "Frozen Shoulder (Adhesive Capsulitis)",
    subtitle: "Clinical stages, painful stiffness, capsular contracture, and structured non-surgical & arthroscopic release.",
    category: "Shoulder",
    categorySlug: "shoulder",
    heroBadge: "Joint Stiffness Care",
    urgency: "Elective Consultation",
    image: "/images/expertise-shoulder.webp",
    imageAlt: "Dr. Ankit Jaipal evaluating frozen shoulder and capsular stiffness",
    shortDescription: "Specialized diagnosis and staged management for adhesive capsulitis to relieve severe night pain and restore full joint mobility.",
    whatIsCondition: {
      overview: "Frozen shoulder, medically termed adhesive capsulitis, is a condition characterized by progressive stiffness, severe pain, and profound loss of both active and passive motion in the shoulder joint.",
      anatomyDetail: "The strong connective tissue capsule that surrounds the glenohumeral joint becomes inflamed, thickens, and severely contracts, forming adhesions. As the capsule tightens, the space inside the joint shrinks dramatically, and synovial lubricating fluid decreases.",
      clinicalNote: "Frozen shoulder typically progresses through three distinct clinical phases: Freezing phase (acute pain, increasing stiffness), Frozen phase (stiffness dominates, pain slowly diminishes), and Thawing phase (gradual motion recovery). Early intervention accelerates recovery.",
    },
    commonSymptoms: [
      "Severe, diffuse shoulder ache that becomes intensely painful with sudden, unexpected arm movements",
      "Disabling night pain that makes sleeping on the affected side nearly impossible",
      "Profound stiffness where the patient cannot raise their arm overhead or rotate it outward (external rotation loss)",
      "Daily functional disability: difficulty combing hair, reaching into back pockets, or fastening clothes",
      "Both active (patient trying) and passive (doctor lifting) movements are equally blocked",
    ],
    causesAndRiskFactors: [
      "Endocrine disorders: Significantly higher prevalence in patients with diabetes mellitus and thyroid dysfunction",
      "Prolonged immobilization following a fracture, shoulder injury, or surgical procedure",
      "Post-traumatic or inflammatory response following minor rotator cuff tendonitis",
      "Most commonly affects individuals between the ages of 40 and 65, with higher frequency in women",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Assessment of passive external rotation with the elbow tucked into the side (hallmark diagnostic sign)",
        "Measuring active vs. passive forward elevation, abduction, and internal rotation behind the back",
        "Exclusion of true rotator cuff weakness (once range of motion is tested within pain limits)",
      ],
      imagingAndScans: [
        "Shoulder X-rays to definitively rule out underlying glenohumeral osteoarthritis or calcific tendonitis",
        "High-resolution MRI to visualize capsular thickening, axillary pouch contracture, and rule out cuff tears",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Staged Physiotherapy & Gentle Stretching",
          description: "Passive range-of-motion stretching (wand exercises, pulley drills, sleeper stretches) guided by pain thresholds.",
        },
        {
          title: "Intra-Articular Hydrodilatation / Injections",
          description: "Targeted injection of anti-inflammatory medicine and sterile fluid under ultrasound to stretch the contracted capsule from within.",
        },
        {
          title: "Metabolic & Diabetic Optimization",
          description: "Coordinating strict glycemic control in diabetic patients, which directly influences capsular collagen elasticity.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Capsular Release",
          description: "Keyhole procedure using a radiofrequency probe to divide the thickened, contracted capsule in all tight quadrants.",
        },
        {
          title: "Gentle Manipulation Under Anaesthesia (MUA)",
          description: "Carefully mobilizing the joint through full range under brief anaesthetic relaxation after capsular release.",
        },
        {
          title: "Immediate Post-Operative Physiotherapy",
          description: "Commencing assisted active motion within hours of surgery to maintain the newly unlocked joint volume.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Persistent disabling pain and zero motion progress after 4 to 6 months of dedicated conservative therapy",
      "Severe restriction interfering with fundamental daily hygiene and occupational livelihood",
      "Diabetic patients with dense capsular fibrosis that fails to respond to hydrodilatation",
    ],
    faqs: [
      {
        question: "How long does frozen shoulder typically take to resolve without surgery?",
        answer: "Without medical intervention, natural biological progression can take anywhere from 12 to 24 months or longer. Targeted medical management, supervised hydrodilatation, and physiotherapy significantly shorten this timeline.",
      },
      {
        question: "Why are diabetic patients more prone to frozen shoulder?",
        answer: "Elevated blood sugar levels cause collagen fibers in the shoulder capsule to cross-link abnormally (glycosylation), making the tissue thicker, stiffer, and more resistant to stretching.",
      },
      {
        question: "Is arthroscopic capsular release safe for frozen shoulder?",
        answer: "Yes. When conservative methods fail, keyhole arthroscopic capsular release performed by Dr. Ankit Jaipal gently opens the contracted capsule under high-definition visualization without damaging articular cartilage.",
      },
    ],
    relatedTreatments: [
      {
        slug: "shoulder-arthroscopy",
        title: "Shoulder Arthroscopy",
        description: "Keyhole capsular release and subacromial decompression.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Structured shoulder mobility and capsular rehabilitation.",
        badge: "Physiotherapy",
      },
    ],
  },

  "shoulder-dislocation": {
    slug: "shoulder-dislocation",
    title: "Shoulder Instability & Recurrent Dislocation",
    subtitle: "Clinical evaluation of anterior shoulder dislocations, Bankart labral tears, Hill-Sachs lesions, and keyhole stabilization.",
    category: "Shoulder",
    categorySlug: "shoulder",
    heroBadge: "Instability & Labral Care",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-shoulder.webp",
    imageAlt: "Dr. Ankit Jaipal evaluating shoulder instability and Bankart lesion",
    shortDescription: "Minimally invasive arthroscopic Bankart repair, labral restoration, and joint stabilization for recurrent shoulder dislocations.",
    whatIsCondition: {
      overview: "Shoulder dislocation occurs when the head of the upper arm bone (humerus) is forcefully popped out of its shallow cup-like socket (glenoid). Due to the shoulder's vast range of motion, it is the most frequently dislocated large joint in the body.",
      anatomyDetail: "The glenoid rim is deepened by a fibrous ring called the labrum. When the shoulder dislocates forward (anterior dislocation), the anterior-inferior labrum is frequently torn off the bone—a condition known as a Bankart lesion. Often, an indentation fracture (Hill-Sachs lesion) also occurs on the back of the humeral head.",
      clinicalNote: "Young, athletic individuals who suffer an initial traumatic dislocation have an extremely high rate of recurrent dislocations (up to 80–90%) if the torn labrum does not heal back onto the bone.",
    },
    commonSymptoms: [
      "Severe acute pain and visible physical deformity of the shoulder during an active dislocation episode",
      "Inability to move the arm, holding the injured arm supported against the abdomen",
      "Persistent feeling of shoulder apprehension or nervousness when reaching up and back (e.g., throwing a ball)",
      "Recurrent episodes where the shoulder slips out with minimal trauma (e.g., during sleep or rolling over)",
      "Numbness or tingling sensation down the outer arm over the deltoid muscle (axillary nerve traction)",
    ],
    causesAndRiskFactors: [
      "High-impact sports collisions in rugby, football, wrestling, or kabaddi with arm abducted and externally rotated",
      "Falls onto an outstretched hand during two-wheeler accidents or cycling crashes",
      "Generalized constitutional ligamentous laxity (hypermobility spectrum)",
      "Young age at first dislocation (<25 years) significantly increases the probability of recurrent episodes",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Apprehension test: Placing the arm in abduction and external rotation to test patient guarding and instability",
        "Jobe relocation test: Applying posterior pressure to alleviate apprehension, confirming anterior labral deficiency",
        "Sulcus sign to evaluate multi-directional capsular laxity and inferior instability",
        "Beighton score assessment to identify generalized constitutional ligamentous hypermobility",
      ],
      imagingAndScans: [
        "Shoulder X-rays (AP, scapular Y, and West Point axillary views) to detect bony Bankart fractures and Hill-Sachs lesions",
        "High-resolution 3T MRI or MR Arthrogram to accurately visualize labral tear extent, capsule stretching, and bone loss",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Closed Reduction & Brief Immobilization",
          description: "Gentle reduction under procedural sedation followed by short-term sling support for acute comfort.",
        },
        {
          title: "Rotator Cuff & Dynamic Stabilizer Training",
          description: "Intensive strengthening of subscapularis and periscapular stabilizers to provide dynamic muscular joint stability.",
        },
        {
          title: "Proprioceptive Neuromuscular Training",
          description: "Retraining joint position sense and subconscious muscular reflexes during sports movements.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Bankart Repair",
          description: "Keyhole reattachment of the torn labrum and inferior glenohumeral ligament back to the glenoid bone using suture anchors.",
        },
        {
          title: "Capsular Plication / Shift",
          description: "Tightening stretched, redundant joint capsule tissue simultaneously to eliminate abnormal anterior translation.",
        },
        {
          title: "Bony Augmentation (Latarjet Procedure)",
          description: "Transfer of the coracoid process bone block to the anterior glenoid when significant critical bone loss is present.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Second or recurrent episode of shoulder dislocation during routine daily tasks",
      "First-time traumatic dislocation in high-demand competitive contact athletes",
      "Confirmed displaced Bankart labral tear with clinical apprehension on testing",
      "Significant glenoid bone loss requiring anatomical stabilization",
    ],
    faqs: [
      {
        question: "What happens if I don't get my recurrent shoulder dislocation treated?",
        answer: "Each subsequent dislocation chips away more bone from the glenoid socket, stretches the capsule further, and damages articular cartilage. Over time, this leads to chronic instability with minimal movement and premature shoulder osteoarthritis.",
      },
      {
        question: "How long does arthroscopic Bankart surgery take?",
        answer: "Arthroscopic Bankart repair takes approximately 60 to 90 minutes. It is performed through 3 small keyhole incisions in sterile laminar airflow operation theatres at Sevayatan Hospital, Jaipur.",
      },
      {
        question: "When can an athlete return to contact sports after labral stabilization?",
        answer: "Return to contact sports typically requires 5 to 6 months of progressive rehabilitation, ensuring complete healing of the repaired labrum, symmetrical rotator cuff strength, and passing functional stability tests.",
      },
    ],
    relatedTreatments: [
      {
        slug: "shoulder-arthroscopy",
        title: "Shoulder Arthroscopy & Labral Repair",
        description: "Keyhole Bankart labral repair and capsular stabilization.",
        badge: "Specialized Surgery",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Athletic joint stability retraining and return-to-sport testing.",
        badge: "Sports Medicine",
      },
    ],
  },

  "sports-injuries": {
    slug: "sports-injuries",
    title: "Sports Injuries & Joint Preservation",
    subtitle: "Comprehensive diagnosis, tissue-sparing surgical techniques, and rapid functional rehabilitation for athletes and active individuals.",
    category: "Sports Injuries",
    categorySlug: "sports",
    heroBadge: "Sports Medicine & Athletes",
    urgency: "Prompt Specialist Review",
    image: "/images/sports-runner.webp",
    imageAlt: "Dr. Ankit Jaipal sports injury rehabilitation and athletic joint care",
    shortDescription: "Specialized sports medicine, ligament restoration, muscle-tendon healing, and functional return-to-play programs in Jaipur.",
    whatIsCondition: {
      overview: "Sports injuries encompass acute trauma (such as ligament tears, muscle strains, joint dislocations) and chronic overuse conditions (tendinopathy, stress fractures) incurred during athletic training, competitive sports, or fitness routines.",
      anatomyDetail: "High-demand sports place explosive multi-directional forces on knees, shoulders, ankles, and hips. Joint preservation techniques focus on repairing and safeguarding native cartilage and stabilizing ligaments rather than removing them.",
      clinicalNote: "Dr. Ankit Jaipal's sports orthopaedic approach integrates biomechanical movement analysis, targeted tissue repair, and objective functional milestones to ensure athletes return to peak performance safely without re-injury risk.",
    },
    commonSymptoms: [
      "Sudden sharp pain during jumping, pivoting, sprinting, or heavy lifting",
      "Rapid onset of swelling and joint effusion following athletic impact",
      "Inability to continue playing or bear full body weight immediately after injury",
      "Chronic, nagging tendon ache that worsens after workouts and stiffens following rest",
      "Noticeable asymmetry, weakness, or joint instability when changing directions quickly",
    ],
    causesAndRiskFactors: [
      "Inadequate athletic warmup, poor conditioning, or sudden spikes in training volume",
      "Incorrect movement mechanics, faulty jump landing form, or poor equipment",
      "High-velocity contact collisions in football, cricket, running, and martial arts",
      "Incomplete rehabilitation from a previous sprain leading to recurrent joint instability",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Comprehensive joint-specific stability, pivot, and impingement testing",
        "Kinematic movement screen: Single-leg squat, landing biomechanics, and limb symmetry index (LSI)",
        "Palpation of muscle-tendon junctions, apophyses, and collateral ligaments",
      ],
      imagingAndScans: [
        "High-resolution 3T MRI for soft tissue, labral, meniscus, and bone marrow edema evaluation",
        "Dynamic diagnostic ultrasound for real-time tendon gliding and partial fiber tears",
        "Digital weight-bearing X-rays to assess bone avulsions and joint alignment",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Acute POLICE Protocol",
          description: "Protection, Optimal Loading, Ice, Compression, and Elevation to optimize acute tissue healing biology.",
        },
        {
          title: "Biomechanical Movement Retraining",
          description: "Correcting valgus knee collapse, pelvic drop, and hip abductor weakness during dynamic jumping and cutting.",
        },
        {
          title: "Cardiovascular Maintenance",
          description: "Non-impact cross-training (pool running, upper-body ergometer) to maintain athletic VO2 max during recovery.",
        },
      ],
      surgical: [
        {
          title: "Minimally Invasive Keyhole Repair",
          description: "Arthroscopic anatomical reconstruction of torn ligaments (ACL/PCL/Bankart) and meniscus preservation.",
        },
        {
          title: "Tendon Reattachment & Repair",
          description: "Surgical repair of detached hamstring, Achilles, or patellar tendons in acute avulsions.",
        },
        {
          title: "Cartilage Restoration Procedures",
          description: "Microfracture, chondral grafting, and joint preservation techniques for focal articular cartilage defects.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Complete structural rupture of primary stabilizing ligaments in an active athlete",
      "Displaced meniscus tear causing mechanical knee locking",
      "Recurrent joint dislocations preventing athletic participation",
      "Refractory chronic tendinopathy with structural partial-thickness tearing after 3–6 months",
    ],
    faqs: [
      {
        question: "Can most sports injuries heal without surgery?",
        answer: "Yes. The vast majority of sports injuries—including muscle strains, mild sprains, and early tendinitis—heal effectively with targeted sports physiotherapy, optimal loading protocols, and biomechanical correction.",
      },
      {
        question: "How do you determine when an athlete is ready to return to sports?",
        answer: "Return to play is determined by objective criteria—including passing functional agility tests, achieving >90% limb strength symmetry compared to the uninjured side, and psychological readiness—rather than calendar time alone.",
      },
      {
        question: "What is joint preservation in sports medicine?",
        answer: "Joint preservation focuses on techniques that repair, save, and restore your natural cartilage and ligaments (such as meniscus suturing rather than removal), delaying or preventing premature joint degeneration.",
      },
    ],
    relatedTreatments: [
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Comprehensive joint preservation and athletic return-to-sport protocols.",
        badge: "Flagship Program",
      },
      {
        slug: "acl-pcl-reconstruction",
        title: "ACL & PCL Reconstruction",
        description: "Anatomical arthroscopic reconstruction for athletic cruciate ligament tears.",
        badge: "Specialized Surgery",
      },
    ],
  },

  "fractures-trauma": {
    slug: "fractures-trauma",
    title: "Fractures & Complex Orthopaedic Trauma",
    subtitle: "Emergency trauma care, AO principles of rigid internal fixation, intra-articular reconstructions, and deformity correction.",
    category: "Trauma",
    categorySlug: "trauma",
    heroBadge: "Trauma & Fracture Care",
    urgency: "Urgent Trauma Care",
    image: "/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg",
    imageAlt: "Dr. Ankit Jaipal complex fracture fixation and emergency trauma care",
    shortDescription: "Expert management of complex fractures, polytrauma, joint reconstruction, and non-union cases at Sevayatan Hospital, Jaipur.",
    whatIsCondition: {
      overview: "Fractures and orthopaedic trauma encompass broken bones, crushed joints, and polytrauma resulting from high-energy road accidents, falls from heights, industrial injuries, or sports collisions.",
      anatomyDetail: "Fractures may be simple, comminuted (shattered into multiple pieces), or open (compound fractures where the bone breaches the skin). Intra-articular fractures extend directly into joint surfaces, demanding millimeter-perfect anatomical restoration.",
      clinicalNote: "Dr. Ankit Jaipal trained at Sawai Man Singh (SMS) Medical College & Hospital, Jaipur—Northern India's premier apex trauma referral center—providing extensive hands-on experience in complex fracture stabilization and emergency salvage.",
    },
    commonSymptoms: [
      "Intense, agonizing pain immediately following an accident or severe fall",
      "Visible physical deformity, unnatural bending, or bone piercing through skin",
      "Rapid massive swelling, tense skin, and severe purple bruising (ecchymosis)",
      "Total inability to put weight on the injured limb or move adjacent joints",
      "Crepitus: audible or palpable crunching sensation when the broken bone ends rub",
    ],
    causesAndRiskFactors: [
      "High-velocity vehicular collisions on highways and city roads",
      "Falls from ladders, scaffolding, roofs, or staircases",
      "High-energy sports collisions and industrial machinery injuries",
      "Osteoporotic fragility fractures in elderly patients following minor low-energy ground falls",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Immediate emergency neurovascular examination: Checking distal pulses, capillary refill, and nerve sensation",
        "Compartment pressure monitoring to rule out life-threatening acute compartment syndrome",
        "Systematic secondary survey to detect co-existing pelvic, spine, or visceral injuries",
      ],
      imagingAndScans: [
        "Digital X-rays in at least two orthogonal planes (AP and Lateral) including joints above and below",
        "High-resolution 3D CT reconstruction for complex intra-articular fractures (knee, ankle, hip, shoulder)",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Closed Reduction & Casting",
          description: "Manipulating non-displaced or stable fractures into alignment followed by rigid fiberglass casting.",
        },
        {
          title: "Functional Bracing & Splinting",
          description: "Sarmiento functional braces that allow early joint motion while maintaining fracture alignment.",
        },
        {
          title: "Sequential Radiographic Monitoring",
          description: "Regular serial X-rays to verify bone callus formation and ensure zero displacement during healing.",
        },
      ],
      surgical: [
        {
          title: "Open Reduction & Internal Fixation (ORIF)",
          description: "Direct surgical exposure, anatomical bone alignment, and rigid fixation using modern locking plates and screws.",
        },
        {
          title: "Minimally Invasive Plate Osteosynthesis (MIPO)",
          description: "Biological fixation inserting pre-contoured plates through small bridge incisions to preserve local blood supply.",
        },
        {
          title: "Intramedullary Interlocking Nailing",
          description: "Inserting high-strength titanium rods down the central canal of long bones (femur, tibia) for rapid weight-bearing.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Displaced fractures where bone fragments cannot be maintained in acceptable alignment non-operatively",
      "Intra-articular fractures involving the smooth gliding surfaces of knees, hips, or shoulders",
      "Open (compound) fractures requiring immediate emergency surgical debridement and stabilization",
      "Polytrauma patients who require stable fixation to facilitate ICU nursing and mobilization",
    ],
    faqs: [
      {
        question: "How long does it take for a broken bone to heal?",
        answer: "Bone healing biology typically progresses through inflammation, soft callus, hard callus, and remodeling over 6 to 12 weeks, depending on the specific bone, fracture type, age, and blood supply. Full remodeling continues for months.",
      },
      {
        question: "Do metal plates and screws need to be removed later?",
        answer: "In most adults, modern titanium and biocompatible stainless-steel implants remain safely inside the body for life without causing harm. Removal is considered only if hardware becomes prominent, causes localized skin irritation, or in growing children.",
      },
      {
        question: "What emergency steps should be taken if an open fracture occurs?",
        answer: "Cover the wound with a clean cloth or sterile dressing, immobilize the limb with a splint, do not attempt to push the bone back in, avoid giving food or water (in case emergency surgery is needed), and transport the patient to an emergency hospital immediately.",
      },
    ],
    relatedTreatments: [
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Functional rehabilitation and joint preservation following trauma.",
        badge: "Rehabilitation",
      },
      {
        slug: "joint-replacement",
        title: "Joint Replacement",
        description: "Reconstruction and arthroplasty for complex joint fractures.",
        badge: "Reconstruction",
      },
    ],
  },

  "hip-pain": {
    slug: "hip-pain",
    title: "Hip Pain & Femoroacetabular Impingement",
    subtitle: "Clinical evaluation of hip arthritis, labral tears, groin pain, avascular necrosis (AVN), and total hip replacement.",
    category: "Hip",
    categorySlug: "hip",
    heroBadge: "Hip Joint Care",
    urgency: "Elective Consultation",
    image: "/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg",
    imageAlt: "Dr. Ankit Jaipal hip pain and joint replacement clinical evaluation",
    shortDescription: "Comprehensive diagnosis and advanced treatment for chronic hip pain, avascular necrosis (AVN), labral tears, and hip replacement.",
    whatIsCondition: {
      overview: "The hip is a robust ball-and-socket joint that supports your body weight during upright walking, running, and climbing. Hip pain often manifests as deep groin discomfort, thigh radiation, or outer buttock aching.",
      anatomyDetail: "The femoral head (ball) fits securely inside the acetabulum (socket), cushioned by thick articular cartilage and bordered by a fibrocartilaginous labrum that creates a suction seal to maintain joint fluid lubrication.",
      clinicalNote: "Common hip conditions include osteoarthritis, Femoroacetabular Impingement (FAI), labral tears, bursitis, and Avascular Necrosis (AVN) of the femoral head—which is prevalent in post-steroid or alcohol-associated cases.",
    },
    commonSymptoms: [
      "Deep groin pain that sharpens when getting into or out of a car, putting on socks, or squatting",
      "Stiffness in the hip joint, especially upon standing up after sitting for an extended period",
      "Limping gait (antalgic gait) with a tendency to lean toward the affected side",
      "Pain radiating along the front of the thigh down toward the knee (referred hip pain)",
      "Progressive difficulty walking long distances or climbing steps comfortably",
    ],
    causesAndRiskFactors: [
      "Avascular Necrosis (AVN) leading to microvascular collapse of the femoral head",
      "Femoroacetabular Impingement (FAI): Cam or Pincer bony deformities causing labral tears",
      "Primary degenerative osteoarthritis of the hip joint with joint space obliteration",
      "History of developmental dysplasia of the hip (DDH) or slipped capital femoral epiphysis",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "FADIR test (Flexion, Adduction, Internal Rotation): Sensitive test for anterior impingement and labral tears",
        "FABER test (Patrick's test): Differentiates true hip joint pathology from sacroiliac joint pain",
        "Trendelenburg test: Evaluates hip abductor (gluteus medius) muscle strength and pelvis stability",
      ],
      imagingAndScans: [
        "Standing AP pelvis and frog-leg lateral hip X-rays to assess joint space and femoral head sphericity",
        "Pelvic MRI: Crucial for early-stage AVN detection before bone collapse appears on X-rays",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Targeted Hip Physical Therapy",
          description: "Strengthening the gluteal muscles and core to optimize pelvic stability and minimize femoral head pressure.",
        },
        {
          title: "Ergonomic & Activity Adjustments",
          description: "Avoiding deep hip flexion (>90°), crossing legs, and substituting running with swimming or cycling.",
        },
        {
          title: "Core Decompression Trial",
          description: "In early Stage 1–2 AVN, minor decompression can relieve intra-osseous pressure and encourage revascularization.",
        },
      ],
      surgical: [
        {
          title: "Total Hip Replacement (THR)",
          description: "Replacing the worn ball and socket with modern ceramic-on-polyethylene or ceramic-on-ceramic modular implants.",
        },
        {
          title: "Hip Arthroscopy",
          description: "Keyhole labral repair and bony reshaping for femoroacetabular impingement (FAI) in young patients.",
        },
        {
          title: "Dual Mobility Arthroplasty",
          description: "Advanced hip implant design offering high stability and minimal dislocation risk for active patients.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Advanced Avascular Necrosis with femoral head collapse (Ficat-Arlet Stage 3 or 4)",
      "Severe end-stage hip osteoarthritis with disabling bone-on-bone pain",
      "Severe limitation in basic daily living: inability to put on shoes, walk 100 meters, or sleep peacefully",
      "Failure of conservative rehabilitation and medication over a sustained period",
    ],
    faqs: [
      {
        question: "Why does hip joint pain often feel like groin or knee pain?",
        answer: "The hip joint is innervated by sensory nerves (such as the obturator and femoral nerves) that also supply the groin and the front of the knee. Pain from the hip frequently refers downward into the knee, often misleading patients into thinking their knee is the problem.",
      },
      {
        question: "What is Avascular Necrosis (AVN) of the hip?",
        answer: "AVN is a condition where the microscopic blood supply to the femoral head is compromised, leading to bone tissue death. If caught early on MRI, joint preservation may be attempted; if the bone has collapsed, Total Hip Replacement provides excellent pain relief.",
      },
      {
        question: "How long does a modern hip replacement last?",
        answer: "With modern ceramic and highly cross-linked polyethylene bearing surfaces, modern total hip replacements have exceptional longevity, with peer-reviewed joint registries showing over 90–95% surviving beyond 20 to 25 years.",
      },
    ],
    relatedTreatments: [
      {
        slug: "joint-replacement",
        title: "Joint Replacement",
        description: "Total Hip Replacement (THR) and computer-assisted arthroplasty.",
        badge: "Surgical Arthroplasty",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Hip abductor rehabilitation and athletic hip preservation.",
        badge: "Rehabilitation",
      },
    ],
  },

  "cartilage-injuries": {
    slug: "cartilage-injuries",
    title: "Articular Cartilage Injuries & Chondral Defects",
    subtitle: "Joint preservation strategies for localized cartilage wear, osteochondral defects, and early knee joint protection.",
    category: "Knee",
    categorySlug: "knee",
    heroBadge: "Cartilage Preservation",
    urgency: "Prompt Specialist Review",
    image: "/images/expertise-knee.webp",
    imageAlt: "Dr. Ankit Jaipal articular cartilage and chondral defect examination",
    shortDescription: "Advanced joint preservation, keyhole chondral restoration, and targeted rehabilitation for articular cartilage defects.",
    whatIsCondition: {
      overview: "Articular cartilage (hyaline cartilage) is the ultra-smooth, gleaming white tissue that covers the gliding ends of bones inside healthy joints. It has a lower friction coefficient than ice on ice, allowing effortless joint motion.",
      anatomyDetail: "Unlike skin or bone, articular cartilage lacks blood vessels, lymphatics, and nerves. When damaged by a shear impact or twisting injury, it cannot naturally heal or generate normal hyaline tissue on its own.",
      clinicalNote: "Focal cartilage defects (potholes in the joint surface) can cause localized pain, swelling, and catching. If left untreated, the edges of the defect can progressively breakdown, expanding into widespread osteoarthritis.",
    },
    commonSymptoms: [
      "Persistent localized joint ache that flares up following athletic impact or prolonged walking",
      "Intermittent joint effusion (swelling) that appears after workouts and subsides with rest",
      "Catching or clicking sensation caused by loose chondral flaps fluttering inside the joint",
      "Tenderness over the specific femoral condyle or patellar facet when bearing weight",
      "Gradual loss of confidence in the knee joint during athletic decelerations",
    ],
    causesAndRiskFactors: [
      "High-energy shear trauma during sports collisions or pivoting injuries (often alongside ACL tears)",
      "Osteochondritis Dissecans (OCD): Localized vascular condition affecting subchondral bone in adolescents",
      "Direct impaction trauma, such as a dashboard hit or heavy fall directly onto the kneecap",
      "Chronic malalignment (bow legs or knock knees) concentrating abnormal stress onto a single compartment",
    ],
    diagnosticEvaluation: {
      physicalTests: [
        "Localized joint palpation to pinpoint focal condylar or trochlear tenderness",
        "Wilson's test: Evaluates for medial femoral condyle osteochondritis dissecans",
        "Patellar compression and Clarke's test for trochlear and patellar cartilage softening (chondromalacia)",
      ],
      imagingAndScans: [
        "Cartilage-specific high-resolution 3T MRI sequences (T2 mapping, 3D FIESTA) to grade defect depth and subchondral edema",
        "Weight-bearing digital X-rays to assess overall joint space height and bony alignment",
      ],
    },
    treatmentApproaches: {
      nonSurgical: [
        {
          title: "Non-Impact Muscular Conditioning",
          description: "Strengthening the surrounding shock-absorbing musculature through closed kinetic chain resistance exercises.",
        },
        {
          title: "Biomechanical Unloader Bracing",
          description: "Custom braces configured to decompress the compartment harboring the focal cartilage lesion during daily activities.",
        },
        {
          title: "Viscosupplementation & Supportive Care",
          description: "Hyaluronic acid joint lubrication injections under sterile protocol to optimize joint fluid viscosity and reduce friction.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Chondroplasty & Debridement",
          description: "Minimally invasive keyhole smoothing of unstable cartilage flaps to stop mechanical catching and arrest defect expansion.",
        },
        {
          title: "Microfracture / Bone Marrow Stimulation",
          description: "Creating tiny subchondral perforations to release marrow stem cells that form a durable fibrocartilage repair patch.",
        },
        {
          title: "Osteochondral Autograft Transfer (OATS)",
          description: "Transferring small cylindrical bone-cartilage plugs from non-weightbearing areas to reconstruct the weightbearing defect.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Focal full-thickness cartilage defect (Grade 3 or 4) with recurrent joint locking and effusion",
      "Young active patient seeking to prevent progressive expansion into generalized osteoarthritis",
      "Concomitant ACL or meniscus tear requiring surgical stabilization and cartilage repair simultaneously",
      "Failure of conservative unloader therapy and physiotherapy after 3–6 months",
    ],
    faqs: [
      {
        question: "Can damaged joint cartilage repair itself naturally?",
        answer: "Because articular hyaline cartilage has no direct blood supply, it cannot naturally heal back to normal hyaline cartilage. However, biological procedures like microfracture or transfer grafting can generate durable repair tissue and restore a smooth joint surface.",
      },
      {
        question: "What is the difference between arthritis and a focal cartilage defect?",
        answer: "A focal cartilage defect is an isolated, localized 'pothole' surrounded by otherwise healthy cartilage, usually caused by acute trauma. Arthritis represents widespread, diffuse thinning and loss of cartilage across the entire joint surface.",
      },
      {
        question: "What is recovery like after cartilage restoration surgery?",
        answer: "Because new repair tissue needs time to mature without being crushed by body weight, patients typically use crutches with protected weight-bearing for 4 to 6 weeks, combined with early gentle continuous passive motion (CPM).",
      },
    ],
    relatedTreatments: [
      {
        slug: "knee-ligament-surgery",
        title: "Knee Ligament & Meniscus Surgery",
        description: "Keyhole arthroscopic joint preservation and cartilage restoration.",
        badge: "Joint Preservation",
      },
      {
        slug: "sports-injury-treatment",
        title: "Sports Injury Treatment",
        description: "Rehabilitation and athletic joint preservation protocols.",
        badge: "Sports Medicine",
      },
    ],
  },
};

