import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import HeroSection from '@/components/Hero'
import NewArticles from '@/components/NewArticles'
import TrendingArticle from '@/components/TrendingArticles'
import { createClient } from '../prismicio'

export default function Home({pages}) {

  return (
    <>
    <NavBar />
      <main className="main">
        <div className="container">
          <HeroSection />
          <NewArticles />
          <TrendingArticle pages={pages}/>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const pages = await client.getAllByType('trending_article')

  return {
    props: { pages },
  }
}
