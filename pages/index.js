import Head from 'next/head'
import Header from '../components/Header/header.component'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danilo Mello - Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <h1>Olá Mundo</h1>
      </main>

      <footer></footer>
    </div>
  )
}
