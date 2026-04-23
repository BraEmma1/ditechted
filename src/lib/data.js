import { 
  Bot, 
  MonitorSmartphone, 
  CloudCog, 
  LineChart, 
  Code2, 
  Workflow, 
  MessageSquareText, 
  TrendingUp,
  Activity,
  Network,
  Fingerprint,
  Globe,
  Database,
  ShieldCheck
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'ai-agents',
    title: 'AI Agent Systems',
    shortDescription: 'Deploy AI agents for support, lead handling, internal operations, and customer workflows.',
    description: 'Deploy intelligent AI agents that handle support, lead qualification, scheduling, operations, and internal workflows.',
    icon: Bot,
    link: '/services#ai-agents',
    deliverables: [
      "AI support agents",
      "Lead qualification bots",
      "Appointment booking agents",
      "Internal workflow assistants",
      "CRM-connected AI systems"
    ],
    benefit: "Reduce workload, improve speed, and increase efficiency."
  },
  {
    id: 'saas-dev',
    title: 'Custom SaaS Development',
    shortDescription: 'Build scalable platforms, dashboards, portals, and web software tailored to your business model.',
    description: 'We design and build scalable software platforms tailored to your business model.',
    icon: Code2,
    link: '/services#saas-dev',
    deliverables: [
      "SaaS products",
      "Dashboards",
      "Client portals",
      "Admin systems",
      "Subscription platforms",
      "Internal tools"
    ],
    benefit: "Launch faster and scale with confidence."
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Consulting',
    shortDescription: 'Replace repetitive manual tasks with streamlined AI-powered workflows that save time and reduce costs.',
    description: 'We identify repetitive processes and replace them with intelligent automation systems.',
    icon: Workflow,
    link: '/services#ai-automation',
    deliverables: [
      "Workflow mapping",
      "Process automation strategy",
      "AI tool integration",
      "Productivity systems",
      "Cost-saving automation plans"
    ],
    benefit: "Save time, reduce overhead, improve output."
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot Development',
    shortDescription: 'Custom AI chatbots for websites, WhatsApp, customer service, bookings, and sales.',
    description: 'Custom chatbots for websites, WhatsApp, sales, customer support, and operations.',
    icon: MessageSquareText,
    link: '/services#chatbot',
    deliverables: [
      "Website chatbots",
      "WhatsApp bots",
      "FAQ bots",
      "Lead capture bots",
      "Customer support assistants"
    ],
    benefit: "24/7 engagement and faster customer response."
  },
  {
    id: 'web-design',
    title: 'Website Design & Development',
    shortDescription: 'Modern websites designed for trust, speed, conversions, and long-term growth.',
    description: 'Modern websites built for credibility, conversions, and growth.',
    icon: MonitorSmartphone,
    link: '/services#web-design',
    deliverables: [
      "Corporate websites",
      "Landing pages",
      "eCommerce websites",
      "Booking systems",
      "SEO-ready builds",
      "Conversion optimization"
    ],
    benefit: "Turn traffic into qualified leads and customers."
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Social media management, Meta ads, Google ads, and persuasive copywriting that drives results.',
    description: 'Growth campaigns powered by strategy, data, and compelling messaging.',
    icon: TrendingUp,
    link: '/services#digital-marketing',
    deliverables: [
      "Social media management",
      "Google Ads",
      "Meta Ads",
      "Funnel strategy",
      "Copywriting",
      "Lead generation campaigns"
    ],
    benefit: "Increase visibility, traffic, and revenue."
  }
];

export const PROJECT_CATEGORIES = [
  "All Projects",
  "AI Systems",
  "SaaS Platforms",
  "Websites",
  "Automation",
  "Marketing Growth"
];

export const PROJECTS = [
  {
    id: 1,
    title: "SalesFlow AI Assistant",
    summary: "AI lead qualification and response system that increased conversion speed and automated inquiries.",
    results: ["+40% Lead Conversion", "24/7 Automated Responses", "15hrs/week Saved"],
    techStack: ["OpenAI", "Node.js", "WhatsApp API", "CRM Integration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "AI Systems",
    secondaryCategory: "Automation",
    link: "/case-studies/salesflow",
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    icon: Activity,
    accent: '#00C7FC'
  },
  {
    id: 2,
    title: "EduCore SaaS Platform",
    summary: "Cloud-based management platform for schools with dashboards, automation, and reporting.",
    results: ["10,000+ Active Users", "-30% Admin Time", "Zero Downtime Launch"],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "SaaS Platforms",
    link: "/case-studies/educore",
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
    icon: Network,
    accent: '#34d399'
  },
  {
    id: 3,
    title: "RetailBoost Growth Funnel",
    summary: "Paid ad campaigns, landing pages, and conversion copy that increased monthly revenue.",
    results: ["3.2x ROAS", "+65% Monthly Revenue", "-20% Cost Per Lead"],
    techStack: ["Meta Ads", "Google Ads", "Funnel Analytics", "Copywriting"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    ctaText: "View Case Study",
    category: "Marketing Growth",
    link: "/case-studies/retailboost",
    bgGradient: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)',
    icon: Fingerprint,
    accent: '#a78bfa'
  },
  {
    id: 4,
    title: "SupportBot Pro",
    summary: "AI chatbot built for website and WhatsApp support with 24/7 automated engagement.",
    results: ["2min Avg Response Time", "85% Queries Resolved", "Seamless CRM Sync"],
    techStack: ["GPT API", "Dialogflow", "WhatsApp API", "Webhooks"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "AI Systems",
    link: "/case-studies/supportbot",
    bgGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    icon: Activity,
    accent: '#0ea5e9'
  },
  {
    id: 5,
    title: "Prestige Corporate Website",
    summary: "Premium business website redesign built to improve trust and lead generation.",
    results: ["+120% Organic Traffic", "45% Lower Bounce Rate", "Page Speed < 1.5s"],
    techStack: ["WordPress", "Elementor", "SEO", "CRO"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "Websites",
    link: "/case-studies/prestige",
    bgGradient: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
    icon: Globe,
    accent: '#38bdf8'
  },
  {
    id: 6,
    title: "OpsFlow Automation System",
    summary: "Business workflow automation system that reduced repetitive tasks and improved speed.",
    results: ["20+ Workflows Automated", "$5k/month Saved", "Zero Human Error"],
    techStack: ["Zapier", "Make", "Airtable", "OpenAI"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "Automation",
    link: "/case-studies/opsflow",
    bgGradient: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
    icon: Database,
    accent: '#818cf8'
  }
];

