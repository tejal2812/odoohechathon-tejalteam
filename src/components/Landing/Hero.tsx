import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, Heart, Users, Sparkles, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElements = [
    { icon: Heart, delay: 0, x: 100, y: 50 },
    { icon: Recycle, delay: 1, x: -80, y: 80 },
    { icon: Star, delay: 2, x: 120, y: -60 },
    { icon: Sparkles, delay: 0.5, x: -100, y: -40 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{ left: `${50 + element.x}px`, top: `${50 + element.y}px` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <element.icon className="w-16 h-16 text-emerald-500" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-4 py-2 rounded-full border border-emerald-200"
            >
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Join 10,000+ Fashion Lovers</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-gray-900">Sustainable</span>
              <span className="block gradient-text">Fashion</span>
              <span className="block text-gray-900">Revolution</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your wardrobe sustainably. Swap, earn points, and discover unique pieces while reducing fashion waste.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link to="/signup">
                <motion.button
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              
              <Link to="/browse">
                <motion.button
                  className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="flex items-center">
                    Explore Items
                    <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Recycle, label: 'Items Swapped', value: '15K+', color: 'text-emerald-600' },
                { icon: Users, label: 'Happy Users', value: '10K+', color: 'text-blue-600' },
                { icon: Heart, label: 'CO2 Saved', value: '50T+', color: 'text-purple-600' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg mb-2 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  className="w-full h-[600px] object-cover"
                  src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sustainable fashion"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Eco-Friendly</div>
                    <div className="text-xs text-gray-600">100% Sustainable</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Community</div>
                    <div className="text-xs text-gray-600">Fashion Lovers</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;