import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, Heart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block xl:inline">Sustainable Fashion</span>{' '}
                <span className="block text-emerald-600 xl:inline">Starts Here</span>
              </motion.h1>
              
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join thousands of fashion lovers swapping clothes, reducing waste, and discovering unique pieces. 
                Earn points, save money, and help save the planet.
              </motion.p>

              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <Link to="/signup">
                    <motion.button
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Swapping
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/browse">
                    <motion.button
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Browse Items
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                className="mt-8 grid grid-cols-3 gap-4 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    <Recycle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">Eco-Friendly</p>
                    <p className="text-sm text-gray-500">Reduce waste</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Heart className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">Quality Items</p>
                    <p className="text-sm text-gray-500">Curated selection</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-900">Community</p>
                    <p className="text-sm text-gray-500">Join 10k+ users</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Sustainable fashion"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;