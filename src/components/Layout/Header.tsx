import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, ShoppingBag, Plus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.header 
      className="bg-white shadow-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="text-2xl font-bold text-emerald-600"
              whileHover={{ scale: 1.05 }}
            >
              ReWear
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Browse Items
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Categories
            </Link>
            {user && (
              <Link to="/add-item" className="text-gray-600 hover:text-emerald-600 transition-colors">
                List Item
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-emerald-600 font-semibold">{user.points} points</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Link to="/add-item">
                    <motion.button 
                      className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link to="/dashboard">
                    <motion.button 
                      className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <User className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={handleLogout}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LogOut className="w-5 h-5" />
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <motion.button 
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button 
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;