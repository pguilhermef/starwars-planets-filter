import PlanetsProvider from '../contexts/PlanetsProvider'
import NameFilter from '../components/NameFilter'
import NumberFilter from '../components/NumberFilter'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import starWars from '../public/images/StarWars.png'

export default function Home() {
  return (
    <PlanetsProvider>
      <div className={styles.container}>
        <body>
          <Image src={starWars} alt='star wars logo' className='md:mb-6'/>
          <NameFilter />
          <NumberFilter />
          <Table />
        </body>
      </div>
    </PlanetsProvider>
  )
}
