import { ArrowRight, Zap, Bot, Workflow, Rocket, TrendingUp, Target, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Fast, modern, conversion-optimized websites.',
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Automated support, sales, and appointment scheduling.',
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description: 'We connect AI to your tools to cut manual work.',
    },
  ];

  const reasons = [
    {
      icon: Rocket,
      title: 'Lightning-fast build times',
    },
    {
      icon: Bot,
      title: 'Custom AI integrations',
    },
    {
      icon: TrendingUp,
      title: 'Scalable solutions',
    },
    {
      icon: Target,
      title: 'Clean UI/UX based on business goals',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understanding your business needs' },
    { number: '02', title: 'Design', description: 'Creating beautiful, functional designs' },
    { number: '03', title: 'Development', description: 'Building with modern technologies' },
    { number: '04', title: 'AI Integration', description: 'Connecting intelligent automation' },
    { number: '05', title: 'Launch', description: 'Deploy and scale your solution' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient block mb-2">Websites & AI Systems</span>
                <span className="text-white block">That Run Your Business For You.</span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed">
                AetherOps builds high-performance websites, chatbots, and automated AI workflows for businesses that want to scale smarter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get a Free Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-8 py-4 border-2 border-cyan-400/50 rounded-full font-semibold text-white hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative animate-float">
                <img
                  src="/699BFA8B-711E-4395-B809-D35A45A3F9FC-Picsart-BackgroundRemover.png"
                  alt="AetherOps Logo"
                  className="w-full max-w-md h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">What We Do</span>
            </h2>
            <p className="text-xl text-white/60">Comprehensive solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group glass-card p-8 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:shadow-neon-sm transition-all duration-300">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Why Choose Us</span>
            </h2>
            <p className="text-xl text-white/60">Built for performance and results</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 hidden md:block"></div>

            <div className="space-y-12">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <p className="text-2xl text-white font-semibold">{reason.title}</p>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center backdrop-blur-sm border-2 border-cyan-400/50 shadow-neon">
                        <Icon className="text-cyan-400" size={32} />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-white/60">From idea to execution</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex-1 text-center group w-full"
                >
                  <div className="relative inline-block mb-6">
                    <div className="text-7xl font-bold bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 blur-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 group-hover:from-cyan-400/40 group-hover:to-blue-600/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
            <div className="relative z-10">
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-gradient">Ready to automate your business?</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's build something incredible together
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 inline-flex items-center gap-2"
              >
                Book a Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
