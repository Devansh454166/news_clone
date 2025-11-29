import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setCurrentDate(new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight">LiveHindustan</span>
              <span className="text-xs text-gray-600 font-medium">Latest News & Updates</span>
            </div>
          </Link>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              {isClient ? currentDate : 'Loading date...'}
            </div>
            <div className="text-xs text-gray-500">
              New Delhi, 25°C
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <ul className="flex space-x-8 py-3 overflow-x-auto">
            {['National', 'Politics', 'Business', 'Sports', 'Entertainment'].map((category) => (
              <li key={category}>
                <Link 
                  href={`/#${category.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}