import React from 'react'
import style from './content_card.module.scss'

const ContentCard = props => {
  return (
    <div className={style.container}>
      <div className={style.title_section}>
        <h1>Placeholder</h1>
        <svg
          width="87"
          height="84"
          viewBox="0 0 87 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="59.6249"
            height="59.6249"
            rx="5"
            transform="matrix(0.719782 -0.694201 0.719782 0.694201 0.38147 41.7334)"
            fill={props.color}
          />
          <rect
            width="19.875"
            height="19.875"
            rx="5"
            transform="matrix(0.719782 0.694201 -0.719782 0.694201 43.0107 27.6582)"
            fill="white"
          />
        </svg>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto
        ipsum quia deserunt? Minima blanditiis perferendis accusamus deleniti
        aperiam non tempore numquam amet, architecto laborum aut nam, tenetur
        adipisci quos.
      </p>
    </div>
  )
}

export default ContentCard
