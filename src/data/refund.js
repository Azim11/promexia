// data/refund.js

import contactInfo from "./contactInfo";

export const refundData = {
  meta: {
    title: "Refund Policy",
    lastUpdated: "August 2026",
  },
  intro: `At ${contactInfo.companyNameShort}, we are committed to delivering exceptional quality SEO and digital marketing solutions while ensuring client satisfaction. Our refund policy is designed to be fair and transparent while recognizing the specialized nature of search engine optimization, pay-per-click ad management, and digital marketing strategies.`,
  importantNotice:
    "Important: Due to the specialized nature of search engine optimization, paid advertising campaigns, and digital marketing services — which involve continuous market research, strategy, ad spend, content creation, and search indexing — refunds are evaluated on a case-by-case basis and are subject to the conditions outlined below.",
  sections: [
    {
      id: "1",
      title: "1. General Refund Framework",
      content:
        "We strive to be transparent partners. Our policies reflect the irrevocable nature of strategist time, creative assets, ad deployment, and intellectual property while safeguarding client investments.",
    },
    {
      id: "2",
      title: "2. Monthly Marketing Plans",
      content: "For monthly recurring SEO and digital marketing campaign subscriptions:",
      list: [
        {
          label: "First Month Satisfaction Guarantee",
          text: "If you are not satisfied with our initial strategy work within the first 30 days, you may request a review for a refund of the current month's agency retainer fee.",
        },
        {
          label: "Service Cancellation",
          text: "You may cancel your monthly marketing subscription at any time with 30 days written notice.",
        },
        {
          label: "No Partial Refunds",
          text: "We do not provide partial refunds for unused portions of an ongoing billing cycle.",
        },
        {
          label: "Deliverables Handover",
          text: "Any SEO audit reports, graphics, or content created during the active billing period will be delivered regardless of cancellation.",
        },
      ],
    },
    {
      id: "3",
      title: "3. Annual Campaign Plans",
      content: "For annual prepaid digital marketing & SEO subscriptions:",
      list: [
        {
          label: "60-Day Guarantee",
          text: "If you are not satisfied within the first 60 days, you may request a prorated refund for the unused service months.",
        },
        {
          label: "After 60 Days",
          text: "No refunds are available after the initial 60-day period.",
        },
      ],
    },
    {
      id: "4",
      title: "4. Setup Fees and One-Time Audits",
      list: [
        {
          label: "Audit & Strategy Fees",
          text: "Non-refundable once research work and report creation have commenced.",
        },
        {
          label: "Project-Based Campaign Work",
          text: "Refunds considered only if we fail to deliver the agreed-upon digital marketing campaign scope.",
        },
        {
          label: "Completed Campaign Work",
          text: "No refunds for campaign work, content, or ad setups that have been completed and delivered.",
        },
      ],
    },
    {
      id: "5",
      title: "5. Ad Spend & Third-Party Costs",
      content: "For third-party expenses and ad media spend:",
      list: [
        {
          label: "Direct Ad Platform Spend",
          text: "Funds remitted directly to search engines (Google Ads) or social networks (Meta/LinkedIn Ads) are non-refundable.",
        },
        {
          label: "Third-Party Tools & Licenses",
          text: "Fees for third-party SEO tools, keyword tracking software, or premium stock assets are subject to the respective vendor's policies.",
        },
      ],
    },
    {
      id: "6",
      title: "6. Refund Exclusions",
      content: "Refunds will NOT be provided in the following situations:",
      simpleList: [
        "Failure to provide necessary website access, ad account permissions, or timely approvals",
        "Changes in client business direction after campaign setup has commenced",
        "Third-party search engine algorithm changes or platform policy updates outside our control",
        "Violation of our Service Terms",
        "Marketing deliverables already completed, published, or accepted",
      ],
    },
    {
      id: "7",
      title: "7. Refund Request Process",
      simpleList: [
        `Contact us in writing at ${contactInfo.email}`,
        "Include your business name, project details, and reason for the refund request",
        "Allow 5-10 business days for our management team to review and respond",
        "If approved, refunds will be processed within 10-15 business days to the original payment method",
      ],
    },
  ],
  contact: {
    title: "Need Assistance?",
    description:
      "Before requesting a refund, please contact us to discuss your campaign performance. Our team is dedicated to optimizing strategies and ensuring your total satisfaction.",
    email: contactInfo.email,
    phone: contactInfo.phone,
    address: contactInfo.address,
    hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
  },
};
