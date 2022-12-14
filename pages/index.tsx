import type { NextPage } from 'next'
import Head from 'next/head'


//COMPONENTS
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const Home: NextPage = () => {
  return (
  <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
    <Head>
      <title>Ankit's Portfolio</title>
    </Head>

    <Header />

    <section id='hero' className='snap-start'>
      <Hero />
    </section>

    <section id='about' className='snap-center'>
      <About />
    </section>


    {/* Experience */}


    {/* Skills */}


    {/* Projectes */}


    {/* Contact Me */}

  </div>
  )
}

export default Home
