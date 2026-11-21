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
        label: "ACL & PCL Ligament Injuries",
        href: "/conditions/acl-pcl-injuries",
        description: "Instability, popping sensation, and sports twisting trauma.",
      },
      {
        label: "Meniscus Tears & Joint Locking",
        href: "/conditions/meniscus-tear",
        description: "Joint-line tenderness, mechanical catching, and repair options.",
      },
      {
        label: "Rotator Cuff Tears",
        href: "/conditions/rotator-cuff-tear",
        description: "Overhead weakness, inability to raise arm, and night pain.",
      },
      {
        label: "Shoulder Dislocation & Instability",
        href: "/conditions/shoulder-dislocation",
        description: "Recurrent slippage, Bankart lesions, and labral repair.",
      },
      {
        label: "Knee Osteoarthritis",
        href: "/conditions/osteoarthritis",
        description: "Joint preservation, cartilage wear, injections, and alignment.",
      },
      {
        label: "Cartilage & Sports Injuries",
        href: "/conditions/cartilage-injuries",
        description: "Chondral restoration, microfracture, and athletic recovery.",
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

