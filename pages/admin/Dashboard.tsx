import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

const StatCard = ({ title, value, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-forest-900/5">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest bg-green-100 text-green-700 px-2 py-1 rounded-full">
        {trend}
      </span>
    </div>
    <h3 className="text-forest-900/60 text-sm font-bold uppercase tracking-widest mb-1">{title}</h3>
    <p className="text-3xl font-display font-bold text-forest-900">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-forest-900">Dashboard Overview</h1>
        <p className="text-forest-900/60">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <FadeIn delay={0.1}>
            <StatCard 
            title="Total Sales" 
            value="₹1,24,500" 
            trend="+12%" 
            icon={DollarSign} 
            color="bg-green-100 text-green-600" 
            />
        </FadeIn>
        <FadeIn delay={0.2}>
            <StatCard 
            title="Total Orders" 
            value="1,240" 
            trend="+5%" 
            icon={ShoppingBag} 
            color="bg-blue-100 text-blue-600" 
            />
        </FadeIn>
        <FadeIn delay={0.3}>
            <StatCard 
            title="Active Users" 
            value="856" 
            trend="+18%" 
            icon={Users} 
            color="bg-purple-100 text-purple-600" 
            />
        </FadeIn>
        <FadeIn delay={0.4}>
            <StatCard 
            title="Growth" 
            value="24%" 
            trend="+2%" 
            icon={TrendingUp} 
            color="bg-orange-100 text-orange-600" 
            />
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FadeIn delay={0.5}>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-forest-900/5">
                <h2 className="font-display text-xl font-bold text-forest-900 mb-6">Recent Activity</h2>
                <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-4 pb-4 border-b border-forest-900/5 last:border-0 last:pb-0">
                            <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center text-forest-900 font-bold text-xs">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-bold text-forest-900">New order #ORD-{2000+i}</p>
                                <p className="text-xs text-forest-900/50">2 minutes ago</p>
                            </div>
                            <div className="ml-auto text-sm font-bold text-[#4d7c55]">
                                ₹1,200
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>

        <FadeIn delay={0.6}>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-forest-900/5">
                <h2 className="font-display text-xl font-bold text-forest-900 mb-6">Inventory Alerts</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div>
                                <p className="font-bold text-forest-900 text-sm">Organic Turmeric</p>
                                <p className="text-xs text-forest-900/50">Low Stock (5 units left)</p>
                            </div>
                        </div>
                        <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:underline">Restock</button>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div>
                                <p className="font-bold text-forest-900 text-sm">Gir Kesar Mangoes</p>
                                <p className="text-xs text-forest-900/50">High Demand</p>
                            </div>
                        </div>
                        <button className="text-xs font-bold uppercase tracking-widest text-yellow-600 hover:underline">View</button>
                    </div>
                </div>
            </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Dashboard;