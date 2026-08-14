// data/privacy.js

import contactInfo from "./contactInfo";

export const privacyData = {
  meta: {
    title: "Privacy Policy",
    lastUpdated: "August 2026",
  },
  sections: [
    {
      id: "1",
      title: "1. Information Collection",
      content:
        "We collect information that you provide voluntarily when requesting marketing audits, subscribing to our services, submitting inquiries, or interacting with our campaigns. This includes:",
      list: [
        "Personal identification information (name, email, phone, business address)",
        "Company details, domain URL, and digital strategy requirements",
        "Payment and billing information",
        "Communication history, campaign goals, and feedback",
        "Service preferences, target audience profiles, and project scope",
      ],
    },
    {
      id: "2",
      title: "2. How We Use Information",
      content: "We use collected information for business purposes, including:",
      list: [
        "Providing, maintaining, and optimizing our SEO and digital marketing services",
        "Processing transactions and sending campaign progress notifications",
        "Sending performance reports, SEO analytics updates, and support messages",
        "Responding to inquiries, audit requests, and campaign support inquiries",
        "Communicating about marketing strategies, new service features, and growth opportunities",
        "Monitoring campaign analytics and evaluating search engine optimization performance",
      ],
    },
    {
      id: "3",
      title: "3. Information Sharing",
      content: "We may share your information in these situations:",
      list: [
        "With technology partners, advertising platforms, and analytics vendors who assist in delivering our marketing solutions",
        "When required by law or to respond to legal processes",
        `To protect the rights and safety of ${contactInfo.companyNameShort} and others`,
        "In connection with business transactions like mergers or acquisitions",
      ],
    },
    {
      id: "4",
      title: "4. Data Security",
      content:
        "We implement robust security measures — including encryption, access controls, and regular audits — to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is completely secure.",
    },
    {
      id: "5",
      title: "5. Cookies and Tracking",
      content:
        "We use cookies, conversion tracking pixels, and analytics technologies to measure campaign effectiveness, analyze traffic trends, and store user preferences. You can set your browser to refuse cookies, though certain marketing analytics features may be limited.",
    },
    {
      id: "6",
      title: "6. Your Rights",
      content: "You have certain rights regarding your personal information:",
      list: [
        "Right to access, update, or delete your information",
        "Right to correct inaccurate or incomplete information",
        "Right to object to processing of your personal information",
        "Right to data portability",
        "Right to withdraw consent where applicable",
      ],
    },
    {
      id: "7",
      title: "7. Data Retention",
      content:
        "We retain personal and campaign information as long as we have a legitimate business need. When no longer needed, we will delete or anonymize it, or securely isolate it from further processing.",
    },
    {
      id: "8",
      title: "8. International Transfers",
      content:
        "Your information may be transferred to and processed in locations outside your jurisdiction where data protection laws may differ.",
    },
    {
      id: "9",
      title: "9. Children's Privacy",
      content:
        "Our SEO and digital marketing services are intended for business use and are not directed at individuals under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.",
    },
    {
      id: "10",
      title: "10. Policy Updates",
      content:
        'We may update this Privacy Policy periodically to reflect changes in our digital marketing services or legal requirements. We will notify you of significant changes by posting the updated policy on this page and updating the "Last updated" date.',
    },
  ],
  contact: {
    sectionTitle: "11. Contact Us",
    intro:
      "If you have questions about this Privacy Policy or how we handle your data in relation to our SEO and digital marketing services, please contact us:",
    details: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      address: contactInfo.address,
      companyName: contactInfo.companyName,
    },
  },
};
