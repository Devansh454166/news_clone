// components/NewsCard.js
import Link from 'next/link';

export default function NewsCard({ article }) {
  const articleId = article.title
    ?.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50) || 'article';

  // 🔥 Handle broken images
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop';
    e.target.onerror = null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-200">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop'}
          alt={article.title || 'News article'}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Source and Date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {article.source?.name || 'LiveHindustan'}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {article.title || 'No title available'}
        </h3>

        {/* 🔥 FULL CONTENT/DESCRIPTION */}
        <div className="text-gray-700 mb-4 flex-grow leading-relaxed">
          {article.content ? (
            <div className="whitespace-pre-line">
              {article.content}
            </div>
          ) : (
            <p>{article.description || 'Read the full article for complete details and analysis.'}</p>
          )}
        </div>

        {/* Author */}
        {article.author && (
          <p className="text-sm text-gray-500 mb-4 border-t pt-3">
            <strong>Author:</strong> {article.author}
          </p>
        )}

        {/* Read More Button */}
        <Link 
          href={`/article/${articleId}`}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-center font-semibold mt-4"
        >
          Read Complete Story
        </Link>
      </div>
    </div>
  );
}