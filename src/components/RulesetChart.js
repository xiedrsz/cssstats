import React from 'react'

import { Div, SectionTitle } from './library'

import LineChart from './LineChart'

export default ({ data }) => (
  <Div mt={4}>
    <SectionTitle
      title="规则集大小"
      description="每个规则集(选择器)的声明数"
    />

    <LineChart data={data} />
  </Div>
)
