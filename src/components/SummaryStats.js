/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Flex, GiantSlabStat } from './library'

export default ({ rules, selectors, declarations, properties }) => (
  <div
    sx={{
      mt: 3
      //p: 4,
      //borderRadius: '7px',
      //bg: '#1d1d1d',
      //color: '#ffffff'
    }}
  >
    {/* <H2 fontSize={2} mb={2} children="Overview" /> */}
    <H2 fontSize={2} mb={2} children="概览" />
    <Flex wrap="wrap">
      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        {/* <GiantSlabStat title="Rules" stat={intComma(rules)} /> */}
        <GiantSlabStat title="规则" stat={intComma(rules)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        {/* <GiantSlabStat title="Selectors" stat={intComma(selectors)} /> */}
        <GiantSlabStat title="选择器" stat={intComma(selectors)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        {/* <GiantSlabStat title="Declarations" stat={intComma(declarations)} /> */}
        <GiantSlabStat title="声明" stat={intComma(declarations)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        {/* <GiantSlabStat title="Properties" stat={intComma(properties)} /> */}
        <GiantSlabStat title="属性" stat={intComma(properties)} />
      </Flex>
    </Flex>
  </div>
)
