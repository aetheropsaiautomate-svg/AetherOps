import { Code2, Bot, Workflow, Globe, MessageSquare, Calendar, Zap, Database, Mail } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'Website Development',
      icon: Code2,
      features: [
        { icon: Globe, text: 'Custom web design' },
        { icon: Zap, text: 'Responsive UI/UX' },
        { icon: Zap, text: 'High-speed builds' },
        { icon: Database, text: 'CMS options (Next.js, WordPress, Shopify)' },
      ],
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
    {
      title: 'AI Integrations',
      icon: Bot,
      features: [
        { icon: MessageSquare, text: 'Chatbots' },
        { icon: Calendar, text: 'AI appointment scheduling' },
        { icon: Database, text: 'CRM integrations' },
        { icon: Mail, text: 'Automated email follow-ups' },
        { icon: Bot, text: 'Data extraction tools' },
      ],
      gradient: 'from-blue-500/20 to-violet-600/20',
    },
    {
      title: 'Automation Systems',
      icon: Workflow,
      features: [
        { icon: Zap, text: 'Zapier/Make automation' },
        { icon: Bot, text: 'AI agents for operations' },
        { icon: Workflow, text: 'Workflow optimization' },
        { icon: Database, text: 'Process automation' },
      ],
      gradient: 'from-violet-500/20 to-purple-600/20',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive solutions to transform your business with cutting-edge technology and intelligent automation
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 sm:p-12 hover:shadow-neon transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-neon-sm`}>
                      <ServiceIcon className="text-cyan-400" size={40} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                      {service.title}
                    </h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Leverage modern technology to create exceptional digital experiences and streamline your operations.
                    </p>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300"
                    >
                      Request Quote
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white/90 mb-6">Key Features</h3>
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-cyan-400/30"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="text-cyan-400" size={20} />
                          </div>
                          <span className="text-white/80">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 glass-card p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Need a custom solution?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
