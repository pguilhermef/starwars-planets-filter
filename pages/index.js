import PlanetsProvider from '../contexts/PlanetsProvider'
import NameFilter from '../components/NameFilter'
import NumberFilter from '../components/NumberFilter'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PlanetsProvider>
      <div className={styles.container}>
        <NameFilter />
        <NumberFilter />
        <Table />
      </div>
    </PlanetsProvider>
  )
}
