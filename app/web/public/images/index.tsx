import React, { useState, useCallback } from 'react'
import { observer, useLocalStore } from 'web-utils'

const award = ['@src/assets/images/awarding/AWARDING_page1.png']
const perusahaan = ['@src/assets/images/awarding/Perusahaan/1.png']
const internasional = ['@src/assets/images/awarding/Internasional/gaps.jpg']
const nasional = [
  '@src/assets/images/awarding/Nasional/bp.jpg',
  '@src/assets/images/awarding/Nasional/ggp.jpg',
  '@src/assets/images/awarding/Nasional/ssa.png',
  '@src/assets/images/awarding/Nasional/ssjd.jpg',
]

for (let i = 2; i <= 23; i++) {
  award.push(`@src/assets/images/awarding/AWARDING_page${i}.png`)
  if (perusahaan.length < 15) {
    perusahaan.push(`@src/assets/images/awarding/Perusahaan/${i}.png`)
  }
}

export default observer(({ style }: any) => {
  const meta = useLocalStore(() => ({
    award: {
      list: award,
      showItem: 3 as number,
      expand: false as boolean,
    },
    perusahaan: {
      list: perusahaan,
      showItem: 3 as number,
      expand: false as boolean,
    },
    nasional: {
      list: nasional,
      showItem: 3 as number,
      expand: false as boolean,
    },
    internasional: {
      list: internasional,
      showItem: 3 as number,
      expand: false as boolean,
    },
  }))

  const showMore = useCallback(() => {
    if (meta.award.showItem === 3) {
      meta.award.showItem = award.length
      meta.award.expand = true
    } else {
      meta.award.showItem = 3
      meta.award.expand = false
    }
  }, [meta.award.expand, meta.award.showItem])

  const showMoreNasional = useCallback(() => {
    if (meta.nasional.showItem === 3) {
      meta.nasional.showItem = nasional.length
      meta.nasional.expand = true
    } else {
      meta.nasional.showItem = 3
      meta.nasional.expand = false
    }
  }, [meta.nasional.expand, meta.nasional.showItem])

  const showMoreInternasional = useCallback(() => {
    if (meta.internasional.showItem === 3) {
      meta.internasional.showItem = internasional.length
      meta.internasional.expand = true
    } else {
      meta.internasional.showItem = 3
      meta.internasional.expand = false
    }
  }, [meta.internasional.expand, meta.internasional.showItem])

  const showMorePerusahaan = useCallback(() => {
    if (meta.perusahaan.showItem === 3) {
      meta.perusahaan.showItem = perusahaan.length
      meta.perusahaan.expand = true
    } else {
      meta.perusahaan.showItem = 3
      meta.perusahaan.expand = false
    }
  }, [meta.perusahaan.expand, meta.perusahaan.showItem])

  return (
    <div className="section achievement" id="achievement" style={style}>
      <div className="title">
        <h4>ACHIEVEMENT</h4>
      </div>
      {/* Internasional */}
      <h2>Internasional</h2>
      <div className="few-image">
        <img className="image" src={meta.internasional.list} alt="Awarding" />
      </div>
      {/* Nasional */}
      <h2>Nasional</h2>
      <div className="grid-image">
        {meta.nasional.list
          .slice(0, meta.nasional.showItem)
          .map((item, idx) => (
            <img className="image" src={item} alt="Awarding" />
          ))}
      </div>
      <p>
        <button className="button" onClick={showMoreNasional}>
          {meta.nasional.expand ? (
            <div>Show less</div>
          ) : (
            <div>Show more</div>
          )}
        </button>
      </p>
      {/* Perusahaan */}
      <h2>Perusahaan</h2>
      <div className="grid-image">
        {meta.perusahaan.list
          .slice(0, meta.perusahaan.showItem)
          .map((item, idx) => (
            <img className="image" src={item} alt="Awarding" />
          ))}
      </div>
      <p>
        <button className="button" onClick={showMorePerusahaan}>
          {meta.perusahaan.expand ? (
            <div>Show less</div>
          ) : (
            <div>Show more</div>
          )}
        </button>
      </p>
      {/* Kompartemen */}
      <h2>Kompartemen</h2>
      <div className="grid-image">
        {meta.award.list.slice(0, meta.award.showItem).map((item, idx) => (
          <img className="image" src={item} alt="Awarding" />
        ))}
      </div>
      <p>
        <button className="button" onClick={showMore}>
          {meta.award.expand ? <div>Show less</div> : <div>Show more</div>}
        </button>
      </p>
    </div>
  )
})
