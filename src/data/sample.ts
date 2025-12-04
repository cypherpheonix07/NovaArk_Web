import {
  ShoppingCart,
  BookOpen,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Camera,
  Music,
  Briefcase,
  Database,
  Lock,
  Cloud,
  GitBranch,
  Cpu,
  Shield,
  Palette,
  Code2,
  Workflow,
  CreditCard,
  Mail,
  Bell,
  Github,
  Figma,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";

export const templates = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Complete online store with cart, payments, and admin panel",
    icon: ShoppingCart,
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "Business",
    complexity: "Advanced",
    deployTime: "3 min",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
  },
  {
    id: 2,
    name: "Learning Management System",
    description: "Educational platform with courses, quizzes, and progress tracking",
    icon: BookOpen,
    tech: ["Next.js", "Prisma", "Auth0", "AWS S3"],
    category: "Education",
    complexity: "Advanced",
    deployTime: "4 min",
    features: ["Video Streaming", "Quiz Engine", "Progress Tracking", "Certificates"],
  },
  {
    id: 3,
    name: "Social Media Dashboard",
    description: "Community platform with posts, comments, and real-time chat",
    icon: Users,
    tech: ["React", "Socket.io", "Redis", "MongoDB"],
    category: "Social",
    complexity: "Intermediate",
    deployTime: "2 min",
    features: ["Real-time Chat", "Media Upload", "Push Notifications", "User Profiles"],
  },
  {
    id: 4,
    name: "Project Management Tool",
    description: "Team collaboration with tasks, kanban boards, and time tracking",
    icon: Calendar,
    tech: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    category: "Productivity",
    complexity: "Intermediate",
    deployTime: "3 min",
    features: ["Kanban Boards", "Time Tracking", "Team Collaboration", "Reporting"],
  },
  {
    id: 5,
    name: "Customer Support Portal",
    description: "Help desk with ticketing system and knowledge base",
    icon: MessageSquare,
    tech: ["React", "FastAPI", "Elasticsearch", "PostgreSQL"],
    category: "Business",
    complexity: "Advanced",
    deployTime: "3 min",
    features: ["Ticket System", "Knowledge Base", "Live Chat", "Analytics"],
  },
  {
    id: 6,
    name: "Analytics Dashboard",
    description: "Business intelligence with charts, reports, and data visualization",
    icon: BarChart3,
    tech: ["React", "D3.js", "Python", "ClickHouse"],
    category: "Analytics",
    complexity: "Advanced",
    deployTime: "4 min",
    features: ["Real-time Charts", "Custom Reports", "Data Export", "Alerts"],
  },
  {
    id: 7,
    name: "Portfolio Website",
    description: "Professional showcase with blog, gallery, and contact forms",
    icon: Camera,
    tech: ["Gatsby", "Contentful", "Netlify", "GraphQL"],
    category: "Personal",
    complexity: "Beginner",
    deployTime: "1 min",
    features: ["Blog System", "Image Gallery", "Contact Forms", "SEO Optimized"],
  },
  {
    id: 8,
    name: "Music Streaming App",
    description: "Audio platform with playlists, recommendations, and social features",
    icon: Music,
    tech: ["React Native", "Node.js", "AWS S3", "Redis"],
    category: "Entertainment",
    complexity: "Advanced",
    deployTime: "5 min",
    features: ["Audio Streaming", "Playlists", "Recommendations", "Social Features"],
  },
  {
    id: 9,
    name: "Job Board Platform",
    description: "Recruitment site with job listings, applications, and employer tools",
    icon: Briefcase,
    tech: ["Next.js", "Supabase", "Stripe", "Algolia"],
    category: "Business",
    complexity: "Intermediate",
    deployTime: "3 min",
    features: ["Job Search", "Application Tracking", "Employer Dashboard", "Payments"],
  },
] as const;

export const templateCategories = [
  "All",
  "Business",
  "Education",
  "Social",
  "Productivity",
  "Analytics",
  "Personal",
  "Entertainment",
] as const;

export const templateComplexities = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

export const features = [
  {
    category: "AI-Powered Generation",
    items: [
      { icon: Code2, title: "Smart Code Generation", description: "Advanced AI analyzes your input and generates optimized, production-ready code", badge: "GPT-4" },
      { icon: Palette, title: "Design System Auto-Creation", description: "Automatically generates consistent design tokens, components, and styling", badge: "New" },
      { icon: Workflow, title: "Architecture Planning", description: "AI suggests optimal tech stack and project structure based on requirements", badge: "Beta" },
    ],
  },
  {
    category: "Full-Stack Infrastructure",
    items: [
      { icon: Database, title: "Auto Database Design", description: "Generate optimized database schemas with relationships and migrations", badge: "SQL/NoSQL" },
      { icon: Lock, title: "Built-in Authentication", description: "Complete auth system with JWT, OAuth, and role-based access control", badge: "Secure" },
      { icon: Cloud, title: "Serverless Functions", description: "Auto-generated API endpoints with proper validation and error handling", badge: "Scalable" },
    ],
  },
  {
    category: "Developer Experience",
    items: [
      { icon: GitBranch, title: "Version Control Ready", description: "Git integration with proper branching strategy and CI/CD pipelines", badge: "DevOps" },
      { icon: Cpu, title: "Performance Optimized", description: "Built-in caching, lazy loading, and performance monitoring", badge: "Fast" },
      { icon: Shield, title: "Security First", description: "OWASP compliance, input validation, and vulnerability scanning", badge: "Hardened" },
    ],
  },
  {
    category: "Deployment & Scaling",
    items: [
      { icon: Globe, title: "Multi-Platform Deploy", description: "Deploy to Vercel, Netlify, AWS, or any cloud provider with one click", badge: "Global" },
      { icon: Smartphone, title: "Mobile Responsive", description: "Progressive Web App with mobile-first design and offline capabilities", badge: "PWA" },
      { icon: Zap, title: "Auto-Scaling", description: "Containerized deployment with automatic scaling and load balancing", badge: "Docker" },
    ],
  },
] as const;

export const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Templates", href: "/templates" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Blog", href: "/blog" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Partners", href: "/partners" },
      { name: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Compliance", href: "/compliance" },
      { name: "Licenses", href: "/licenses" },
    ],
  },
] as const;

export const integrations = [
  {
    id: 1,
    name: "Stripe",
    description: "Complete payment processing with subscriptions and invoicing",
    icon: CreditCard,
    category: "Payments",
    status: "Popular",
    setupTime: "2 min",
    features: ["Payment Forms", "Subscription Management", "Invoicing", "Analytics"],
    connected: true,
  },
  {
    id: 2,
    name: "SendGrid",
    description: "Reliable email delivery and marketing automation",
    icon: Mail,
    category: "Communication",
    status: "Verified",
    setupTime: "1 min",
    features: ["Transactional Email", "Marketing Campaigns", "Templates", "Analytics"],
    connected: false,
  },
  {
    id: 3,
    name: "PostgreSQL",
    description: "Advanced relational database with JSON support",
    icon: Database,
    category: "Database",
    status: "Essential",
    setupTime: "30 sec",
    features: ["ACID Compliance", "JSON Support", "Full-text Search", "Replication"],
    connected: true,
  },
  {
    id: 4,
    name: "Auth0",
    description: "Universal authentication and authorization platform",
    icon: Lock,
    category: "Authentication",
    status: "Secure",
    setupTime: "3 min",
    features: ["SSO", "MFA", "Social Login", "Enterprise Ready"],
    connected: false,
  },
  {
    id: 5,
    name: "Cloudinary",
    description: "Image and video management with automatic optimization",
    icon: Camera,
    category: "Media",
    status: "Popular",
    setupTime: "1 min",
    features: ["Auto Optimization", "Transformations", "CDN", "AI Tagging"],
    connected: false,
  },
  {
    id: 6,
    name: "Pusher",
    description: "Real-time messaging and live updates",
    icon: MessageSquare,
    category: "Real-time",
    status: "Fast",
    setupTime: "1 min",
    features: ["WebSockets", "Presence", "Push Notifications", "Analytics"],
    connected: true,
  },
  {
    id: 7,
    name: "Google Analytics",
    description: "Comprehensive web analytics and user insights",
    icon: BarChart3,
    category: "Analytics",
    status: "Popular",
    setupTime: "1 min",
    features: ["User Tracking", "Conversion Goals", "Real-time Data", "Custom Reports"],
    connected: false,
  },
  {
    id: 8,
    name: "AWS S3",
    description: "Scalable object storage for any type of data",
    icon: Cloud,
    category: "Storage",
    status: "Reliable",
    setupTime: "2 min",
    features: ["99.9% Uptime", "Global CDN", "Versioning", "Lifecycle Policies"],
    connected: true,
  },
  {
    id: 9,
    name: "GitHub",
    description: "Version control and collaborative development",
    icon: Github,
    category: "Development",
    status: "Essential",
    setupTime: "1 min",
    features: ["Git Repository", "CI/CD", "Issue Tracking", "Code Review"],
    connected: true,
  },
  {
    id: 10,
    name: "Figma",
    description: "Design-to-code with automatic component generation",
    icon: Figma,
    category: "Design",
    status: "New",
    setupTime: "30 sec",
    features: ["Auto Import", "Component Sync", "Design Tokens", "Asset Export"],
    connected: false,
  },
  {
    id: 11,
    name: "Twilio",
    description: "SMS, voice, and video communication APIs",
    icon: Smartphone,
    category: "Communication",
    status: "Verified",
    setupTime: "2 min",
    features: ["SMS API", "Voice Calls", "Video Chat", "Verification"],
    connected: false,
  },
  {
    id: 12,
    name: "OneSignal",
    description: "Push notifications across all platforms",
    icon: Bell,
    category: "Notifications",
    status: "Popular",
    setupTime: "1 min",
    features: ["Push Notifications", "In-App Messages", "Email", "SMS"],
    connected: false,
  },
] as const;

export const integrationCategories = [
  "All",
  "Payments",
  "Communication",
  "Database",
  "Authentication",
  "Media",
  "Real-time",
  "Analytics",
  "Storage",
  "Development",
  "Design",
  "Notifications",
] as const;

export const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Templates", path: "/templates" },
  { name: "Integrations", path: "/integrations" },
  { name: "Docs", path: "/docs" },
] as const;

export const ctaLinks = {
  create: { name: "New Project", path: "/create" },
} as const;

export const sectionRoutes = [
  { key: "features", path: "/features" },
  { key: "templates", path: "/templates" },
  { key: "integrations", path: "/integrations" },
  { key: "projects", path: "/projects" },
  { key: "settings", path: "/settings" },
  { key: "create", path: "/create" },
] as const;

export const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Modern shopping platform with React, Node.js, and PostgreSQL",
    status: "deployed",
    tech: ["React", "Node.js", "PostgreSQL"],
    lastModified: "2 hours ago",
    preview: "https://ecommerce-demo.example.com",
  },
  {
    id: 2,
    name: "Task Manager Pro",
    description: "Collaborative task management with real-time updates",
    status: "building",
    tech: ["Next.js", "Express", "MongoDB"],
    lastModified: "30 minutes ago",
    preview: null,
  },
  {
    id: 3,
    name: "Social Dashboard",
    description: "Analytics dashboard imported from Figma design",
    status: "ready",
    tech: ["React", "FastAPI", "PostgreSQL"],
    lastModified: "1 day ago",
    preview: "https://dashboard-demo.example.com",
  },
] as const;

export const referenceData = {
  entities: {
    Template: {
      fields: [
        { key: "id", type: "number" },
        { key: "name", type: "string" },
        { key: "description", type: "string" },
        { key: "icon", type: "ReactComponent" },
        { key: "tech", type: "string[]" },
        { key: "category", type: "string" },
        { key: "complexity", type: "string" },
        { key: "deployTime", type: "string" },
        { key: "features", type: "string[]" },
      ],
      sample: templates[0],
    },
    FeatureCategory: {
      fields: [
        { key: "category", type: "string" },
        { key: "items", type: "Array<FeatureItem>" },
      ],
      sample: features[0],
    },
    Integration: {
      fields: [
        { key: "id", type: "number" },
        { key: "name", type: "string" },
        { key: "description", type: "string" },
        { key: "icon", type: "ReactComponent" },
        { key: "category", type: "string" },
        { key: "status", type: "string" },
        { key: "setupTime", type: "string" },
        { key: "features", type: "string[]" },
        { key: "connected", type: "boolean" },
      ],
      sample: integrations[0],
    },
    Project: {
      fields: [
        { key: "id", type: "number" },
        { key: "name", type: "string" },
        { key: "description", type: "string" },
        { key: "status", type: "string" },
        { key: "tech", type: "string[]" },
        { key: "lastModified", type: "string" },
        { key: "preview", type: "string | null" },
      ],
      sample: projects[0],
    },
  },
  api: [
    {
      name: "List Templates",
      method: "GET",
      path: "/api/templates",
      sampleResponse: { templates },
    },
    {
      name: "List Features",
      method: "GET",
      path: "/api/features",
      sampleResponse: { features },
    },
    {
      name: "List Integrations",
      method: "GET",
      path: "/api/integrations",
      sampleResponse: { integrations },
    },
    {
      name: "List Projects",
      method: "GET",
      path: "/api/projects",
      sampleResponse: { projects },
    },
  ],
} as const;

export const pages = {
  "/pricing": {
    title: "Pricing",
    description: "Transparent pricing with simple tiers and generous free limits.",
    sections: [
      { heading: "Starter", bullets: ["Free", "Basic templates", "Community support"] },
      { heading: "Pro", bullets: ["$19/mo", "Unlimited projects", "Priority support"] },
      { heading: "Enterprise", bullets: ["Custom", "SSO & RBAC", "Dedicated success"] },
    ],
  },
  "/changelog": {
    title: "Changelog",
    description: "Latest updates and improvements across the platform.",
    sections: [
      { heading: "1.2.0", bullets: ["Templates tabs", "Complexity filter", "Routing improvements"] },
      { heading: "1.1.0", bullets: ["Integrations hub", "Footer routes", "UI polish"] },
    ],
  },
  "/docs": {
    title: "Documentation",
    description: "Learn how to build with our platform.",
    sections: [
      { heading: "Getting Started", bullets: ["Create project", "Pick template", "Deploy"] },
      { heading: "Components", bullets: ["UI primitives", "Patterns", "Utilities"] },
    ],
  },
  "/api": {
    title: "API Reference",
    description: "Endpoints and schemas for programmatic access.",
    sections: [
      { heading: "Templates", bullets: ["GET /api/templates", "Fields", "Examples"] },
      { heading: "Projects", bullets: ["GET /api/projects", "Status", "Pagination"] },
    ],
  },
  "/tutorials": {
    title: "Tutorials",
    description: "Step-by-step guides to ship faster.",
    sections: [
      { heading: "E-commerce", bullets: ["Payments", "Inventory", "Checkout"] },
      { heading: "Analytics", bullets: ["Charts", "KPIs", "Reports"] },
    ],
  },
  "/blog": {
    title: "Blog",
    description: "Insights and best practices from the team.",
    sections: [
      { heading: "DX Matters", bullets: ["Tooling", "Workflows", "Dev speed"] },
    ],
  },
  "/status": {
    title: "Status",
    description: "Service uptime and incident history.",
    sections: [
      { heading: "Uptime", bullets: ["99.9%", "Global regions", "Monitoring"] },
    ],
  },
  "/about": {
    title: "About",
    description: "Our mission and story.",
    sections: [
      { heading: "Mission", bullets: ["Ship faster", "Quality code", "Accessible tooling"] },
    ],
  },
  "/careers": {
    title: "Careers",
    description: "Join us and build developer tools.",
    sections: [
      { heading: "Open Roles", bullets: ["Frontend", "Backend", "Product"] },
    ],
  },
  "/contact": {
    title: "Contact",
    description: "Reach out for support or partnerships.",
    sections: [
      { heading: "Channels", bullets: ["Email", "Community", "Support"] },
    ],
  },
  "/partners": {
    title: "Partners",
    description: "Ecosystem collaborations.",
    sections: [
      { heading: "Programs", bullets: ["Integrations", "Co-marketing", "Solutions"] },
    ],
  },
  "/security": {
    title: "Security",
    description: "Commitment to secure defaults and practices.",
    sections: [
      { heading: "Practices", bullets: ["OWASP", "Audits", "Encryption"] },
    ],
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "How we collect and use data.",
    sections: [
      { heading: "Scope", bullets: ["Data types", "Retention", "Controls"] },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    description: "Agreement for using the platform.",
    sections: [
      { heading: "Legal", bullets: ["Usage", "Restrictions", "Liability"] },
    ],
  },
  "/cookies": {
    title: "Cookie Policy",
    description: "Usage of cookies for analytics and functionality.",
    sections: [
      { heading: "Cookies", bullets: ["Types", "Settings", "Opt-out"] },
    ],
  },
  "/compliance": {
    title: "Compliance",
    description: "Standards and certifications.",
    sections: [
      { heading: "Standards", bullets: ["GDPR", "SOC 2", "PCI"] },
    ],
  },
  "/licenses": {
    title: "Licenses",
    description: "Open source and third-party licenses.",
    sections: [
      { heading: "Libraries", bullets: ["MIT", "Apache-2.0", "GPL"] },
    ],
  },
} as const;

