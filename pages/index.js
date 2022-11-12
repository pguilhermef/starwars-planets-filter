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
        <body className='flex flex-col justify-center items-center'>
          <div>
            <Image src={starWars} alt='star wars logo' className='mt-10 mb-1'/>
          </div>
          <div className='bg-white p-2 w-full rounded flex justify-evenly items-center' >
            <NameFilter />
            <NumberFilter />
          </div>
          <div>
            <Table />
          </div>
        </body>
      </div>
    </PlanetsProvider>
  )
}
