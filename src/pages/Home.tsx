import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Beautiful iOS-style Modals
        <br />
        for React
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        A lightweight, accessible, and highly customizable modal component that brings the native iOS feel to your React applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/examples"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Examples
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          to="/installation"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}