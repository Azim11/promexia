// data/terms.js

import contactInfo from "./contactInfo";

export const termsData = {
  meta: {
    title: "Terms & Conditions",
    lastUpdated: "August 2026",
  },
  intro: `By accessing and using the services provided by ${contactInfo.companyNameShort}, you accept and agree to be bound by the terms and provisions of this agreement.`,
  sections: [
    {
      id: "1",
      title: "1. Acceptance of Terms",
      content:
        "These terms apply to all visitors, clients, and partners who access or use our services. If you do not agree to abide by the above, please do not use our services. We reserve the right to change these terms at any time by posting updates on this page.",
    },
    {
      id: "2",
      title: "2. Service Description",
      content: `${contactInfo.companyNameShort} provides professional SEO and digital marketing solutions including but not limited to:`,
      list: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising & Management",
        "Content Marketing & Copywriting",
        "Social Media Marketing (SMM)",
        "Conversion Rate Optimization (CRO)",
        "SEO-Optimized Web Design",
        "Digital Marketing Audits & Strategy Consulting",
      ],
    },
    {
      id: "3",
      title: "3. Client Responsibilities",
      content: "Clients are responsible for:",
      list: [
        "Providing accurate website access, analytics permissions, and materials necessary for campaign delivery",
        "Timely payment of all retainer fees and third-party ad spend",
        "Providing feedback and approvals within agreed campaign timeframes",
        "Maintaining confidentiality of login credentials and account access",
        "Ensuring all business content complies with applicable advertising regulations",
      ],
    },
    {
      id: "4",
      title: "4. Payment Terms",
      content:
        "Our payment structure is designed to be transparent and predictable:",
      list: [
        "Monthly marketing services are billed in advance on the same date each month",
        "Payment is due within 15 days of invoice date",
        "Late payments may incur additional administrative fees",
        "Campaign execution may be paused for non-payment",
        "All fees are non-refundable unless explicitly specified in the Refund Policy",
      ],
    },
    {
      id: "5",
      title: "5. Intellectual Property",
      content:
        "We respect your brand ownership while protecting our marketing methodologies:",
      list: [
        "Client retains full ownership of their brand, domain, and proprietary content",
        `${contactInfo.companyNameShort} retains ownership of custom frameworks, auditing tools, and strategy templates`,
        "Marketing assets created specifically for clients become client property upon full payment",
        "Neither party may use the other's trademarks without written consent",
      ],
    },
    {
      id: "6",
      title: "6. Confidentiality",
      content: "Both parties agree to maintain confidentiality of:",
      list: [
        "Business strategies, target keyword lists, and campaign metrics",
        "Customer data and subscriber information",
        "Financial metrics, ad spend figures, and conversion data",
        "Proprietary marketing workflows and methodologies",
        "Any information marked as confidential",
      ],
    },
    {
      id: "7",
      title: "7. Limitation of Liability",
      content: `${contactInfo.companyNameShort} liability is limited as follows:`,
      list: [
        "Total liability shall not exceed the amount paid for agency services in the preceding 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "We do not guarantee specific search engine ranks or exact conversion numbers as search algorithms vary independently",
        "Client assumes responsibility for business decisions based on marketing recommendations",
      ],
    },
    {
      id: "8",
      title: "8. Termination",
      content: "Either party may terminate the agreement:",
      list: [
        "With 30 days written notice for convenience",
        "Immediately for material breach of contract",
        "Immediately for non-payment after notice period",
      ],
      footer:
        "Upon termination, all completed campaign reports and assets will be delivered, and final balances will be due within 15 days.",
    },
    {
      id: "9",
      title: "9. Governing Law",
      content:
        "These terms are governed by the laws of the State of Florida, United States. Any legal action must be brought in the courts of Florida.",
    },
  ],
  contact: {
    title: "Questions about our Terms?",
    description:
      "If you need clarification on how these terms apply to your digital marketing agreement, please don't hesitate to contact us.",
    email: contactInfo.email,
    phone: contactInfo.phone,
    address: contactInfo.address,
  },
};
