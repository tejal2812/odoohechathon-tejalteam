import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Watch, Footprints, Crown, Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Clothing',
    icon: Shirt,
    count: '2,400+ items',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover unique pieces for every style'
  },
  {
    name: 'Accessories',
    icon: ShoppingBag,
    count: '800+ items',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500',
    image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete your look with perfect accessories'
  },
  {
    name: 'Jewelry',
    icon: Gem,
    count: '500+ items',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-500',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sparkle with sustainable luxury'
  },
  {
    name: 'Shoes',
    icon: Footprints,
    count: '600+ items',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Step into sustainable fashion'
  }
];

const Categories: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2 rounded-full border border-emerald-200 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Shop by Category</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="gradient-text">Perfect Style</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse through carefully curated categories to discover amazing pre-loved pieces 
            that match your unique style and values.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Link to={`/browse?category=${encodeURIComponent(category.name)}`}>
                <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={category.image}
                      alt={category.name}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <motion.div 
                        className={`p-3 rounded-2xl ${category.bgColor} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <category.icon className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Count Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-xs font-semibold text-gray-800">{category.count}</span>
                      </motion.div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <motion.div 
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-700" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Action Button */}
                    <motion.div 
                      className="flex items-center justify-between pt-4 border-t border-gray-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm font-medium text-gray-500">Explore Collection</span>
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-white">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Ready to Start Your Sustainable Journey?
              </motion.h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of fashion lovers making a positive impact on the planet, 
                one swap at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <motion.button 
                    className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join the Community
                  </motion.button>
                </Link>
                <Link to="/browse">
                  <motion.button 
                    className="px-8 py-4 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse Items
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;