import '../styles/globals.css'
import Link from 'next/Link'
function MyApp({ Component, pageProps }) {
  return(
    <div>
    <nav className="border-b p-6">
      <p className="text-2xl font-bold">NFT MarketPlace</p>
      <div className="flex mt-4" >
          <Link href="/">
            <a className="mr-6 text-blue-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-500">Créer un objet</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-4 text-blue-500">Mes Objets</a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-4 text-blue-500">Dashboard créateur</a>
          </Link>
      </div>
    </nav>
       <Component {...pageProps} />

  </div>
  )
}

export default MyApp
