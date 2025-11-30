import { ExternalLink, ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      industry: 'Retail',
      description: 'Complete website overhaul with integrated AI chatbot for customer support',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '40% increase', value: 'in conversions', icon: TrendingUp },
        { label: '60% faster', value: 'load time', icon: Clock },
        { label: '2000+', value: 'daily visitors', icon: Users },
      ],
    },
    {
      title: 'Healthcare Appointment System',
      industry: 'Healthcare',
      description: 'AI-powered scheduling system with automated reminders and patient management',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '75% reduction', value: 'in no-shows', icon: TrendingUp },
        { label: '24/7', value: 'availability', icon: Clock },
        { label: '5000+', value: 'appointments', icon: Users },
      ],
    },
    {
      title: 'Financial Services Dashboard',
      industry: 'Finance',
      description: 'Custom web application with real-time data visualization and reporting',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '90% faster', value: 'reporting', icon: TrendingUp },
        { label: 'Real-time', value: 'analytics', icon: Clock },
        { label: '100+', value: 'team users', icon: Users },
      ],
    },
    {
      title: 'Real Estate CRM Integration',
      industry: 'Real Estate',
      description: 'Automated lead management system with AI-powered follow-ups',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '50% more', value: 'qualified leads', icon: TrendingUp },
        { label: '85% saved', value: 'manual time', icon: Clock },
        { label: '500+', value: 'leads/month', icon: Users },
      ],
    },
    {
      title: 'Restaurant Ordering System',
      industry: 'Food & Beverage',
      description: 'Modern website with online ordering and delivery integration',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '200% growth', value: 'in online orders', icon: TrendingUp },
        { label: '3 min avg', value: 'order time', icon: Clock },
        { label: '300+', value: 'daily orders', icon: Users },
      ],
    },
    {
      title: 'SaaS Platform Launch',
      industry: 'Technology',
      description: 'Full-stack web application with subscription management and analytics',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: '1000+', value: 'subscribers', icon: TrendingUp },
        { label: '99.9%', value: 'uptime', icon: Clock },
        { label: '50K+', value: 'monthly users', icon: Users },
      ],
    },
  ];

  const automationResults = [
    {
      title: 'Before',
      points: [
        'Manual data entry taking 10+ hours/week',
        'Delayed response to customer inquiries',
        'Inconsistent follow-up processes',
        'Limited reporting capabilities',
      ],
      color: 'from-red-500/10 to-orange-500/10',
      border: 'border-red-500/30',
    },
    {
      title: 'After',
      points: [
        'Automated data sync across all platforms',
        'Instant AI-powered customer responses',
        'Systematic automated follow-up sequences',
        'Real-time analytics and insights',
      ],
      color: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-500/30',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">See Our Work</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Real results for real businesses. Explore how we've helped companies transform their digital presence and automate their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full glass-effect text-sm font-semibold text-cyan-400">
                  {project.industry}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, statIndex) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={statIndex} className="text-center">
                        <StatIcon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-white">{stat.label}</div>
                        <div className="text-xs text-white/60">{stat.value}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full px-6 py-3 border border-cyan-400/50 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  View Details
                  <ExternalLink className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">AI Automations</span>
            </h2>
            <p className="text-xl text-white/60">Before & After Results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationResults.map((result, index) => (
              <div
                key={index}
                className={`glass-card p-8 border-2 ${result.border} hover:shadow-neon transition-all duration-500`}
              >
                <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${result.color} mb-6`}>
                  <h3 className="text-2xl font-bold text-white">{result.title}</h3>
                </div>
                <ul className="space-y-4">
                  {result.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${result.title === 'After' ? 'bg-green-400' : 'bg-red-400'} mt-2 flex-shrink-0`}></div>
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-12 text-center relative overflow-hidden">
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
