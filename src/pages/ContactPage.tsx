import { useState } from 'react';
import { Mail, Phone, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        service: formData.service,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch('https://hook.us2.make.com/hwtlk3nlknxmslyeksfjsnaipboeovx8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          businessName: '',
          service: '',
          message: '',
        });
      }, 3000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8 animate-fadeInUp">
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-white/80 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      What service are you interested in? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-effect text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 [&>option]:bg-slate-800 [&>option]:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="ai-chatbot">AI Chatbots</option>
                      <option value="automation">Business Automation</option>
                      <option value="integration">AI Integration</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <a
                  href="mailto:hello@aetherops.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/50 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon-sm transition-all duration-300">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="text-white font-semibold">hello@aetherops.com</div>
                  </div>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/50 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon-sm transition-all duration-300">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Phone</div>
                    <div className="text-white font-semibold">(123) 456-7890</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule a Call</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Prefer to talk? Book a free 30-minute consultation to discuss your project in detail.
              </p>
              <button className="group w-full px-8 py-4 border-2 border-cyan-400/50 rounded-full font-semibold text-white hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Schedule a Call
              </button>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Transparent pricing and timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
