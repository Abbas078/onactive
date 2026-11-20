/**
 * Authoritative Treatment & Surgical Data
 * Arthrogenix - Dr. Ankit Jaipal (Consultant Orthopaedics)
 * Strict clinical education guidelines:
 * - Neutral medical educational content
 * - No guaranteed outcomes or fixed recovery promises
 * - Clearly noted conservative non-surgical management alongside surgical indications
 * - Prominent clinical disclaimer on every procedure
 */

export interface TreatmentDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: "Knee & Ligaments" | "Shoulder & Upper Limb" | "Joint Replacement" | "Sports Medicine";
  categorySlug: string;
  heroBadge: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  clinicalIntro: string;
  commonSymptoms: string[];
  causesAndRiskFactors: string[];
  diagnosisAndEvaluation: string[];
  treatmentOptions: {
    nonSurgical: { title: string; description: string }[];
    surgical: { title: string; description: string }[];
  };
  whenSurgeryConsidered: string[];
  procedureOverview: {
    summary: string;
    steps: { number: string; title: string; description: string }[];
    clinicalNote: string;
  };
  recoveryAndRehabilitation: {
    disclaimer: string;
    phases: { phase: string; title: string; focus: string }[];
  };
  faqs: { question: string; answer: string }[];
  relatedTreatmentSlugs: string[];
}

export const TREATMENTS_DATA: Record<string, TreatmentDetail> = {
  "knee-ligament-surgery": {
    slug: "knee-ligament-surgery",
    title: "Knee Ligament & Meniscus Surgery",
    subtitle: "Arthroscopic diagnosis, meniscus preservation, and multi-ligament joint stabilization.",
    category: "Knee & Ligaments",
    categorySlug: "knee",
    heroBadge: "Minimally Invasive Arthroscopy",
    image: "/images/expertise-knee.webp",
    imageAlt: "Dr. Ankit Jaipal knee ligament arthroscopy evaluation",
    shortDescription:
      "Comprehensive surgical and conservative care for knee ligament tears (MCL, LCL), meniscus tears, and combined multi-ligament knee injuries.",
    clinicalIntro:
      "The knee relies on a complex network of primary stabilizing ligaments and shock-absorbing fibrocartilage rings (menisci) to maintain smooth, painless movement. When trauma, rotational pivoting, or sudden deceleration tears these structures, patients often experience instability, locking, and swelling. Treatment begins with an in-depth clinical evaluation and diagnostic imaging to determine whether non-surgical rehabilitation or keyhole arthroscopic surgery is appropriate.",
    commonSymptoms: [
      "Audible 'pop' or tearing sensation at the moment of injury",
      "Joint effusion and swelling developing within hours of impact",
      "Feeling of knee 'giving way' or buckling during weight-bearing",
      "Mechanical locking, catching, or inability to fully straighten the knee",
      "Persistent joint-line tenderness, especially with pivoting or deep squats",
    ],
    causesAndRiskFactors: [
      "Sudden twisting or pivot motions while the foot is firmly planted",
      "Direct collision or hyperextension trauma during sports or road accidents",
      "Rapid deceleration and landing awkwardly from a jump",
      "Age-related degeneration in meniscus tissue with repetitive strain",
    ],
    diagnosisAndEvaluation: [
      "Detailed clinical knee examination including Lachman, pivot-shift, and McMurray tests",
      "High-resolution MRI scan to assess ligament fibers, meniscus tears, and articular cartilage",
      "Standard weight-bearing X-rays to rule out associated bony fractures or angular deformity",
      "Evaluation of patient's functional activity demands, work requirements, and overall joint stability",
    ],
    treatmentOptions: {
      nonSurgical: [
        {
          title: "Structured Physical Therapy",
          description: "Targeted quadriceps, hamstring, and core strengthening exercises to compensate for mild or partial ligament sprains.",
        },
        {
          title: "Bracing & Joint Protection",
          description: "Functional hinged knee brace to prevent abnormal lateral or rotational stress during initial tissue healing.",
        },
        {
          title: "Activity Modification",
          description: "Temporary avoidance of high-impact jumping and pivoting sports while joint inflammation subsides.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Meniscus Repair / Trimming",
          description: "Keyhole suturing of repairable meniscus tears in the vascular zone to preserve native shock absorption, or smoothing of unstable fragments.",
        },
        {
          title: "Ligament Reconstruction / Repair",
          description: "Minimally invasive reconstruction using tendon autografts to restore primary mechanical stability.",
        },
        {
          title: "Multi-Ligament Stabilization",
          description: "Staged or combined reconstruction of concurrent ligament injuries (e.g., ACL + MCL or PCL + PLC) in high-energy trauma cases.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Persistent knee instability or 'giving way' that interferes with daily tasks or work",
      "Mechanical knee locking caused by a displaced bucket-handle meniscus tear",
      "Young, physically active individuals seeking to resume pivoting sports safely",
      "Combined multi-ligament injuries where natural stability cannot be regained conservatively",
      "Failure of conservative rehabilitation after 8–12 weeks of structured physiotherapy",
    ],
    procedureOverview: {
      summary:
        "Knee arthroscopy is performed using slender keyhole instruments and a pencil-sized camera (arthroscope) inserted through 4–5 mm incisions. The entire procedure is visualized on high-definition monitors.",
      steps: [
        {
          number: "01",
          title: "Diagnostic Joint Exploration",
          description: "Systematic visual inspection of all knee compartments, probing the cruciate ligaments, menisci, and cartilage surfaces under magnification.",
        },
        {
          number: "02",
          title: "Tissue Preservation / Repair",
          description: "Meniscus tears suitable for preservation are sutured using all-inside or inside-out devices. Torn ligament remnants are addressed based on stability requirements.",
        },
        {
          number: "03",
          title: "Joint Lavage & Closure",
          description: "Sterile joint irrigation removes debris, incisions are closed with fine sutures, and a protective brace or sterile dressing is applied.",
        },
      ],
      clinicalNote:
        "Surgical decisions are strictly individualized. Non-operative management is always thoroughly explored whenever clinically viable.",
    },
    recoveryAndRehabilitation: {
      disclaimer:
        "Recovery timelines vary widely depending on the specific ligaments injured, whether the meniscus was repaired or trimmed, tissue healing biology, and compliance with physiotherapy. Timelines below are general clinical milestones, not guaranteed outcomes.",
      phases: [
        {
          phase: "Phase 1 (Weeks 1 - 2)",
          title: "Protection & Swelling Control",
          focus: "Protected weight-bearing with crutches or brace, cryotherapy, and gentle passive range-of-motion exercises.",
        },
        {
          phase: "Phase 2 (Weeks 3 - 6)",
          title: "Restoring Motion & Muscle Activation",
          focus: "Progression to full weight-bearing as tolerated, quadriceps reactivation, and straight-line stationary cycling.",
        },
        {
          phase: "Phase 3 (Weeks 6 - 12+)",
          title: "Strengthening & Functional Balance",
          focus: "Closed kinetic chain exercises, proprioception drills, and progressive resistance training under physio supervision.",
        },
      ],
    },
    faqs: [
      {
        question: "Does every knee ligament or meniscus tear require surgery?",
        answer:
          "No. Many isolated partial ligament sprains and stable non-locking meniscus tears in sedentary individuals respond well to non-operative management, rest, and guided physical therapy. Surgery is generally considered when mechanical locking or chronic instability occurs.",
      },
      {
        question: "How is an arthroscopic repair different from open knee surgery?",
        answer:
          "Arthroscopy uses small 4–5 mm incisions rather than a large open cut. This minimizes trauma to surrounding healthy muscles, reduces post-operative pain, and typically allows earlier mobilization.",
      },
      {
        question: "Can I walk immediately after knee arthroscopy?",
        answer:
          "For simple meniscus trimming, patients are often encouraged to bear assisted weight within 24–48 hours. When a meniscus repair or complex ligament reconstruction is performed, protected weight-bearing with crutches and a hinged brace is typically required for several weeks to protect healing sutures.",
      },
      {
        question: "Is surgical treatment covered under RGHS and cashless mediclaim?",
        answer:
          "Yes. Orthopaedic surgeries performed by Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital Jaipur are empanelled with RGHS (Rajasthan Government Health Scheme) and major health insurance TPAs.",
      },
    ],
    relatedTreatmentSlugs: ["acl-pcl-reconstruction", "sports-injury-treatment", "joint-replacement"],
  },

  "shoulder-arthroscopy": {
    slug: "shoulder-arthroscopy",
    title: "Shoulder Arthroscopy & Rotator Cuff Care",
    subtitle: "Minimally invasive keyhole procedures for rotator cuff tears, recurrent dislocations, and impingement.",
    category: "Shoulder & Upper Limb",
    categorySlug: "shoulder",
    heroBadge: "Keyhole Shoulder Surgery",
    image: "/images/expertise-shoulder.webp",
    imageAlt: "Dr. Ankit Jaipal shoulder arthroscopy and rotator cuff examination",
    shortDescription:
      "Advanced arthroscopic care for rotator cuff tears, recurrent shoulder dislocations (Bankart lesions), labral tears, and subacromial impingement.",
    clinicalIntro:
      "The shoulder joint provides the widest range of motion of any joint in the human body, but this remarkable mobility makes it naturally susceptible to instability, impingement, and tendon wear. When the rotator cuff tendons or the stabilizing labrum are torn, everyday tasks like lifting your arm, combing hair, or sleeping on the affected side can become intensely painful. Shoulder arthroscopy allows precise visualization and repair of these deep structures through tiny portals without stripping the outer deltoid muscle.",
    commonSymptoms: [
      "Persistent dull ache deep inside the shoulder, particularly aggravated at night",
      "Pain or sharp catching when raising the arm overhead or reaching behind the back",
      "Noticeable weakness when attempting to lift or rotate the arm",
      "Feeling of looseness, slipping, or recurrent dislocation of the shoulder joint",
      "Grating, clicking, or snapping sensations with shoulder movement",
    ],
    causesAndRiskFactors: [
      "Age-related tendon wear and reduced blood supply to the rotator cuff",
      "Repetitive overhead athletic activities (badminton, tennis, swimming, weight training)",
      "Acute fall onto an outstretched hand or high-impact athletic collision",
      "Bony spurs on the underside of the acromion impinging on underlying tendons",
    ],
    diagnosisAndEvaluation: [
      "Specialized physical tests: Neer, Hawkins-Kennedy, Empty Can, and Apprehension tests",
      "Shoulder MRI scan to evaluate tendon retraction, tear dimensions, and labral detachment",
      "Standard shoulder X-rays (AP, axillary, and scapular Y views) to check bony anatomy and acromial morphology",
      "Detailed assessment of patient age, handedness, occupational overhead demands, and duration of symptoms",
    ],
    treatmentOptions: {
      nonSurgical: [
        {
          title: "Physiotherapy & Scapular Stabilization",
          description: "Targeted rehabilitation to strengthen periscapular stabilizers, rotator cuff muscles, and restore normal biomechanics.",
        },
        {
          title: "Anti-Inflammatory Management",
          description: "Short-course medications and ergonomic adjustments to alleviate acute bursitis and tendon irritation.",
        },
        {
          title: "Subacromial Injections",
          description: "Judicious diagnostic and therapeutic anti-inflammatory injections for persistent bursitis or impingement pain under clinical supervision.",
        },
      ],
      surgical: [
        {
          title: "Arthroscopic Rotator Cuff Repair",
          description: "Re-attaching torn supraspinatus/infraspinatus tendons directly back to their anatomical footprint on the humerus using biocompatible suture anchors.",
        },
        {
          title: "Bankart & Labral Repair",
          description: "Refixation of the torn glenoid labrum and tightening of stretched capsule to treat recurrent anterior shoulder dislocations.",
        },
        {
          title: "Subacromial Decompression",
          description: "Removing impinging bone spurs and inflamed bursal tissue to relieve friction on the tendon during arm elevation.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Full-thickness rotator cuff tears causing significant weakness and functional limitation",
      "Persistent night pain that fails to respond to 3–6 months of dedicated conservative rehabilitation",
      "Recurrent shoulder dislocations or frank joint instability in active individuals",
      "Acute traumatic tears in previously active patients with sudden loss of arm elevation",
    ],
    procedureOverview: {
      summary:
        "Shoulder arthroscopy is performed in an operation theatre setting under regional or general anaesthesia. The surgeon works through 3 to 4 tiny 4 mm puncture holes around the shoulder.",
      steps: [
        {
          number: "01",
          title: "Joint Assessment",
          description: "The arthroscope is inserted into the glenohumeral joint to inspect the labrum, biceps anchor, cartilage, and deep cuff surface.",
        },
        {
          number: "02",
          title: "Subacromial Preparation",
          description: "The scope is moved into the subacromial space; inflamed bursal tissue is cleared and bone spurs are smoothed if causing impingement.",
        },
        {
          number: "03",
          title: "Suture Anchor Fixation",
          description: "High-strength suture anchors are inserted into the bone, and heavy sutures are passed through the tendon to securely compress it back to bone.",
        },
      ],
      clinicalNote:
        "Tendon healing takes biological time. Protected immobilization in a shoulder sling is essential during the early weeks post-surgery.",
    },
    recoveryAndRehabilitation: {
      disclaimer:
        "Rehabilitation after shoulder surgery must strictly protect the repaired tendon while bone-to-tendon biological integration occurs. Timelines are gradual and individual.",
      phases: [
        {
          phase: "Phase 1 (Weeks 1 - 4)",
          title: "Immobilization & Tissue Healing",
          focus: "Arm supported in an abduction sling. Only passive pendulum exercises and gentle elbow/wrist motion are permitted.",
        },
        {
          phase: "Phase 2 (Weeks 5 - 8)",
          title: "Active-Assisted Range of Motion",
          focus: "Gradual weaning from sling; active-assisted elevation and external rotation within pain-free boundaries.",
        },
        {
          phase: "Phase 3 (Weeks 9 - 16+)",
          title: "Strengthening & Functional Restoration",
          focus: "Progressive resistance bands, periscapular strengthening, and gradual resumption of light daily activities.",
        },
      ],
    },
    faqs: [
      {
        question: "How long will I need to wear a shoulder sling after rotator cuff surgery?",
        answer:
          "Most rotator cuff repairs require sling immobilization for 4 to 6 weeks to protect the tendon while it anchors to the bone. Specific duration depends on tear size and tissue quality.",
      },
      {
        question: "Can rotator cuff tears heal on their own without surgery?",
        answer:
          "Partial tears or mild tendinopathy can often become pain-free with focused physical therapy. However, full-thickness tendon tears rarely heal spontaneously because the torn tendon edge is under constant muscle tension.",
      },
      {
        question: "When can I sleep lying flat again?",
        answer:
          "During the first few weeks, sleeping in a reclined position or supporting the elbow with pillows is much more comfortable than lying completely flat on the operated shoulder.",
      },
    ],
    relatedTreatmentSlugs: ["sports-injury-treatment", "knee-ligament-surgery"],
  },

  "acl-pcl-reconstruction": {
    slug: "acl-pcl-reconstruction",
    title: "ACL / PCL Ligament Reconstruction",
    subtitle: "Anatomical graft reconstruction, sports rehabilitation, and knee joint stabilization.",
    category: "Knee & Ligaments",
    categorySlug: "knee",
    heroBadge: "Sports Knee Reconstruction",
    image: "/images/expertise-acl.webp",
    imageAlt: "Dr. Ankit Jaipal ACL and PCL cruciate ligament reconstruction",
    shortDescription:
      "Minimally invasive arthroscopic reconstruction of the Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) using autografts to restore knee stability.",
    clinicalIntro:
      "The Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) cross inside the center of the knee joint, forming the primary check against anterior-posterior slippage and rotation. A torn cruciate ligament cannot heal reliably by simple stitching because joint synovial fluid prevents clot formation. Cruciate reconstruction replaces the torn ligament with a sturdy tendon graft positioned precisely along its anatomical path, protecting the knee from secondary meniscus damage and future degenerative wear.",
    commonSymptoms: [
      "Loud 'pop' heard or felt inside the knee during an athletic jump, cut, or sudden pivot",
      "Immediate inability to continue sporting activity or bear full body weight",
      "Rapid joint swelling (hemarthrosis) within 2 to 6 hours after the injury",
      "Persistent sensation of instability or knee buckling when attempting to pivot or descend stairs",
      "Associated inner or outer joint-line pain indicating concurrent meniscus injury",
    ],
    causesAndRiskFactors: [
      "Non-contact athletic deceleration with valgus knee collapse and external rotation",
      "Direct dashboard impact to the front of the flexed shin in a motor vehicle accident (PCL)",
      "Hyperextension injury from an awkward landing or misstep into a depression",
      "Participation in high-demand pivoting sports (football, basketball, kabaddi, cricket)",
    ],
    diagnosisAndEvaluation: [
      "Physical examination: Lachman test, Anterior Drawer test, Pivot-shift test, and Posterior Sag/Drawer test for PCL",
      "MRI scan: Evaluates cruciate fiber discontinuity, bone bruises (kissing contusions), and associated meniscus tears",
      "Long-leg alignment X-rays when chronic instability or angular deformity is present",
      "Functional stability assessment comparing the injured knee with the unaffected side",
    ],
    treatmentOptions: {
      nonSurgical: [
        {
          title: "Pre-habilitation & Conservative Care",
          description: "Pre-operative swelling reduction, regaining full terminal knee extension, and strengthening the quadriceps prior to any intervention.",
        },
        {
          title: "Non-Operative Care for Low-Demand Patients",
          description: "For individuals with sedentary lifestyles and no knee instability during everyday walking, focused hamstring/quadriceps physical therapy may suffice.",
        },
      ],
      surgical: [
        {
          title: "Anatomical Arthroscopic ACL Reconstruction",
          description: "Replacing the torn ACL with a tendon graft (e.g., hamstring tendon autograft or bone-patellar tendon) fixed securely inside precision bone tunnels.",
        },
        {
          title: "PCL Reconstruction & Multiligament Repair",
          description: "Arthroscopic or combined reconstruction of the posterior cruciate ligament for severe posterior instability or combined trauma.",
        },
        {
          title: "Concomitant Meniscus Repair",
          description: "Preserving and repairing torn meniscus cushions simultaneously during the same keyhole procedure.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Active individuals and athletes who wish to return to cutting, jumping, or pivoting activities",
      "Recurrent episodes of knee giving way during routine daily walking or work",
      "Concurrent repairable meniscus tears that require joint stability to heal successfully",
      "Combined multiligament injuries causing multi-directional knee laxity",
    ],
    procedureOverview: {
      summary:
        "The operation is performed under regional spinal anaesthesia using modern arthroscopic equipment. The torn ligament remnants are cleared, and a new tendon graft is placed precisely in the native anatomical footprint.",
      steps: [
        {
          number: "01",
          title: "Graft Harvesting & Preparation",
          description: "A small incision is made to harvest the patient's own tendon graft, which is measured, looped, and pre-tensioned with high-strength sutures.",
        },
        {
          number: "02",
          title: "Anatomical Bone Tunnel Drilling",
          description: "Using precision arthroscopic guides, narrow tunnels are drilled through the tibia and femur at the exact anatomical insertion sites of the native ligament.",
        },
        {
          number: "03",
          title: "Graft Passage & Rigid Fixation",
          description: "The graft is pulled through the knee joint under arthroscopic camera control and anchored securely with specialized interference screws or cortical buttons.",
        },
      ],
      clinicalNote:
        "Precision tunnel placement is the most critical factor in restoring natural knee kinematics and graft longevity.",
    },
    recoveryAndRehabilitation: {
      disclaimer:
        "Biological graft ligamentization takes months. Physical therapy must progress through objective functional milestones rather than arbitrary calendar dates.",
      phases: [
        {
          phase: "Weeks 1 - 2",
          title: "Early Protection & Terminal Extension",
          focus: "Swelling management, achieving 0° full knee extension, and active straight leg raises with a hinged knee brace.",
        },
        {
          phase: "Weeks 3 - 6",
          title: "Normal Gait & Controlled Flexion",
          focus: "Discontinuing crutches as gait normalizes, stationary cycling, and progressive knee flexion exercises.",
        },
        {
          phase: "Months 3 - 6+",
          title: "Strength & Neuromuscular Retraining",
          focus: "Squats, lunges, balance board drills, and guided jogging progression once quadriceps strength is symmetrical.",
        },
        {
          phase: "Months 6 - 9+",
          title: "Sport-Specific Agility & Clearance",
          focus: "Cutting, pivoting, plyometrics, and passing objective functional hop testing before returning to contact sport.",
        },
      ],
    },
    faqs: [
      {
        question: "Can an ACL tear heal by itself with complete rest?",
        answer:
          "Unlike extra-articular ligaments like the MCL which have robust blood supplies, the ACL is bathed in synovial fluid which prevents blood clot adherence. Complete tears rarely heal naturally to provide mechanical pivot stability.",
      },
      {
        question: "Which graft is used for ACL reconstruction?",
        answer:
          "The choice of autograft (hamstring tendon or bone-patellar tendon) is tailored to the patient's age, sport, body habitus, and occupational demands after detailed clinical discussion.",
      },
      {
        question: "When is it safe to return to competitive sports?",
        answer:
          "Return to competitive pivoting sports typically requires 6 to 9+ months. Clearance is based on objective muscle strength testing (limb symmetry index >90%) and functional movement screening rather than time alone.",
      },
    ],
    relatedTreatmentSlugs: ["knee-ligament-surgery", "sports-injury-treatment", "joint-replacement"],
  },

  "joint-replacement": {
    slug: "joint-replacement",
    title: "Joint Replacement & AR Navigation Surgery",
    subtitle: "Computer-assisted & Augmented Reality (AR) Total Knee (TKR) and Total Hip Replacement (THR).",
    category: "Joint Replacement",
    categorySlug: "joint-replacement",
    heroBadge: "AR Computer Navigation",
    image: "/images/doctor/dr-ankit-jaipal-ar-headset-profile.jpeg",
    imageAlt: "Dr. Ankit Jaipal AR navigation joint replacement surgery",
    shortDescription:
      "Advanced joint resurfacing and replacement for severe osteoarthritis, including Pixee Medical Augmented Reality (AR) computer navigation for millimeter-precise implant alignment.",
    clinicalIntro:
      "When joint cartilage wears away completely due to severe osteoarthritis, rheumatoid arthritis, or past joint trauma, bones rub painfully against each other. Severe joint wear leads to chronic pain, angular deformities (bowlegs or knock-knees), morning stiffness, and difficulty walking. Joint replacement surgery resurfaces the damaged bone ends with smooth, biocompatible metal alloy implants and high-grade medical polymer inserts. Dr. Ankit Jaipal utilizes verified Augmented Reality (Pixee Medical AR) navigation smart glasses in the operating room to deliver millimeter-precise bone resection angles, balanced ligament tension, and optimized implant longevity.",
    commonSymptoms: [
      "Severe knee or groin pain that limits basic daily walking, climbing stairs, or standing",
      "Chronic joint pain that persists even at rest or disturbs sleep at night",
      "Stiffness that significantly restricts the ability to bend or fully straighten the joint",
      "Visible angular deformity, such as progressive bowing of the legs (varus deformity)",
      "Lack of sustained relief from medications, knee braces, or physical therapy",
    ],
    causesAndRiskFactors: [
      "Age-related wear-and-tear osteoarthritis (gradual loss of articular cartilage)",
      "Post-traumatic arthritis following complex fractures around the joint",
      "Inflammatory arthritis (rheumatoid arthritis, ankylosing spondylitis)",
      "Avascular necrosis (loss of blood supply to the femoral head in the hip)",
    ],
    diagnosisAndEvaluation: [
      "Standing weight-bearing full-length X-rays to calculate the anatomical and mechanical axis alignment",
      "Assessment of ligament stability, soft tissue contractures, and fixed joint deformities",
      "Pre-operative medical evaluation including cardiology clearance, blood sugar control, and anaesthetic assessment",
      "Clinical discussion regarding patient mobility expectations, home setup, and rehabilitation goals",
    ],
    treatmentOptions: {
      nonSurgical: [
        {
          title: "Lifestyle & Low-Impact Exercise",
          description: "Weight management, cycling, and swimming to reduce joint loading while maintaining muscular support.",
        },
        {
          title: "Walking Aids & Unloader Bracing",
          description: "Using a supportive walking cane or knee unloader brace to shift weight away from the most severely worn joint compartment.",
        },
        {
          title: "Medical Management",
          description: "Oral anti-inflammatory medications and targeted supplements prescribed for temporary symptom relief.",
        },
      ],
      surgical: [
        {
          title: "Augmented Reality (AR) Total Knee Replacement (TKR)",
          description: "Resurfacing the femoral, tibial, and patellar surfaces using Pixee Medical AR navigation glasses for real-time tracking of mechanical axis alignment.",
        },
        {
          title: "Total Hip Replacement (THR)",
          description: "Replacing the worn hip socket (acetabulum) and femoral head with ceramic/metal and ultra-high-molecular-weight polyethylene components.",
        },
        {
          title: "Complex / Revision Joint Arthroplasty",
          description: "Revising worn or loose components using specialized modular implants and bone-preserving fixation techniques.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Advanced bone-on-bone arthritis confirmed on weight-bearing X-rays",
      "Pain severely restricting independence, walking distance, and daily living",
      "Failure of non-surgical treatments to provide adequate symptom relief",
      "Severe joint deformity or contracture that is progressively worsening",
    ],
    procedureOverview: {
      summary:
        "The surgery is performed in a Class-100 laminar airflow operating theatre at Sevayatan Multispeciality Hospital under spinal or regional anaesthesia with dedicated pain management protocols.",
      steps: [
        {
          number: "01",
          title: "Joint Exposure & Cartilage Removal",
          description: "A careful anterior approach preserves surrounding muscles; worn, damaged bone ends and remnants of degenerate cartilage are exposed.",
        },
        {
          number: "02",
          title: "AR-Guided Precision Resection",
          description: "Using wearable Pixee AR smart glasses, the mechanical axis is verified in real-time, allowing sub-millimeter accurate bone cuts and balanced flexion-extension gaps.",
        },
        {
          number: "03",
          title: "Implant Fixation & Stability Testing",
          description: "Durable medical implants are secured with surgical bone cement; full range of motion and ligament tension are confirmed prior to layered closure.",
        },
      ],
      clinicalNote:
        "AR navigation provides real-time digital feedback to the surgeon inside the sterile field without requiring pre-operative radiation-heavy CT scans.",
    },
    recoveryAndRehabilitation: {
      disclaimer:
        "Modern joint replacement protocols emphasize rapid mobilization. Walking with a supportive walker is typically initiated within 24 to 48 hours under physiotherapist supervision.",
      phases: [
        {
          phase: "Days 1 - 3",
          title: "In-Hospital Mobilization",
          focus: "Supported standing and walking with a walker, ankle pumps, and gentle knee bending exercises with dedicated multi-modal pain control.",
        },
        {
          phase: "Weeks 1 - 3",
          title: "Home Recovery & Wound Care",
          focus: "Transition from walker to cane, progressive home exercises, suture line monitoring, and safe navigation of stairs.",
        },
        {
          phase: "Weeks 4 - 8+",
          title: "Independent Mobility",
          focus: "Walking independently, driving resumption once muscle reflexes allow, and regaining endurance for daily errands.",
        },
      ],
    },
    faqs: [
      {
        question: "How does Augmented Reality (AR) navigation help in knee replacement?",
        answer:
          "Pixee AR navigation smart glasses overlay real-time alignment data into the surgeon's field of view. This helps ensure that the new knee implant is aligned precisely to the patient's unique mechanical limb axis.",
      },
      {
        question: "How long do modern joint replacement implants typically last?",
        answer:
          "Modern clinical registries indicate that when placed with accurate alignment, modern knee and hip implants typically function well for 15 to 20+ years in the vast majority of patients.",
      },
      {
        question: "Is joint replacement covered under RGHS in Jaipur?",
        answer:
          "Yes. Joint replacement surgeries performed by Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital are fully empanelled under RGHS (Rajasthan Government Health Scheme) and private cashless insurance.",
      },
    ],
    relatedTreatmentSlugs: ["knee-ligament-surgery", "acl-pcl-reconstruction", "sports-injury-treatment"],
  },

  "sports-injury-treatment": {
    slug: "sports-injury-treatment",
    title: "Sports Injury Treatment & Joint Preservation",
    subtitle: "Evidence-based clinical care, athletic rehabilitation, and minimally invasive joint preservation.",
    category: "Sports Medicine",
    categorySlug: "sports",
    heroBadge: "Athletic Mobility & Rehab",
    image: "/images/sports-runner.webp",
    imageAlt: "Dr. Ankit Jaipal sports injury treatment and joint rehabilitation",
    shortDescription:
      "Comprehensive care for athletic injuries in young athletes and active individuals, emphasizing tissue preservation, ligament stabilization, and structured return to play.",
    clinicalIntro:
      "Sports injuries can range from acute ligament ruptures and meniscus tears to chronic overuse tendinopathies, stress fractures, and joint cartilage damage. For athletes and fitness enthusiasts, the primary goal is not merely pain relief, but restoring full athletic power, joint stability, and agility while safeguarding long-term joint health. Dr. Ankit Jaipal's approach prioritizes natural joint preservation—repairing and salvaging native tissues whenever possible—paired with milestone-based athletic rehabilitation.",
    commonSymptoms: [
      "Sudden onset of severe joint pain during running, sprinting, or jumping",
      "Joint effusion, swelling, or localized warmth following intense athletic exertion",
      "Instability or apprehension when attempting to pivot, change direction, or land",
      "Persistent tendon soreness (patellar tendon, Achilles, or shoulder cuff) after training",
      "Loss of explosive athletic power, joint range of motion, or endurance",
    ],
    causesAndRiskFactors: [
      "Inadequate warm-up, rapid training volume spikes, or sudden return to sport without conditioning",
      "Improper movement biomechanics and poor neuromuscular landing control",
      "Direct athletic impact, tackle trauma, or awkward footing on uneven turf",
      "Unaddressed previous joint sprains leading to chronic mechanical instability",
    ],
    diagnosisAndEvaluation: [
      "Dynamic physical examination assessing ligament laxity, joint tenderness, and movement mechanics",
      "High-field MRI evaluation for subtle cartilage defects, occult bone bruises, and soft tissue injuries",
      "Functional movement screening to identify muscular imbalances and bilateral strength deficits",
      "Discussion of specific athletic goals, competition schedule, and past injury history",
    ],
    treatmentOptions: {
      nonSurgical: [
        {
          title: "POLICE Protocol (Protect, Optimal Loading, Ice, Compression, Elevation)",
          description: "Evidence-based acute management replacing outdated complete rest with guided, optimal progressive loading.",
        },
        {
          title: "Specialized Sports Physiotherapy",
          description: "Targeted eccentric strengthening, proprioceptive balance drills, and kinetic chain correction.",
        },
        {
          title: "Customized Protective Bracing",
          description: "Functional sport-specific braces to protect healing ligaments during early return-to-activity training.",
        },
      ],
      surgical: [
        {
          title: "Keyhole Joint Preservation Surgery",
          description: "Arthroscopic repair of torn menisci or labrum to preserve native shock-absorbing cartilage.",
        },
        {
          title: "Cruciate & Collateral Ligament Reconstruction",
          description: "Anatomical tendon autograft reconstruction for high-demand athletes requiring rotational knee stability.",
        },
        {
          title: "Tendon & Microvascular Repair",
          description: "Precision repair of ruptured tendons and complex soft tissue trauma.",
        },
      ],
    },
    whenSurgeryConsidered: [
      "Complete ligament tears causing mechanical instability in high-demand athletes",
      "Bucket-handle meniscus tears or displaced cartilage fragments locking the joint",
      "Persistent pain or instability that halts athletic participation despite structured rehabilitation",
      "Acute tendon ruptures requiring anatomical surgical re-approximation",
    ],
    procedureOverview: {
      summary:
        "Surgical interventions are conducted with tissue-sparing arthroscopic techniques designed to minimize collateral muscle damage and encourage rapid healing.",
      steps: [
        {
          number: "01",
          title: "Thorough Diagnostic Evaluation",
          description: "Visual and mechanical examination of joint surfaces under high-definition arthroscopic magnification.",
        },
        {
          number: "02",
          title: "Tissue-Saving Anatomical Repair",
          description: "Priority is given to repairing and suturing natural structures rather than resection.",
        },
        {
          number: "03",
          title: "Phased Rehabilitation Integration",
          description: "Immediate coordination with post-operative rehabilitation protocols designed for the athlete's specific sport.",
        },
      ],
      clinicalNote:
        "Non-surgical treatment is the first line of care for the majority of non-displaced sports injuries.",
    },
    recoveryAndRehabilitation: {
      disclaimer:
        "Athletic return is determined by objective functional performance criteria—including limb symmetry, agility testing, and psychological readiness—rather than calendar time alone.",
      phases: [
        {
          phase: "Acute Phase",
          title: "Protection & Pain Relief",
          focus: "Swelling reduction, gentle active range of motion, and maintaining cardiovascular conditioning with non-impact exercise.",
        },
        {
          phase: "Intermediate Phase",
          title: "Strength & Kinematic Balance",
          focus: "Closed-chain resistance training, core stability, and bilateral strength equalization under clinical guidance.",
        },
        {
          phase: "Sport-Specific Phase",
          title: "Agility & Return to Play",
          focus: "Plyometrics, sport-specific skill drills, and passing standardized functional return-to-sport testing.",
        },
      ],
    },
    faqs: [
      {
        question: "Can sports injuries heal without surgery?",
        answer:
          "Yes. A significant majority of athletic sprains, strains, and partial ligament tears heal effectively with dedicated sports physiotherapy, optimal loading, and temporary activity modification.",
      },
      {
        question: "How do I know if my joint injury is serious?",
        answer:
          "Red flag symptoms include hearing an audible 'pop' at the time of injury, rapid swelling within hours, inability to bear weight, or a joint that locks or feels mechanically unstable. These signs warrant prompt orthopaedic specialist evaluation.",
      },
      {
        question: "What is joint preservation?",
        answer:
          "Joint preservation refers to medical and surgical techniques aimed at repairing, restoring, and salvaging your natural cartilage and ligaments, delaying or preventing the onset of premature osteoarthritis.",
      },
    ],
    relatedTreatmentSlugs: ["knee-ligament-surgery", "acl-pcl-reconstruction", "shoulder-arthroscopy"],
  },
};

