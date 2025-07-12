import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Coins, User, Calendar, Package, CheckCircle, Clock } from 'lucide-react';
import { mockItems } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSwapModal, setShowSwapModal] = useState(false);
  
  const item = mockItems.find(item => item.id === id);
  
  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Item not found</h2>
          <Link to="/browse" className="text-emerald-600 hover:text-emerald-700">
            Back to browse
          </Link>
        </div>
      </div>
    );
  }

  const handleSwapRequest = () => {
    if (!user) {
      // Redirect to login
      return;
    }
    setShowSwapModal(true);
  };

  const handlePointsRedeem = () => {
    if (!user) {
      // Redirect to login
      return;
    }
    if (user.points >= item.pointValue) {
      // Process redemption
      alert(`Successfully redeemed ${item.title} for ${item.pointValue} points!`);
    } else {
      alert(`You need ${item.pointValue - user.points} more points to redeem this item.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/browse" className="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to browse
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                className="w-full h-96 object-cover"
                src={item.images[currentImageIndex]}
                alt={item.title}
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {item.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-emerald-500' : 'border-gray-200'
                    }`}
                  >
                    <img className="w-full h-full object-cover" src={image} alt={`${item.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Item Details */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status === 'available' ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Available
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 mr-1" />
                        {item.status}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg font-semibold text-emerald-600">{item.pointValue} points</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">Size</span>
                  <p className="font-medium">{item.size}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-sm font-medium text-gray-700">Category</span>
                  <p className="text-gray-900">{item.category} • {item.type}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Condition</span>
                  <p className="text-gray-900">{item.condition}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {item.status === 'available' && user && item.uploaderId !== user.id && (
                <div className="flex space-x-4">
                  <motion.button
                    onClick={handleSwapRequest}
                    className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Swap
                  </motion.button>
                  <motion.button
                    onClick={handlePointsRedeem}
                    disabled={user.points < item.pointValue}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                      user.points >= item.pointValue
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={user.points >= item.pointValue ? { scale: 1.02 } : {}}
                    whileTap={user.points >= item.pointValue ? { scale: 0.98 } : {}}
                  >
                    Redeem with Points
                  </motion.button>
                </div>
              )}
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.uploaderName}</p>
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Listed on {new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Swap Modal */}
      {showSwapModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-lg p-6 max-w-md w-full"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Item Swap</h3>
            <p className="text-gray-600 mb-6">
              Send a swap request to {item.uploaderName} for "{item.title}". They will review your profile and items before accepting.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSwapModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowSwapModal(false);
                  alert('Swap request sent successfully!');
                }}
                className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Send Request
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ItemDetail;