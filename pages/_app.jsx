import Head from 'next/head'
import NotificationProvider from '../components/contexts/NotificationContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (    
    <NotificationProvider>
      <Head>
        <title>Von Token</title>
        <link rel="icon" href="/favicon.ico" />

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
