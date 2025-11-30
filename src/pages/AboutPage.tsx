import { Lightbulb, Zap, Target, TrendingUp, User, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamlining operations to free your team for high-value work',
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Delivering results faster without compromising on quality',
    },
    {
      icon: TrendingUp,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly experiences that convert',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">About AetherOps</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Building the future of business operations through intelligent automation and modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                AetherOps builds systems that help businesses operate at the speed of automation.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                In today's fast-paced digital landscape, businesses need more than just a website. They need intelligent systems that work 24/7, automate repetitive tasks, and scale effortlessly as they grow.
              </p>
            </div>
          </div>

          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img
                src="/699BFA8B-711E-4395-B809-D35A45A3F9FC-Picsart-BackgroundRemover copy copy.png"
                alt="AetherOps Logo"
                className="w-full max-w-sm mx-auto animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-white/60">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 text-center hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center animate-fadeInUp">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}></div>
                    <div className="relative w-80 h-[32rem] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}>
                      <img
                        src="/image copy copy copy copy copy.png"
                        alt="Adler Shilvock - Founder"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white animate-fadeInUp">
                  Meet the Founder
                </h2>
                <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <p className="text-lg text-white/75 leading-relaxed">
                    AetherOps was founded by <span className="text-cyan-400 font-semibold">Adler Shilvock</span>, a young and forward-thinking innovator in web development, automation, and AI systems. Despite his age, Adler has spent years mastering modern digital technologies—building streamlined tools, high-performance websites, and intelligent workflows that rival top agencies.
                  </p>
                  <p className="text-lg text-white/75 leading-relaxed">
                    He leads AetherOps with a refined, agency-level approach focused on clean design, efficiency, and measurable growth. Adler's mission is simple: to help businesses modernize, scale, and outperform their competition through smart design and powerful automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Let's build something amazing together</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology and intelligent automation?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
