import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins } from 'lucide-react';
import { Item } from '../../types';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  item: Item;
  index?: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/item/${item.id}`}>
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={item.images[0]}
            alt={item.title}
          />
          <div className="absolute top-2 right-2">
            <motion.button
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              {item.condition}
            </span>
          </div>
          <div className="absolute bottom-2 right-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              item.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {item.status}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Coins className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">{item.pointValue} points</span>
            </div>
            <span className="text-xs text-gray-500">{item.size}</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">{item.category}</span>
            <span className="text-xs text-gray-500">by {item.uploaderName}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;