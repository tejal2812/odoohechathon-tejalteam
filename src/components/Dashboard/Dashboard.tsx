import React from 'react';
import { motion } from 'framer-motion';
import { User, Package, RefreshCw, Coins, TrendingUp, Award, Calendar, Eye } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockItems, mockSwapRequests } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const userItems = mockItems.filter(item => item.uploaderId === user.id);
  const userSwapRequests = mockSwapRequests.filter(req => req.requesterId === user.id);

  const stats = [
    { 
      name: 'Points Balance', 
      value: user.points, 
      icon: Coins, 
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      change: '+12%',
      changeColor: 'text-emerald-600'
    },
    { 
      name: 'Items Listed', 
      value: userItems.length, 
      icon: Package, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      change: '+3',
      changeColor: 'text-blue-600'
    },
    { 
      name: 'Active Swaps', 
      value: userSwapRequests.length, 
      icon: RefreshCw, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      change: '+1',
      changeColor: 'text-purple-600'
    },
    { 
      name: 'Profile Views', 
      value: 247, 
      icon: Eye, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      change: '+18%',
      changeColor: 'text-orange-600'
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500 to-blue-600"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <motion.img
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                  src={user.profileImage}
                  alt={user.username}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <motion.h1 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  Welcome back, {user.username}! 👋
                </motion.h1>
                <p className="text-gray-600 mb-2">{user.email}</p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  {user.role === 'admin' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200">
                      <Award className="w-3 h-3 mr-1" />
                      Admin
                    </span>
                  )}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 border border-emerald-200">
                    <Calendar className="w-3 h-3 mr-1" />
                    Member since 2024
                  </span>
                </div>
              </div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold gradient-text">{user.points}</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="stats-card relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-full transform translate-x-6 -translate-y-6`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div className={`text-sm font-medium ${stat.changeColor} flex items-center space-x-1`}>
                      <TrendingUp className="w-3 h-3" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Listings */}
          <motion.div 
            className="glass-card rounded-3xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Listings</h2>
              <motion.button
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.button>
            </div>
            
            <div className="space-y-4">
              {userItems.length > 0 ? (
                userItems.slice(0, 3).map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <motion.img
                      className="w-16 h-16 rounded-xl object-cover shadow-md"
                      src={item.images[0]}
                      alt={item.title}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">{item.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Coins className="w-3 h-3 text-emerald-600" />
                        <span className="text-sm text-emerald-600 font-medium">{item.pointValue} points</span>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">No items listed yet</p>
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    List Your First Item
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            className="glass-card rounded-3xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <motion.button
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.button>
            </div>
            
            <div className="space-y-4">
              {userSwapRequests.length > 0 ? (
                userSwapRequests.map((request, index) => (
                  <motion.div 
                    key={request.id} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: -4 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">{request.itemTitle}</h3>
                      <p className="text-xs text-gray-500 mt-1">Requested on {request.createdAt}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.status}
                    </span>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <RefreshCw className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">No recent activity</p>
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Swapping
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;