import React from 'react';
import { motion } from 'framer-motion';
import { User, Package, RefreshCw, Coins } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockItems, mockSwapRequests } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const userItems = mockItems.filter(item => item.uploaderId === user.id);
  const userSwapRequests = mockSwapRequests.filter(req => req.requesterId === user.id);

  const stats = [
    { name: 'Points Balance', value: user.points, icon: Coins, color: 'text-emerald-600' },
    { name: 'Items Listed', value: userItems.length, icon: Package, color: 'text-blue-600' },
    { name: 'Active Swaps', value: userSwapRequests.length, icon: RefreshCw, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={user.profileImage}
                  alt={user.username}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.username}!</h1>
                <p className="text-gray-600">{user.email}</p>
                {user.role === 'admin' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-1">
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">My Listings</h2>
            <div className="space-y-4">
              {userItems.length > 0 ? (
                userItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                    <img
                      className="w-12 h-12 rounded-lg object-cover"
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.pointValue} points</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No items listed yet</p>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Swap Requests</h2>
            <div className="space-y-4">
              {userSwapRequests.length > 0 ? (
                userSwapRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{request.itemTitle}</h3>
                      <p className="text-sm text-gray-500">Requested on {request.createdAt}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No swap requests yet</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;