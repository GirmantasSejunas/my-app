import React from 'react'
import Box1 from '../box-1/box-1'
import Box2 from '../box-2/box-2'
import Box3 from '../box-3/box-3'
import styles from './section-c.module.scss'

const SectionC: React.FC = () => {
  return (
    <section id={styles.sectionC}>
    <Box1/>
    <Box2/>
    <Box3/>
  </section>
  )
}

export default SectionC