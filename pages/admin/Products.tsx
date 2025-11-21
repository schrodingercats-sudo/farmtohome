import React from 'react';
import { PRODUCTS } from '../../constants';
import { Edit, Trash2, Plus } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="font-display text-3xl font-bold text-forest-900">Products</h1>
            <p className="text-forest-900/60">Manage your inventory.</p>
        </div>
        <button className="bg-forest-900 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-forest-800 transition-all">
            <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-forest-900/5 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-beige-100/50 border-b border-forest-900/5">
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Product</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Category</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Price</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60">Stock</th>
                        <th className="p-6 font-bold text-xs uppercase tracking-widest text-forest-900/60 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {PRODUCTS.map((product) => (
                        <tr key={product.id} className="border-b border-forest-900/5 hover:bg-gray-50 transition-colors">
                            <td className="p-6">
                                <div className="flex items-center gap-4">
                                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                                    <span className="font-bold text-forest-900 text-sm">{product.name}</span>
                                </div>
                            </td>
                            <td className="p-6 text-sm text-forest-900/70">{product.category}</td>
                            <td className="p-6 font-bold text-forest-900">₹{product.price}</td>
                            <td className="p-6">
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest">
                                    In Stock
                                </span>
                            </td>
                            <td className="p-6 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button className="p-2 rounded-full hover:bg-beige-100 text-forest-900/60 hover:text-forest-900 transition-colors">
                                        <Edit size={16} />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-red-50 text-forest-900/60 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
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

export default Products;