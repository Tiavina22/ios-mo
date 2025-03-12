import { Outlet, Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import { cn } from '../utils/cn';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Examples', path: '/examples' },
  { name: 'Documentation', path: '/docs' },
  { name: 'Installation', path: '/installation' },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                iOS Mo
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        location.pathname === item.path
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/Tiavina22/ios-mo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}