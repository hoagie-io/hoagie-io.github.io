import React from 'react'
import ContentCard from '../components/content_card'
import dottedLine from '../components/dotted_line.svg'
import hoagieIcon from '../components/footer_hoagie.svg'
import style from './learn.module.scss'

const introText = (
  <>
    <b>Hoagie’s</b> activities are structured to promote learning and doing
    together.
  </>
)
const learningText = (
  <>
    We meet on a regular basis to discuss and explore core concepts in{' '}
    <b>design</b> and <b>development</b>. <br />
    <br />
    Our peer-led discussions cover topics on good design principles, UI kits and
    usability, human-centered research, etc. <br />
    <br />
    We also hold <b>workshops</b> to practice using Figma, CSS, web development
    frameworks, and other important design technologies.
  </>
)

const doingText = (
  <>
    We have a few project teams that our members can join to <b>collaborate</b>{' '}
    with others and <b>practice</b> their design skills.
    <br />
    <br />
    Our projects aim to give meaningful and useful experiences to Princeton
    students.
    <br />
    <br />
    Examples of potential projects: unifying the Princeton student app
    experience, researching and solutioning for student social experiences in
    the virtual format, and curating a Hoagie UI design system.
  </>
)

const togetherText = (
  <>
    Our culture embraces <b>empathy</b> and <b>kindness</b> when working
    together and designing digital experiences for our community.
    <br />
    <br />
    Instead of a competitive and stressful “hero” culture, we strive to build
    each other up and learn from one another.
    <br />
    <br />
    Together we’ll continue to explore what lessons and meaningful experiences
    design can teach us.
  </>
)

const doingTitle = 'Doing'
const learningTitle = 'Learning'
const togetherTitle = 'Together'

const Learn = () => {
  return (
    <div id="learn" className={style.section + ' section'}>
      <img src={dottedLine} />
      <ContentCard text={introText} />
      <img src={dottedLine} />
      <ContentCard
        title={learningTitle}
        color="green"
        text={learningText}
      />
      <img src={dottedLine} />
      <ContentCard
        title={doingTitle}
        color="red"
        text={doingText}
      />
      <img src={dottedLine} />
      <ContentCard
        title={togetherTitle}
        color="purple"
        text={togetherText}
      />
      <a href="#intro"><img width="65px" src={hoagieIcon} className={style.footerIcon} /></a>
    </div>
  )
}

export default Learn
