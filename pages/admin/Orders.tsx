import React from 'react';
import { Eye } from 'lucide-react';
import { Order } from '../../types';

const MOCK_ORDERS: Order[] = [
    { id: 'ORD-001', customer: 'Rohan Patel', date: '2023-10-24', amount: 1850, status: 'Delivered', items: 3 },
    { id: 'ORD-002', customer: 'Aditi Shah', date: '2023-10-25', amount: 450, status: 'Processing', items: 1 },
    { id: 'ORD-003', customer: 'Vikram Singh', date: '2023-10-26', amount: 3200, status: 'Shipped', items: 5 },
    { id: 'ORD-004', customer: 'Neha Gupta', date: '2023-10-26', amount: 850, status: 'Pending', items: 2 },
];

const Orders: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-forest-900">Orders</h1>
        <p className="text-forest-900/60">Track and manage customer orders.</p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-forest-900/5 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-beige-100/50 border-b border-forest-900/5">
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Order ID</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Customer</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Date</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Amount</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Status</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60 text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_ORDERS.map((order) => (
                        <tr key={order.id} className="border-b border-forest-900/5 hover:bg-gray-50 transition-colors">
                            <td className="p-6 font-bold text-forest-900">{order.id}</td>
                            <td className="p-6 text-sm text-forest-900/80">{order.customer}</td>
                            <td className="p-6 text-sm text-forest-900/60">{order.date}</td>
                            <td className="p-6 font-bold text-forest-900">₹{order.amount}</td>
                            <td className="p-6">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-gray-100 text-gray-600'
                                }`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="p-6 text-right">
                                <button className="p-2 rounded-full hover:bg-beige-100 text-forest-900/60 hover:text-forest-900 transition-colors">
                                    <Eye size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;