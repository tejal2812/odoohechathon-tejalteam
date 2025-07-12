import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Heart, Star, TrendingUp, Eye } from 'lucide-react';
import { mockItems } from '../../data/mockData';
import { Link } from 'react-router-dom';

const FeaturedItems: React.FC = () => {
  const featuredItems = mockItems.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2 rounded-full border border-emerald-200 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Trending Now</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover handpicked pieces from our community of fashion enthusiasts. 
            Each item tells a story and awaits its next chapter.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Link to={`/item/${item.id}`}>
                <div className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      src={item.images[0]}
                      alt={item.title}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.button
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                      </motion.button>
                      <motion.button
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
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                        {item.condition}
                      </motion.span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        <Coins className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-600">{item.pointValue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {item.uploaderName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{item.uploaderName}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{item.size}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <motion.span 
                          key={tag} 
                          className="tag"
                          whileHover={{ scale: 1.05 }}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div 
                      className="flex items-center justify-between pt-4 border-t border-gray-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-1">
                        <Coins className="w-5 h-5 text-emerald-600" />
                        <span className="text-lg font-bold text-emerald-600">{item.pointValue} points</span>
                      </div>
                      <motion.button
                        className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/browse">
            <motion.button
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold py-4 px-12 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center">
                Explore All Items
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedItems;