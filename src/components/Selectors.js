/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Div, Flex, GiantSlabStat } from './library'

export default ({ classes, id, pseudoClass, pseudoElement }) => {
  return (
    <Div>
      {/* <H2 fontSize={2} mb={2} children="Total Selectors by Type" /> */}
      <H2 fontSize={2} mb={2} children="选择器统计" />
      <p sx={{ opacity: 0.7, mt: 0, mb: 0, fontSize: 1, lineHeight: 1.5 }}>
        {/* Selectors are the part of a CSS ruleset that describes what elements in
        a document the rule will match. */}
        选择器是CSS规则集的一部分，它描述规则将匹配文档中的哪些元素。
      </p>

      <Flex wrap="wrap">
        <div sx={{ width: ['50%', '25%'] }}>
          <GiantSlabStat title="ID" stat={intComma(id)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          {/* <GiantSlabStat title="Class" stat={intComma(classes)} /> */}
          <GiantSlabStat title="类" stat={intComma(classes)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          {/* <GiantSlabStat title="Pseudo Class" stat={intComma(pseudoClass)} /> */}
          <GiantSlabStat title="伪类" stat={intComma(pseudoClass)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          {/* <GiantSlabStat title="Pseudo Element" stat={intComma(pseudoElement)} /> */}
          <GiantSlabStat title="伪元素" stat={intComma(pseudoElement)} />
        </div>
      </Flex>
    </Div>
  )
}
