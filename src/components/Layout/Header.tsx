import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, ShoppingBag, Plus, Bell, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const navItems = [
    { name: 'Browse Items', path: '/browse' },
    { name: 'Categories', path: '/categories' },
    ...(user ? [{ name: 'List Item', path: '/add-item' }] : []),
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              ReWear
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {user ? (
              <>
                {/* Points Display */}
                <motion.div 
                  className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-3 py-1 rounded-full border border-emerald-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-emerald-700">{user.points} points</span>
                </motion.div>

                {/* Notifications */}
                <motion.button
                  className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell className="w-5 h-5" />
                  <div className="notification-badge">3</div>
                </motion.button>

                {/* Add Item Button */}
                <Link to="/add-item">
                  <motion.button 
                    className="p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <motion.button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="profile-avatar flex items-center space-x-2 p-1 rounded-xl hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                      src={user.profileImage}
                      alt={user.username}
                    />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">{user.username}</span>
                  </motion.button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to="/dashboard" onClick={() => setIsProfileOpen(false)}>
                          <motion.div 
                            className="dropdown-item flex items-center space-x-2"
                            whileHover={{ x: 4 }}
                          >
                            <User className="w-4 h-4" />
                            <span>Dashboard</span>
                          </motion.div>
                        </Link>
                        {user.role === 'admin' && (
                          <Link to="/admin" onClick={() => setIsProfileOpen(false)}>
                            <motion.div 
                              className="dropdown-item flex items-center space-x-2"
                              whileHover={{ x: 4 }}
                            >
                              <ShoppingBag className="w-4 h-4" />
                              <span>Admin Panel</span>
                            </motion.div>
                          </Link>
                        )}
                        <hr className="my-2 border-gray-100" />
                        <motion.button
                          onClick={handleLogout}
                          className="dropdown-item flex items-center space-x-2 w-full text-red-600 hover:bg-red-50"
                          whileHover={{ x: 4 }}
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <motion.button 
                    className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button 
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-100 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                {user && (
                  <motion.div
                    className="pt-2 border-t border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <div className="px-4 py-2 text-sm text-gray-500">
                      {user.points} points available
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close profile dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;