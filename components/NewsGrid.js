// components/NewsGrid.js
import NewsCard from './NewsCard';

export default function NewsGrid({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No news articles available at the moment.</p>
        <p className="text-gray-400 text-sm mt-2">Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {articles.map((article, index) => (
        <NewsCard 
          key={article.url || index} 
          article={article} 
        />
      ))}
    </div>
  );
}