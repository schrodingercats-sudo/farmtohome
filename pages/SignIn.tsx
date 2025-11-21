
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, Mail } from 'lucide-react';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithGoogle, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // For demo/admin access purposes, we simulate the traditional login
      // extract a name from email if not provided
      const nameFromEmail = email.split('@')[0];
      const displayName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      
      // Call the context login function which handles the Admin check
      await login(email, displayName);
      
      // Add a small delay to simulate network request
      setTimeout(() => {
        setIsLoading(false);
        navigate('/account');
      }, 800);
    } catch (err) {
      setError('Failed to sign in.');
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      await loginWithGoogle();
      navigate('/account');
    } catch (err) {
      setError('Failed to sign in with Google.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2EF] flex items-center justify-center px-4 pt-20 pb-12">
      <FadeIn>
        <div className="bg-white rounded-[2rem] shadow-xl shadow-forest-900/5 p-8 md:p-12 w-full max-w-md relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#37E266]"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#37E266]/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-forest-900 mb-2">Welcome Back</h1>
            <p className="text-forest-900/60">Sign in to access your farm dashboard</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {/* Google Login Button */}
          <button 
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-white border border-forest-900/10 text-forest-900 font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm mb-6"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-forest-900/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="px-2 bg-white text-forest-900/40">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60">Password</label>
                <a href="#" className="text-xs font-bold text-[#4d7c55] hover:underline">Forgot?</a>
              </div>
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
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-forest-900 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-forest-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'} 
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-forest-900/60 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#4d7c55] font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SignIn;
