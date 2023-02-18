import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Payment Website</title>
        <meta name="description" content="Secure payment processing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to our Payment Website</h1>
        <p>Securely process your payments with us.</p>
        <button>Sign up</button>
      </main>

      <footer>
        <p>© 2023 Payment Website. All rights reserved.</p>
      </footer>
    </div>
  )
}