import React from 'react'
import uniq from 'lodash.uniq'

import { intComma } from 'humanize-plus'

import { Div, SectionTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const total = intComma(data.total)
  const unique = intComma(data.unique)

  const properties = [
    'display',
    'float',
    'width',
    'height',
    'max-width',
    'min-width',
    'max-height',
    'min-height'
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({
      x: p,
      y: uniq(data.properties[p] || []).length
    }))
  ]

  return (
    <Div pt={[4, 5, 6]}>
      <SectionTitle
        title="声明的总数与种数对比"
        description={
          <span>
            总共有 <b>{total}</b> 处声明, 但仅有 <b>{unique}</b> 种。
          </span>
        }
      />
      <p>
        {/* The comparison charts below can help you identify which properties might
        be the best candidates for creating abstractions. */}
        下面的对比图表可以帮助您确定哪些属性可能成为创建抽象的最佳候选者。
      </p>
      <SectionTitle title="结构布局" />

      <GroupedBarChart data={formattedData} />
    </Div>
  )
}
