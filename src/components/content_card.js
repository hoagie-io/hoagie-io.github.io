import React from 'react'
import style from './content_card.module.scss'

function showTitle(title, color) {
    if (title) return (
        <div className={style.title_section}>
              <h1>{title}</h1>
              <svg
                width="87"
                height="84"
                viewBox="0 0 87 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className={style[color]}
                  width="59.6249"
                  height="59.6249"
                  rx="5"
                  transform="matrix(0.719782 -0.694201 0.719782 0.694201 0.38147 41.7334)"
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
    )
}

const ContentCard = props => {
  return (
    <div className={style.container + " container"}>
      <div className={style.card}>
        {showTitle(props.title, props.color)}
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ContentCard
