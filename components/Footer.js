import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight">LiveHindustan</span>
                <span className="text-xs text-gray-300 font-medium">Latest News & Updates</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              India's most trusted news platform bringing you breaking news, latest updates, 
              and in-depth analysis from across the nation and world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'National', 'Politics', 'Business', 'Sports', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`} className="text-gray-300 hover:text-white text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>📧 contact@xyz.com</p>
              <p>📞 +91-0000000000</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}