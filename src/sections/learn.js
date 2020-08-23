import React from 'react'
import ContentCard from '../components/content_card'
import dottedLine from '../components/dotted_line.svg'
import hoagieIcon from '../components/footer_hoagie.svg'
import style from './learn.module.scss'
import variables from '../styles/variables.scss'

const Learn = () => {
  return (
    <div className={style.section + ' section'}>
      <img src={dottedLine} />
      <ContentCard />
      <img src={dottedLine} />
      <ContentCard color={variables.cardIconGreen} />
      <img src={dottedLine} />
      <ContentCard color={variables.cardIconRed} />
      <img src={dottedLine} />
      <ContentCard color={variables.cardIconPurple} />
      <img src={hoagieIcon} className={style.footerIcon} />
    </div>
  )
}

export default Learn
