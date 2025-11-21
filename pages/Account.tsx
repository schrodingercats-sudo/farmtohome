
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useAuth } from '../context/AuthContext';
import { Package, User, MapPin, LogOut, Settings, ShoppingBag, ChevronRight, Bell, Shield, CreditCard, Save, X } from 'lucide-react';

// Mock Order Data
const ORDERS = [
  {
    id: 'ORD-7782-XJ',
    date: 'Oct 24, 2023',
    total: '₹1,850',
    status: 'Delivered',
    items: ['Organic Gir Kesar Mangoes (x2)', 'Handwoven Cotton Dupatta'],
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 'ORD-9921-MC',
    date: 'Nov 02, 2023',
    total: '₹450',
    status: 'Processing',
    items: ['Terracotta Water Pot'],
    image: 'https://images.unsplash.com/photo-1520540037842-b80df61df169?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 'ORD-1102-PL',
    date: 'Sep 15, 2023',
    total: '₹3,000',
    status: 'Delivered',
    items: ['Village Churned Ghee (x2)', 'Fresh Farm Spinach (x4)', 'Organic Turmeric Powder'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=100&auto=format&fit=crop'
  }
];

const Account: React.FC = () => {
  const { user, logout, isAuthenticated, isLoading, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'settings'>('orders');
  
  // Edit Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  // Initialize form data when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        address: user.address || 'Campus Hub, University Road, Vadodara, Gujarat, 390001'
      });
    }
  }, [user]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F0F2EF] flex items-center justify-center">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-900"></div>
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSaveProfile = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setFormData({
      name: user.name,
      email: user.email,
      address: user.address || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F0F2EF]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Welcome Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-2">
                Welcome, {user.name.split(' ')[0]}
              </h1>
              <p className="text-forest-900/60">Manage your orders and account details.</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-sm">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-[#37E266]" />
              <div>
                <p className="font-bold text-forest-900 text-sm">{user.name}</p>
                <p className="text-forest-900/40 text-xs">{user.email}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-[2rem] p-6 shadow-sm h-full">
                <nav className="space-y-2">
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${
                      activeTab === 'orders' ? 'bg-forest-900 text-white shadow-lg shadow-forest-900/20' : 'text-forest-900/60 hover:bg-beige-100'
                    }`}
                  >
                    <ShoppingBag size={18} /> My Orders
                  </button>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${
                      activeTab === 'profile' ? 'bg-forest-900 text-white shadow-lg shadow-forest-900/20' : 'text-forest-900/60 hover:bg-beige-100'
                    }`}
                  >
                    <User size={18} /> Profile
                  </button>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${
                      activeTab === 'settings' ? 'bg-forest-900 text-white shadow-lg shadow-forest-900/20' : 'text-forest-900/60 hover:bg-beige-100'
                    }`}
                  >
                    <Settings size={18} /> Settings
                  </button>
                  
                  <div className="pt-8 mt-8 border-t border-forest-900/5">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-red-500 hover:bg-red-50 font-bold text-sm uppercase tracking-wider transition-all"
                    >
                      <LogOut size={18} /> Log Out
                    </button>
                  </div>
                </nav>
              </div>
            </FadeIn>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <FadeIn delay={0.2}>
              
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                     <h2 className="font-display text-2xl font-bold text-forest-900">Recent Orders</h2>
                     <button className="text-[#4d7c55] font-bold text-xs uppercase tracking-widest hover:underline">View All</button>
                  </div>
                  {ORDERS.map((order) => (
                    <div key={order.id} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-forest-900/5 hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-forest-900/5 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-beige-100 rounded-xl flex items-center justify-center text-forest-900">
                            <Package size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-forest-900">{order.id}</p>
                            <p className="text-xs text-forest-900/50 uppercase tracking-wide">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            order.status === 'Delivered' ? 'bg-[#37E266]/20 text-forest-900' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                          <p className="font-display font-bold text-xl text-forest-900">{order.total}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <img src={order.image} alt="Product" className="w-16 h-16 rounded-xl object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-forest-900 mb-1">Items Ordered:</p>
                          <p className="text-forest-900/60 text-sm">{order.items.join(', ')}</p>
                        </div>
                        <button className="px-6 py-3 rounded-full border border-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-widest hover:bg-forest-900 hover:text-white transition-all flex items-center gap-2">
                          View Details <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                     <h2 className="font-display text-2xl font-bold text-forest-900">Personal Information</h2>
                     {!isEditing && (
                        <button 
                          onClick={() => setIsEditing(true)}
                          className="text-[#4d7c55] font-bold text-xs uppercase tracking-widest hover:underline"
                        >
                          Edit
                        </button>
                     )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60">Full Name</label>
                      {isEditing ? (
                        <input 
                          type="text" 
                          value={formData.name} 
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full p-4 bg-beige-100/50 rounded-xl border border-forest-900/10 focus:outline-none focus:border-[#37E266]"
                        />
                      ) : (
                        <div className="flex items-center gap-3 p-4 bg-beige-100/50 rounded-xl border border-forest-900/5 text-forest-900">
                          <User size={18} className="text-forest-900/40" />
                          {user.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60">Email Address</label>
                      {isEditing ? (
                        <input 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full p-4 bg-beige-100/50 rounded-xl border border-forest-900/10 focus:outline-none focus:border-[#37E266]"
                        />
                      ) : (
                        <div className="flex items-center gap-3 p-4 bg-beige-100/50 rounded-xl border border-forest-900/5 text-forest-900">
                          <Package size={18} className="text-forest-900/40" />
                          {user.email}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-forest-900/60">Default Shipping Address</label>
                      {isEditing ? (
                        <textarea 
                          value={formData.address} 
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          className="w-full p-4 bg-beige-100/50 rounded-xl border border-forest-900/10 focus:outline-none focus:border-[#37E266] resize-none h-32"
                        />
                      ) : (
                        <div className="flex items-start gap-3 p-4 bg-beige-100/50 rounded-xl border border-forest-900/5 text-forest-900">
                          <MapPin size={18} className="text-forest-900/40 mt-1" />
                          <div>
                            <p className="font-medium">{user.address || 'No address set'}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-8 pt-8 border-t border-forest-900/5 flex justify-end gap-4">
                      <button 
                        onClick={handleCancelEdit}
                        className="px-8 py-3 rounded-full border border-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-widest hover:bg-beige-100 transition-all flex items-center gap-2"
                      >
                        Cancel <X size={14} />
                      </button>
                      <button 
                        onClick={handleSaveProfile}
                        className="px-8 py-3 rounded-full bg-forest-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-forest-800 transition-all shadow-lg shadow-forest-900/10 flex items-center gap-2"
                      >
                        Save Changes <Save size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-forest-900 mb-8">Preferences</h2>
                  
                  <div className="space-y-6">
                    {/* Notification Settings */}
                    <div className="p-6 bg-beige-100/30 rounded-2xl border border-forest-900/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-forest-900 shadow-sm">
                                <Bell size={18} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-900">Email Notifications</h3>
                                <p className="text-xs text-forest-900/50">Receive updates about your orders and promotions</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#37E266]"></div>
                        </label>
                    </div>

                    {/* Privacy Settings */}
                    <div className="p-6 bg-beige-100/30 rounded-2xl border border-forest-900/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-forest-900 shadow-sm">
                                <Shield size={18} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-900">Two-Factor Authentication</h3>
                                <p className="text-xs text-forest-900/50">Add an extra layer of security to your account</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#37E266]"></div>
                        </label>
                    </div>

                    {/* Payment Methods */}
                    <div className="p-6 bg-beige-100/30 rounded-2xl border border-forest-900/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-forest-900 shadow-sm">
                                <CreditCard size={18} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-900">Saved Cards</h3>
                                <p className="text-xs text-forest-900/50">Manage your saved payment methods for faster checkout</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-full bg-white border border-forest-900/10 text-[10px] font-bold uppercase tracking-widest hover:bg-forest-900 hover:text-white transition-all">
                            Manage
                        </button>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-forest-900/5">
                      <button className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline">
                          Delete Account
                      </button>
                  </div>
                </div>
              )}

            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
