import { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      {
        label: "Knee & Ligament Surgery",
        href: "/treatments/knee-ligament-surgery",
        description: "Minimally invasive arthroscopic knee surgery & ligament care.",
      },
      {
        label: "Shoulder Arthroscopy",
        href: "/treatments/shoulder-arthroscopy",
        description: "Rotator cuff repair, labral stabilization & impingement relief.",
      },
      {
        label: "ACL / PCL Reconstruction",
        href: "/treatments/acl-pcl-reconstruction",
        description: "Anatomical tendon graft reconstruction for rapid sports return.",
      },
      {
        label: "Joint Replacement",
        href: "/treatments/joint-replacement",
        description: "Precision partial & total knee and shoulder joint replacements.",
      },
      {
        label: "Sports Injury Treatment",
        href: "/treatments/sports-injury-treatment",
        description: "Evidence-based non-surgical & surgical sports rehabilitation.",
      },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
    children: [
      {
        label: "ACL / Meniscus Tear",
        href: "/conditions/acl-meniscus-tear",
        description: "Instability, locking, pain and sports twisting injuries.",
      },
      {
        label: "Rotator Cuff & Shoulder Pain",
        href: "/conditions/rotator-cuff-tear",
        description: "Difficulty raising arm, night pain and overhead sports weakness.",
      },
      {
        label: "Recurrent Shoulder Dislocation",
        href: "/conditions/shoulder-dislocation",
        description: "Bankart lesions and joint instability treatment.",
      },
      {
        label: "Knee Osteoarthritis",
        href: "/conditions/knee-osteoarthritis",
        description: "Joint preservation, cartilage wear, injections and replacements.",
      },
      {
        label: "Cartilage & Ligament Injuries",
        href: "/conditions/cartilage-ligament-injuries",
        description: "Comprehensive joint surface restorations and rehabilitation.",
      },
    ],
  },
  {
    label: "Costs & Clinics",
    href: "/costs-clinics",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_LINKS = {
  treatments: [
    { label: "Knee & Ligament Surgery", href: "/treatments/knee-ligament-surgery" },
    { label: "Shoulder Arthroscopy", href: "/treatments/shoulder-arthroscopy" },
    { label: "ACL / PCL Reconstruction", href: "/treatments/acl-pcl-reconstruction" },
    { label: "Joint Replacement", href: "/treatments/joint-replacement" },
    { label: "Sports Injury Treatment", href: "/treatments/sports-injury-treatment" },
  ],
  quickLinks: [
    { label: "About Dr. Ankit Jaipal", href: "/about" },
    { label: "Clinic Locations & OPD", href: "/costs-clinics" },
    { label: "RGHS & Cashless Insurance", href: "/costs-clinics#cashless" },
    { label: "Orthopaedic Articles & Guides", href: "/blog" },
    { label: "Book Consultation", href: "/book-appointment" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

