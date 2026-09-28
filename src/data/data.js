import {
  BarChart2,
  Lightbulb,
  Shield,
  Flag,
  MapPin,
  Mail,
  Phone,
  Package,
  Award,
  Search,
  Rocket,
  Zap,
  Monitor,
  Layers,
  Target,
  TrendingUp,
  User,
  Users,
  Building2,
  MessageCircle,
  Share2,
  Globe,
  Megaphone,
} from "lucide-react";
import contactInfo from "./contactInfo";

export const data = {
  company: {
    name: contactInfo.companyName,
    tagline: contactInfo.tagline,
    description: contactInfo.description,
  },
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact-us" },
  ],
  services: [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search engine rankings with comprehensive technical SEO audits, high-intent keyword strategy, quality link building, and on-page optimization.",
      icon: Search,
      features: [
        "Technical & On-Page SEO Audits",
        "High-Intent Keyword Research",
        "Authority Link Building",
        "Rank Tracking & Analytics",
      ],
    },
    {
      id: 2,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Accelerate customer acquisition with laser-targeted Google Ads, Meta Ad campaigns, retargeting funnels, and continuous ROAS optimization.",
      icon: TrendingUp,
      features: [
        "Google Search & Shopping Ads",
        "Meta & Retargeting Campaigns",
        "A/B Split Testing & Copywriting",
        "Conversion Funnel Optimization",
      ],
    },
    {
      id: 3,
      title: "Content Marketing & Strategy",
      description:
        "Publish high-authority, SEO-driven content that educates prospects, boosts search engine rankings, and converts passive readers into loyal clients.",
      icon: Megaphone,
      features: [
        "SEO Article & Blog Creation",
        "Content Calendar Planning",
        "E-books & Lead Magnet Copy",
        "Brand Messaging & Storytelling",
      ],
    },
    {
      id: 4,
      title: "Social Media Marketing (SMM)",
      description:
        "Build a vibrant brand presence across major social channels with tailored visual assets, viral video strategy, and active community management.",
      icon: Share2,
      features: [
        "Omnichannel Content Strategy",
        "Audience Growth & Engagement",
        "Influencer & Outreach Campaigns",
        "Monthly Growth Analytics",
      ],
    },
    {
      id: 5,
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Turn more website traffic into paying customers through user behavior analytics, heatmap tracking, frictionless checkout flows, and landing page testing.",
      icon: Target,
      features: [
        "Heatmap & Session Analysis",
        "Landing Page Split Testing",
        "Form & Funnel Optimization",
        "Lead Capture Enhancements",
      ],
    },
    {
      id: 6,
      title: "SEO-Optimized Web Design",
      description:
        "Combine breathtaking modern aesthetics with high-speed performance, mobile responsiveness, and clean code built from the ground up for SEO dominance.",
      icon: Globe,
      features: [
        "Mobile-First Responsive Design",
        "Blistering Loading Speeds",
        "Schema Markup & Structure",
        "High-Converting UI/UX Layouts",
      ],
    },
  ],
  whyUs: [
    {
      icon: TrendingUp,
      title: "Proven Organic Growth",
      description:
        "Over a decade of delivering top-tier Google rankings, driving sustainable organic traffic, and multiplying lead generation for client brands.",
    },
    {
      icon: Target,
      title: "Data-Driven Precision",
      description:
        "Every keyword strategy, ad budget, and campaign optimization is backed by empirical analytics and real-time market data.",
    },
    {
      icon: Award,
      title: "Certified Digital Marketers",
      description:
        "A hand-picked team of SEO strategists, Google Ads specialists, and copywriters committed to measurable business growth.",
    },
    {
      icon: Search,
      title: "Algorithm-Proof Tactics",
      description:
        "We employ strictly white-hat SEO strategies that protect your domain authority and adapt seamlessly to Google algorithm updates.",
    },
    {
      icon: Shield,
      title: "Full Transparency & ROI",
      description:
        "Live keyword tracking dashboards, detailed monthly reports, and clear attribution models so you see every dollar at work.",
    },
    {
      icon: Zap,
      title: "Rapid Execution & Scaling",
      description:
        "Agile campaign launches and continuous testing cycles ensure your brand scales faster than competitors in your market.",
    },
  ],

  featuredServices: [
    {
      category: "Search Engine Optimization",
      title: "Dominate Search Rankings & Drive Organic Traffic",
      description:
        "Our end-to-end SEO strategy combines deep technical audits, semantic keyword research, content optimization, and high-authority backlink building to secure sustained top-3 rankings on Google.",
      benefits: [
        {
          title: "Technical & Structural SEO",
          description:
            "Clean XML sitemaps, structured schema data, fast crawl rates, and 100/100 Core Web Vitals performance.",
        },
        {
          title: "High-Intent Keyword Dominance",
          description:
            "Target buyer-intent queries that drive ready-to-buy prospects straight to your core services.",
        },
        {
          title: "Authority Link Building",
          description:
            "Secure contextual, high-DR backlinks that establish your domain as an industry powerhouse.",
        },
      ],
      stat: { value: "350%+", label: "Avg. Organic Traffic Increase" },
    },
    {
      category: "Paid Performance Marketing",
      title: "Scale Revenue with Precision PPC & Social Campaigns",
      description:
        "Maximize return on ad spend (ROAS) across Google Search, Shopping, Meta, and LinkedIn with data-backed ad copy, hyper-targeted audience segments, and relentless conversion optimization.",
      benefits: [
        {
          title: "High-ROAS Bidding Models",
          description:
            "Automated & manual bid management engineered to lower acquisition costs while maximizing lead volume.",
        },
        {
          title: "Compelling Ad Creative & Copy",
          description:
            "High-converting visual banners and persuasive copy designed to stop the scroll and click.",
        },
        {
          title: "Multi-Touch Retargeting",
          description:
            "Re-engage site visitors across web and social channels to capture high-value conversions.",
        },
      ],
      stat: { value: "4.8x", label: "Average Campaign ROAS" },
    },
  ],

  process: [
    {
      icon: Search,
      title: "1. Comprehensive Audit",
      description:
        "We dissect your search engine presence, competitor rankings, backlink profile, and ad channels to identify core growth opportunities.",
    },
    {
      icon: Lightbulb,
      title: "2. Strategic Campaign Blueprint",
      description:
        "Develop a tailored SEO & digital marketing roadmap complete with target keyword maps, ad budget allocations, and conversion goals.",
    },
    {
      icon: Rocket,
      title: "3. Multi-Channel Execution",
      description:
        "Our team launches targeted campaigns, optimizes technical SEO infrastructure, publishes authority content, and deploys high-converting ad copy.",
    },
    {
      icon: BarChart2,
      title: "4. Analytics & Scaling",
      description:
        "We continuously monitor keyword positions, cost per lead, and conversions, scaling winning campaigns for exponential business growth.",
    },
  ],

  testimonials: [
    {
      quote: `${contactInfo.companyNameShort} transformed our organic visibility. Within 4 months, our target commercial keywords hit the top 3 on Google, resulting in a 310% increase in inbound leads!`,
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "CareConnect Health",
      avatar: "/avatars/avatar_1.png",
    },
    {
      quote: `Working with ${contactInfo.companyNameShort} has been game-changing. Their PPC ad campaigns achieved a 5.2x ROAS in the first quarter, lowering our customer acquisition cost drastically.`,
      author: "Michael Chen",
      position: "Growth Lead",
      company: "HomeServe Platform",
      avatar: "/avatars/avatar_2.png",
    },
    {
      quote: `Their SEO audit and technical content strategy drove an unprecedented surge in organic traffic. We’ve seen steady month-over-month revenue growth ever since partnering with them.`,
      author: "Emily Rodriguez",
      position: "Founder",
      company: "The Marketing Co Store",
      avatar: "/avatars/avatar_3.png",
    },
    {
      quote: `Transparent reporting, stellar communication, and unmatched SEO expertise. ${contactInfo.companyNameShort} delivered on every promise and elevated our brand authority nationwide.`,
      author: "David Park",
      position: "VP of Digital Strategy",
      company: "FinanceHub",
      avatar: "/avatars/avatar_4.png",
    },
  ],
  footer: {
    quickLinks: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Refund Policy", path: "/refund-policy" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  },
  about: {
    hero: {
      title: "Dominating Search Engine Results & Scaling Brands",
      subtitle: `About ${contactInfo.companyNameShort}`,
      description:
        "Founded on the commitment to deliver measurable ROI, we combine data science, search engine mastery, and creative marketing strategies to elevate commercial brands worldwide.",
    },
    identity: [
      {
        title: "Who We Are",
        description:
          "A team of data-driven SEO strategists, growth marketers, copywriters, and search engine specialists passionate about organic dominance.",
        icon: Users,
      },
      {
        title: "Who We Serve",
        description:
          "E-commerce brands, service providers, startups, and enterprises seeking high-converting search visibility and qualified leads.",
        icon: Target,
      },
      {
        title: "What We Deliver",
        description:
          "Top search engine rankings, qualified inbound lead funnels, high-ROAS ad campaigns, and transparent growth analytics.",
        icon: Package,
      },
      {
        title: "Our Mission",
        description:
          "To empower ambitious businesses with ethical, high-impact SEO and digital marketing strategies that maximize commercial growth.",
        icon: Flag,
      },
    ],
    narrative: [
      {
        title: "Our Story",
        content:
          " began with a dedicated mission: to cut through digital clutter and bring measurable, algorithm-backed marketing strategies to commercial brands. We saw companies struggling with low search visibility and wasted ad spend. Today, we engineer data-driven marketing campaigns that yield guaranteed market impact.",
      },
      {
        title: "Our Vision",
        content:
          "We envision a digital landscape where every brand can dominate its target search keywords, connect authentically with ready-to-buy audiences, and achieve sustainable organic growth.",
      },
      {
        title: "Our Goal",
        content:
          "To scale over 1,000 commercial brands through top-ranking SEO ecosystems and high-converting marketing campaigns by 2030.",
      },
    ],
    leadership: {
      name: contactInfo.contactPerson,
      position: "Founder & Strategic Marketing Director",
      bio: `With extensive expertise in marketing strategy, social media content creation, and influencer growth modeling, ${contactInfo.contactPerson} has scaled online marketing campaigns for brands across e-commerce, digital marketplaces, and global enterprise sectors.`,
      image: "",
      contact: {
        email: contactInfo.email,
        phone: contactInfo.phone,
      },
    },
  },
  contactPage: {
    header: {
      title: "Contact Us",
      breadcrumb: "Contact",
    },
    section: {
      subtitle: "Get in Touch",
      title: "Let's Scale Your Digital Presence",
      description:
        `Ready to elevate your brand presence and boost your growth funnel? Connect with the ${contactInfo.companyNameShort} growth strategists today.`,
    },
    info: [
      {
        id: 1,
        title: "Company Name",
        value: contactInfo.companyName,
        subtext: contactInfo.businessEntityType,
        icon: Building2,
        link: "#",
      },
      {
        id: 2,
        title: "Contact Person",
        value: contactInfo.contactPerson,
        subtext: contactInfo.contactPersonRole,
        icon: User,
        link: "#",
      },
      {
        id: 3,
        title: "Contact Email",
        value: contactInfo.email,
        subtext: "Primary email contact",
        icon: Mail,
        link: `mailto:${contactInfo.email}`,
      },
      {
        id: 7,
        title: "Support Email",
        value: contactInfo.supportEmail,
        subtext: "Campaign & Client Support",
        icon: Mail,
        link: `mailto:${contactInfo.supportEmail}`,
      },
      {
        id: 4,
        title: "Call us",
        value: contactInfo.phone,
        subtext: "Mon-Fri from 9am to 6pm EST",
        icon: Phone,
        link: `tel:${contactInfo.phone}`,
      },
      {
        id: 5,
        title: "Visit us",
        value: contactInfo.address,
        subtext: "",
        icon: MapPin,
        link: "#map",
      },
      {
        id: 6,
        title: "WhatsApp",
        value: "Message us on WhatsApp",
        subtext: "Instant marketing consultation",
        icon: MessageCircle,
        link: contactInfo.social.whatsapp,
      },
    ],
  },
  servicePage: {
    header: {
      title: "Services",
      breadcrumb: "Services",
    },
  },
  pricing: {
    header: {
      subtitle: "Predictable Pricing, Exceptional ROI",
      title: "Transparent Packages for Organic & Paid Growth",
      description:
        "Select the ideal SEO and digital marketing plan tailored to drive target organic traffic, expand lead funnels, and boost conversions.",
    },

    tiers: [
      {
        id: 1,
        name: "Local & Organic SEO",
        price: "800",
        period: "",
        description:
          "Ideal for small businesses and growing brands seeking to dominate local search rankings and build organic search authority.",
        isPopular: false,
        buttonText: "Launch SEO Campaign",
        features: [
          "Complete Technical SEO Audit",
          "Target Keyword Strategy (Up to 15 Keywords)",
          "On-Page Optimization & Schema Data",
          "Google Business Profile Optimization",
          "Monthly Rank & Traffic Reporting",
          "High-Quality Content Recommendations",
          "1 Month Direct Strategist Support",
        ],
      },

      {
        id: 2,
        name: "Growth Marketing & PPC",
        price: "2,500",
        period: "",
        description:
          "Comprehensive marketing engine featuring aggressive SEO ranking strategy paired with targeted PPC & social ad management.",
        isPopular: true,
        buttonText: "Scale My Business",
        features: [
          "Everything in Local & Organic SEO",
          "Advanced SEO Strategy (Up to 40 Keywords)",
          "Google Ads & Meta Ads Campaign Setup",
          "Ad Copywriting & Creative Design",
          "Conversion Rate Optimization (CRO)",
          "High-Authority Backlink Building",
          "Priority 24/7 Campaign Management",
        ],
      },

      {
        id: 3,
        name: "Enterprise Omnichannel",
        price: "Custom",
        period: "",
        description:
          "Full-scale digital marketing agency execution for enterprise brands requiring nationwide SEO dominance and multi-channel campaigns.",
        isPopular: false,
        buttonText: "Speak to Lead Strategist",
        features: [
          "Dedicated Senior Marketing Strategist",
          "Unlimited Keyword Optimization Scope",
          "Omnichannel Paid Ads (Google, Meta, LinkedIn)",
          "Custom Content Marketing & PR Outreach",
          "Funnel Heatmap & Behavior Tracking",
          "Weekly Growth Review Calls",
          "Custom SLA & Dedicated Support Manager",
        ],
      },
    ],
  },
};
