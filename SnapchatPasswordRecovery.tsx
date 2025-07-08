import React from 'react';
import { Ghost } from 'lucide-react';

const SnapchatPasswordRecovery: React.FC = () => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-yellow-400 p-6 flex items-center justify-center">
        <Ghost className="text-white h-16 w-16" />
      </div>
      
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Recover Your Snapchat Password
        </h1>
        
        <p className="text-gray-600 mb-6 text-center">
          Forgot your Snapchat password? Click the button below to be redirected to Snapchat's official password recovery page.
        </p>
        
        <div className="space-y-4">
          <a 
            href="https://accounts.snapchat.com/accounts/password_reset_options" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-center"
          >
            Reset Snapchat Password
          </a>
          
          <div className="text-sm text-gray-500 text-center">
            <p>You will be redirected to Snapchat's official website</p>
            <p className="mt-2">
              Don't have an account? <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Create one</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <div className="text-xs text-gray-500 text-center">
          <p>This is not an official Snapchat website.</p>
          <p>For security, always verify you're on snapchat.com before entering credentials.</p>
        </div>
      </div>
    </div>
  );
};

export default SnapchatPasswordRecovery;