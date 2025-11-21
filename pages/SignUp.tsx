
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, Mail, User } from 'lucide-react';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock API call delay
    setTimeout(() => {
      login(email, name);
      setIsLoading(false);
      navigate('/account');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F0F2EF] flex items-center justify-center px-4 pt-20 pb-12">
      <FadeIn>
        <div className="bg-white rounded-[2rem] shadow-xl shadow-forest-900/5 p-8 md:p-12 w-full max-w-md relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#37E266]"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#37E266]/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-900 mb-2">Join the Family</h1>
            <p className="text-forest-900/60">Start your sustainable journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-forest-900/30">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-beige-100/50 border border-forest-900/10 rounded-xl pl-12 pr-4 py-3 text-forest-900 focus:outline-none focus:border-[#37E266] focus:ring-1 focus:ring-[#37E266] transition-all"
                  placeholder="John Doe" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-forest-900/30">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-beige-100/50 border border-forest-900/10 rounded-xl pl-12 pr-4 py-3 text-forest-900 focus:outline-none focus:border-[#37E266] focus:ring-1 focus:ring-[#37E266] transition-all"
                  placeholder="you@example.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-forest-900/30">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-beige-100/50 border border-forest-900/10 rounded-xl pl-12 pr-4 py-3 text-forest-900 focus:outline-none focus:border-[#37E266] focus:ring-1 focus:ring-[#37E266] transition-all"
                  placeholder="Create a password" 
                />
              </div>
            </div>

            <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" required className="mt-1 accent-forest-900" />
                <p className="text-xs text-forest-900/60">I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-forest-900 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-forest-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'} 
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-forest-900/60 text-sm">
              Already have an account?{' '}
              <Link to="/signin" className="text-[#4d7c55] font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SignUp;
