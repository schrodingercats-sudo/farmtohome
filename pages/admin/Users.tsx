import React, { useState } from 'react';
import { Trash2, Shield, User as UserIcon, Mail, Plus } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

const Users: React.FC = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Pratham Solanki', email: 'pratham.solanki30@gmail.com', role: 'Super Admin' },
    { id: 2, name: 'Admin User', email: 'admin@farmtofamily.com', role: 'Admin' },
  ]);

  const [newAdminEmail, setNewAdminEmail] = useState('');

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAdminEmail) {
      setAdmins([...admins, { id: Date.now(), name: 'New Admin', email: newAdminEmail, role: 'Admin' }]);
      setNewAdminEmail('');
    }
  };

  const handleRemoveAdmin = (id: number) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <div>
       <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-forest-900">User Management</h1>
        <p className="text-forest-900/60">Manage admins and view customer details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Admin List */}
        <FadeIn>
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-forest-900/5">
                <h2 className="font-display text-xl font-bold text-forest-900 mb-6 flex items-center gap-2">
                    <Shield size={20} className="text-[#4d7c55]" /> Admin Team
                </h2>

                <div className="space-y-4 mb-8">
                    {admins.map(admin => (
                        <div key={admin.id} className="flex items-center justify-between p-4 bg-beige-100/30 rounded-xl border border-forest-900/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-forest-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    {admin.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-forest-900 text-sm">{admin.name}</p>
                                    <p className="text-xs text-forest-900/50">{admin.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-white border border-forest-900/10 px-2 py-1 rounded-full text-forest-900/60">
                                    {admin.role}
                                </span>
                                {admin.role !== 'Super Admin' && (
                                    <button 
                                        onClick={() => handleRemoveAdmin(admin.id)}
                                        className="text-red-400 hover:text-red-600 transition-colors p-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleAddAdmin} className="mt-6 pt-6 border-t border-forest-900/5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-forest-900/60 mb-3">Add New Admin</h3>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-900/30" />
                            <input 
                                type="email" 
                                placeholder="Enter email address" 
                                className="w-full pl-10 pr-4 py-3 bg-beige-100/50 rounded-xl border border-forest-900/10 text-sm focus:outline-none focus:border-[#37E266]"
                                value={newAdminEmail}
                                onChange={(e) => setNewAdminEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-forest-900 text-white px-4 py-2 rounded-xl hover:bg-forest-800 transition-colors">
                            <Plus size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </FadeIn>

        {/* Recent Customers (Mock) */}
        <FadeIn delay={0.1}>
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-forest-900/5">
                <h2 className="font-display text-xl font-bold text-forest-900 mb-6 flex items-center gap-2">
                    <UserIcon size={20} className="text-[#4d7c55]" /> Recent Customers
                </h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex items-center justify-between py-2">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                    U{i}
                                </div>
                                <div>
                                    <p className="font-bold text-forest-900 text-sm">Customer {i}</p>
                                    <p className="text-xs text-forest-900/50">Joined 2 days ago</p>
                                </div>
                             </div>
                             <button className="text-xs font-bold text-[#4d7c55] hover:underline">View Profile</button>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Users;