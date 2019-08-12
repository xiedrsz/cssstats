import React from 'react'

import { Flex, Div, Text, Link, SectionTitle, SlabStat } from './library'

import LineChart from './LineChart'

export default ({ data, average, max }) => (
  <Div>
    {/* <SectionTitle title="Specificity" /> */}
    <SectionTitle title="特异性评分" />

    <Flex alignItems="top" my={3} wrap={['wrap', 'wrap', 'nowrap']}>
      <SlabStat mr={5} title="平均分" stat={average} />
      <SlabStat mr={5} title="最高分" stat={max} />
      <Text mt={0} style={{ lineHeight: 1.5 }} width={1}>
        根据源代码的顺序，每个选择器的特异性得分以10为基础。一般地，较低的得分以及较平的曲线可维护性更好。
        <Link
          ml={2}
          href="https://csswizardry.com/2014/10/the-specificity-graph/"
        >
          了解更多
        </Link>
      </Text>
    </Flex>

    <LineChart data={data} />
  </Div>
)
