import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shirt, ShoppingBag, Watch, Footprints, Crown, Gem } from 'lucide-react';

const categories = [
  {
    name: 'Outerwear',
    description: 'Jackets, coats, and blazers',
    icon: Shirt,
    count: '156 items',
    color: 'bg-blue-500',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Dresses',
    description: 'Casual, formal, and party dresses',
    icon: Crown,
    count: '234 items',
    color: 'bg-pink-500',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Shoes',
    description: 'Sneakers, heels, boots, and sandals',
    icon: Footprints,
    count: '189 items',
    color: 'bg-emerald-500',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Accessories',
    description: 'Bags, scarves, and hats',
    icon: ShoppingBag,
    count: '98 items',
    color: 'bg-purple-500',
    image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Jewelry',
    description: 'Necklaces, earrings, and bracelets',
    icon: Gem,
    count: '67 items',
    color: 'bg-yellow-500',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Watches',
    description: 'Fashion and luxury timepieces',
    icon: Watch,
    count: '43 items',
    color: 'bg-indigo-500',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing pre-loved fashion pieces organized by category. 
            From vintage finds to modern classics, there's something for every style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/browse?category=${encodeURIComponent(category.name)}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={category.image}
                      alt={category.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-full ${category.color} text-white shadow-lg`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                        Browse items →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our community and start swapping! List your items and discover unique pieces from other fashion lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/add-item">
                <motion.button 
                  className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  List an Item
                </motion.button>
              </Link>
              <Link to="/browse">
                <motion.button 
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse All Items
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;