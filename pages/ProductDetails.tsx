import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import FadeIn from '../components/FadeIn';
import { ArrowLeft, Minus, Plus, ShoppingBag, Truck, ShieldCheck, MapPin, Heart, User } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(PRODUCTS.find(p => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(0);
      setQuantity(1);
    } else {
      navigate('/marketplace');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb & Back */}
        <FadeIn>
          <button 
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 text-forest-900/60 hover:text-forest-900 mb-8 transition-colors font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Marketplace
          </button>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2">
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-[#F5F5F5] group">
                   <img 
                      src={product.gallery[activeImage]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <Heart size={20} />
                      </button>
                   </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx ? 'border-[#37E266]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-1/2">
            <FadeIn delay={0.2}>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#37E266]/10 text-[#2bb550] text-[10px] font-bold uppercase tracking-widest mb-4">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-end gap-4 mb-8">
                  <span className="font-display text-3xl font-bold text-forest-900">
                    ₹{product.price}
                  </span>
                  <span className="text-forest-900/40 mb-1.5 text-lg font-medium">
                    / {product.unit}
                  </span>
                </div>

                <div className="h-px bg-forest-900/5 w-full mb-8"></div>

                <p className="text-forest-900/70 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Attributes Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-[#F9F9F9] rounded-2xl">
                    <div className="flex items-center gap-2 mb-2 text-forest-900/50">
                      <MapPin size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Origin</span>
                    </div>
                    <p className="font-bold text-forest-900">{product.origin}</p>
                  </div>
                  <div className="p-4 bg-[#F9F9F9] rounded-2xl">
                    <div className="flex items-center gap-2 mb-2 text-forest-900/50">
                      <User size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Farmer</span>
                    </div>
                    <p className="font-bold text-forest-900">{product.farmerName}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <div className="flex items-center bg-[#F5F5F5] rounded-full p-1 w-max">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest-900 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold text-forest-900">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest-900 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button className="flex-1 bg-forest-900 text-white font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-forest-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-forest-900/20">
                    <ShoppingBag size={20} />
                    <span>Add to Cart — ₹{(product.price * quantity).toLocaleString()}</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <Truck size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-900 text-sm">Fast Delivery</h4>
                        <p className="text-xs text-forest-900/50">Within 24-48 hours</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-900 text-sm">Quality Guarantee</h4>
                        <p className="text-xs text-forest-900/50">100% Organic Certified</p>
                      </div>
                   </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>

        {/* Nutrition & Details Section */}
        <FadeIn delay={0.3}>
          <div className="mt-20 p-8 md:p-12 bg-[#F0F2EF] rounded-[2.5rem]">
            <h3 className="font-display text-2xl font-bold text-forest-900 mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {product.nutrition.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl">
                    <div className="w-2 h-2 rounded-full bg-[#37E266]"></div>
                    <span className="font-medium text-forest-900">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default ProductDetails;