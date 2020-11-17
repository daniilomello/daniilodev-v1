import Head from 'next/head'

import Avatar from '../components/Avatar/avatar.component'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danilo Mello - Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Avatar />
      </header>

      <main>
        <h1>Olá Mundo</h1>
      </main>

      <footer></footer>
    </div>
  )
}
