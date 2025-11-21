
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Newsletter from '../components/Newsletter';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Prepare template parameters matching standard EmailJS conventions
    // Ensure your EmailJS template uses variable names like {{from_name}}, {{from_email}}, {{message}}
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Farm to Family Team', // Optional, depends on if you use this variable in template
    };

    emailjs.send(
      'service_wwodjxl', 
      'template_xsyzp51', 
      templateParams, 
      'uZuEsQE9SXIbjD7z8'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setStatus('error');
      });
  };

  return (
    <div className="pt-32 bg-forest-900 min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-6 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <FadeIn>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                Get in <br/> Touch
              </h1>
              <p className="text-white/60 text-lg mb-12">
                Whether you are a farmer looking to join us, or a customer with a query, we are here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                    <p className="text-white/60">Campus Hub, Vadodara<br/>Gujarat, India 390001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-white/60">hello@farmtofamily.com<br/>support@farmtofamily.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-white/60">+91 98765 43210<br/>Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <FadeIn delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                    <div className="w-20 h-20 bg-[#37E266] rounded-full flex items-center justify-center text-forest-900 mb-4 animate-bounce">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">Message Sent!</h3>
                    <p className="text-white/60 max-w-md">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-forest-900 transition-colors font-bold text-xs uppercase tracking-widest"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#37E266] transition-colors" 
                          placeholder="John" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#37E266] transition-colors" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#37E266] transition-colors" 
                        placeholder="john@example.com" 
                      />
                    </div>

                    <div className="space-y-2 mb-8">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60">Message</label>
                      <textarea 
                        rows={5} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#37E266] transition-colors resize-none" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                        <AlertCircle size={20} />
                        <p className="text-sm">Something went wrong. Please try again later.</p>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="w-full bg-[#37E266] text-forest-900 font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#2BB550] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? (
                        <>Sending <Loader2 size={16} className="animate-spin" /></>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
