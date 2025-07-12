import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, Eye, Star, User, Calendar } from 'lucide-react';
import { Item } from '../../types';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  item: Item;
  index?: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, index = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="item-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      <Link to={`/item/${item.id}`}>
        <div className="relative overflow-hidden">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="w-full h-56 loading-skeleton rounded-t-2xl"></div>
          )}
          
          {/* Main Image */}
          <motion.img
            className={`item-image w-full h-56 object-cover ${!imageLoaded ? 'hidden' : ''}`}
            src={item.images[0]}
            alt={item.title}
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500 transition-colors" />
            </motion.button>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <motion.span 
              className={`status-badge ${
                item.status === 'available' ? 'status-available' : 
                item.status === 'pending' ? 'status-pending' : 'status-swapped'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${
                item.status === 'available' ? 'bg-green-500 animate-pulse' : 
                item.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-500'
              }`}></div>
              {item.condition}
            </motion.span>
          </div>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <div className="price-tag flex items-center space-x-1">
              <Coins className="w-4 h-4" />
              <span className="font-bold">{item.pointValue}</span>
            </div>
          </div>

          {/* Quick View Button */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-xl font-medium shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quick View
            </motion.button>
          </div>
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
              {item.title}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">4.8</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
            {item.description}
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-gray-600">{item.uploaderName}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Category and Size */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">{item.category}</span>
            <span className="text-sm text-gray-500">Size {item.size}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag) => (
              <motion.span 
                key={tag} 
                className="tag text-xs"
                whileHover={{ scale: 1.05 }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>

          {/* Footer */}
          <motion.div 
            className="flex items-center justify-between pt-4 border-t border-gray-100"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-1">
              <Coins className="w-5 h-5 text-emerald-600" />
              <span className="text-lg font-bold text-emerald-600">{item.pointValue} points</span>
            </div>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;