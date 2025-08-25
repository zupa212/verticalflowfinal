import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AccessCodeProps {
  onAccessGranted: () => void;
}

const AccessCode: React.FC<AccessCodeProps> = ({ onAccessGranted }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const CORRECT_CODE = 'wiigta43';
  const MAX_ATTEMPTS = 5;

  useEffect(() => {
    // Check if user already has access
    const hasAccess = localStorage.getItem('verticalflow_access');
    if (hasAccess === 'granted') {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading
    setTimeout(() => {
      if (code.toLowerCase() === CORRECT_CODE.toLowerCase()) {
        // Grant access
        localStorage.setItem('verticalflow_access', 'granted');
        onAccessGranted();
      } else {
        setAttempts(prev => prev + 1);
        setError(`Incorrect code. ${MAX_ATTEMPTS - attempts - 1} attempts remaining.`);
        setCode('');
        
        if (attempts >= MAX_ATTEMPTS - 1) {
          setError('Too many attempts. Please refresh the page.');
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-purple-600 to-blue-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
          >
            <span className="text-white text-2xl font-bold">VF</span>
          </motion.div>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            VerticalFlow
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            Enter Access Code
          </motion.p>
        </div>

        {/* Access Code Form */}
        <motion.form
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
              Access Code
            </label>
            <input
              id="accessCode"
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your access code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-center text-lg font-mono tracking-wider"
              disabled={attempts >= MAX_ATTEMPTS}
              autoFocus
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || attempts >= MAX_ATTEMPTS || !code.trim()}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
              isLoading || attempts >= MAX_ATTEMPTS || !code.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transform hover:scale-105'
            }`}
            whileHover={!isLoading && attempts < MAX_ATTEMPTS && code.trim() ? { scale: 1.02 } : {}}
            whileTap={!isLoading && attempts < MAX_ATTEMPTS && code.trim() ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verifying...
              </div>
            ) : (
              'Enter Website'
            )}
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 pt-6 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            Protected by VerticalFlow Security
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AccessCode;
