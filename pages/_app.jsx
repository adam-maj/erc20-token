import Head from 'next/head'
import NotificationProvider from '../components/contexts/NotificationContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (    
    <NotificationProvider>
      <Head>
        <title>Von Token</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://vontoken.vercel.app" />
        <meta proprety="og:title" content="Von Token" />
        <meta property="og:description" content="Not from 63rd" />
        <meta property="og:image" content="https://vontoken.vercel.app/Live.png" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@MamudarAdam"/>
        <meta proprety="twitter:title" content="Von Token" />
        <meta property="twitter:description" content="Not from 63rd" />

        {/* Use font awesome */}
        <script src="https://kit.fontawesome.com/ac50c301c8.js" crossOrigin="anonymous"></script>

        {/* Get google font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </NotificationProvider>
  )
}

export default MyApp
