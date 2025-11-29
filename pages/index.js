// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import Footer from '../components/Footer';
import { getAllNews } from '../utils/newsAPI';

export default function Home({ initialNews }) {

  const displayArticles = initialNews.slice(0, 4);

  return (
    <div className="min-h-screen bg-yellow-50">
      <Head>
        <title>News & Updates</title>
        <meta name="description" content="Latest News " />
      </Head>

      <Header />
      
      <main className="container-custom py-8">
        {}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b pb-4">
            Latest News
          </h2>
          <NewsGrid articles={displayArticles} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const initialNews = await getAllNews('general', 4);
    
    return {
      props: {
        initialNews: initialNews || []
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    
    return {
      props: {
        initialNews: []
      }
    };
  }
}