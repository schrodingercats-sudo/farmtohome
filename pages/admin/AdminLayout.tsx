import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Package, LogOut, Home, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
    { icon: ShoppingBag, label: 'Orders', path: '/admin/orders' },
    { icon: Package, label: 'Products', path: '/admin/products' },
    { icon: Users, label: 'Users', path: '/admin/users' },
  ];

  const NavContent = () => (
    <>
      <div className="p-8">
        <h1 className="font-display text-2xl font-bold">Admin Panel</h1>
        <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Farm to Family</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm uppercase tracking-wider ${
              location.pathname === item.path
                ? 'bg-[#37E266] text-forest-900'
                : 'text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link 
          to="/"
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all font-bold text-sm uppercase tracking-wider mb-2"
        >
             <Home size={18} /> Main Site
        </Link>
        <button
          onClick={() => logout()}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-wider"
        >
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#F0F2EF] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-forest-900 text-white p-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-2">
            <h1 className="font-display text-lg font-bold">Admin Panel</h1>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Desktop */}
      <div className="w-64 bg-forest-900 text-white fixed h-full z-20 hidden lg:flex flex-col">
        <NavContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-20 lg:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="absolute inset-y-0 left-0 w-64 bg-forest-900 text-white flex flex-col h-full shadow-2xl transition-transform duration-300 ease-in-out transform translate-x-0">
                <NavContent />
            </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8 pt-6 lg:pt-8">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;