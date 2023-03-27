import '@/styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import "/home/michael/Desktop/Training/Training/the-newsroom/styles/index.css"
import reportWebVitals from "/home/michael/Desktop/Training/Training/the-newsroom/components/WebVitals";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

// reportWebVitals();