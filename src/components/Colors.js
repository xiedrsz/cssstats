/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Flex, Color, SectionTitle } from './library'

export default ({ colors = [] }) => (
  <Div>
    <h2 sx={{ fontSize: 5 }}>颜色</h2>
    <SectionTitle
      title={`${uniq(colors).length} 种颜色`}
      description="按源代码中的声明顺序排列"
    />
    <Flex
      wrap="wrap"
      mb={5}
      children={uniq(colors).map(color => (
        <Div key={color} mb={2} width={[2 / 5, 1 / 3, 1 / 8]}>
          <Color color={color} />
        </Div>
      ))}
    />
    <SectionTitle
      title={`${colors.length} 个地方有颜色声明`}
      description="按同类值进行排序"
    />
    <Flex
      wrap="wrap"
      children={colors.sort().map((color, i) => (
        <Div
          key={color * i}
          children="A"
          fontSize="32px"
          fontWeight={900}
          color={color}
          title={color}
        />
      ))}
    />
  </Div>
)
