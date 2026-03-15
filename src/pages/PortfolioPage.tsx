import { ExternalLink, ArrowRight, Briefcase, Palette } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

interface Project {
  title: string;
  industry: string;
  description: string;
  url: string;
  isTemplate: boolean;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const productionSites: Project[] = [
    {
      title: 'BinBuddy',
      industry: 'Waste Management',
      description: 'Full-featured waste management platform for a Florida-based company. Features smart bin classification, service scheduling, route optimization, and customer portal with real-time tracking and automated notifications.',
      url: 'https://bin-buddy-website-re-2kgp.bolt.host/',
      isTemplate: false,
    },
    {
      title: 'TradeVision Suite',
      industry: 'Financial Technology',
      description: 'Professional trading tools platform offering custom indicators, market analysis tools, and automated trading signals. Built with real-time data integration and secure payment processing for subscription management.',
      url: 'https://tradevisionsuite.com/',
      isTemplate: false,
    },
  ];

  const templateShowcases: Project[] = [
    {
      title: 'Premium Law Firm',
      industry: 'Legal Services',
      description: 'Sophisticated law firm website featuring practice area showcases, attorney profiles, case results, client testimonials, and secure contact forms. Designed with professional aesthetics and trust-building elements.',
      url: 'https://premium-law-firm-web-kfyr.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Business Consulting Agency',
      industry: 'Consulting',
      description: 'Modern consulting firm website with service portfolios, industry expertise highlights, case studies, team bios, and lead generation forms. Optimized for professional credibility and client acquisition.',
      url: 'https://premium-consulting-f-y93q.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Construction Company',
      industry: 'Construction',
      description: 'Professional construction business site featuring project galleries, service offerings, equipment showcases, safety certifications, and estimate request forms. Built to highlight expertise and attract commercial clients.',
      url: 'https://professional-constru-mag9.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Luxury Beauty Salon',
      industry: 'Beauty & Wellness',
      description: 'Elegant Las Vegas beauty salon website with service menus, stylist portfolios, before/after galleries, online booking integration, and membership programs. Designed for high-end clientele.',
      url: 'https://las-vegas-luxury-sal-0zup.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Auto Repair Shop',
      industry: 'Automotive',
      description: 'Complete auto repair shop website featuring service listings, online appointment scheduling, maintenance tips, customer reviews, and special offers. Built to drive local traffic and bookings.',
      url: 'https://las-vegas-auto-repai-fr8a.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Luxury Real Estate',
      industry: 'Real Estate',
      description: 'High-end Las Vegas realtor website with property listings, virtual tours, neighborhood guides, market insights, and lead capture forms. Designed for luxury property marketing.',
      url: 'https://luxury-las-vegas-rea-ch79.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Research Peptide Company',
      industry: 'Pharmaceuticals',
      description: 'Professional pharmaceutical website for peptide research products. Features product catalog, research documentation, compliance information, secure ordering system, and educational resources.',
      url: 'https://research-peptide-e-c-r4jz.bolt.host/',
      isTemplate: true,
    },
    {
      title: 'Big Hit Barbershop',
      industry: 'Grooming',
      description: 'Modern Las Vegas barbershop website with service menus, barber profiles, gallery of cuts, online booking system, and loyalty program integration. Designed for urban grooming clientele.',
      url: 'https://big-hit-las-vegas-gr-3u2f.bolt.host/',
      isTemplate: true,
    },
  ];

  const renderProjectCard = (project: Project, index: number) => (
    <div
      key={index}
      className="group glass-card overflow-hidden hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
        {project.title === 'BinBuddy' ? (
          <div className="w-full h-full bg-white flex items-center justify-center p-8">
            <img
              src="/add_a_heading_(2)_(1)_(1).png"
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : project.title === 'TradeVision Suite' ? (
          <div className="w-full h-full bg-white flex items-center justify-center p-8">
            <img
              src="/pngg_(1).png"
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <iframe
            src={project.url}
            className="w-full h-full pointer-events-none scale-50 origin-top-left"
            style={{ width: '200%', height: '200%' }}
            title={project.title}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute top-4 right-4 px-4 py-2 rounded-full glass-effect text-sm font-semibold text-cyan-400">
          {project.industry}
        </div>
        {project.isTemplate && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-xs font-semibold text-white flex items-center gap-1">
            <Palette size={14} />
            Template
          </div>
        )}
        {!project.isTemplate && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-xs font-semibold text-white flex items-center gap-1">
            <Briefcase size={14} />
            Live Site
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-white/60 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-6 py-3 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          View Live Site
          <ExternalLink className="group-hover/btn:translate-x-1 transition-transform" size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Portfolio</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            From production-ready business solutions to industry-specific templates, explore our diverse range of web development projects.
          </p>
        </div>

        {/* Production Sites Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-green-400" size={32} />
            <h2 className="text-4xl font-bold">
              <span className="text-gradient">Production Sites</span>
            </h2>
          </div>
          <p className="text-white/60 mb-8 text-lg">
            Live, fully-functional websites serving real businesses and customers.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productionSites.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Template Showcases Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="text-purple-400" size={32} />
            <h2 className="text-4xl font-bold">
              <span className="text-gradient">Template Showcases</span>
            </h2>
          </div>
          <p className="text-white/60 mb-8 text-lg">
            Industry-specific website templates demonstrating our design capabilities and versatility.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {templateShowcases.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Ready to see similar results?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real business growth.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
