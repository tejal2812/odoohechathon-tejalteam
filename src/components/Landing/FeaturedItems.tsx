import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Heart } from 'lucide-react';
import { mockItems } from '../../data/mockData';
import { Link } from 'react-router-dom';

const FeaturedItems: React.FC = () => {
  const featuredItems = mockItems.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Items
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover amazing pre-loved pieces from our community
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    >
                      <Heart className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {item.condition}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Coins className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">{item.pointValue} points</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.size}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/browse">
            <motion.button
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Items
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedItems;