import React from 'react'
import uniq from 'lodash.uniq'

import { intComma } from 'humanize-plus'

import { Div, SectionTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const total = intComma(data.total)
  const unique = intComma(data.unique)

  const properties = [
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom'
    // 'margin',
    // 'margin-left',
    // 'margin-right',
    // 'margin-top',
    // 'margin-bottom',
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({
      x: p,
      y: uniq(data.properties[p] || []).length
    }))
  ]

  return (
    <Div mt={4}>
      <SectionTitle title="内间距" />

      <GroupedBarChart data={formattedData} />
    </Div>
  )
}
