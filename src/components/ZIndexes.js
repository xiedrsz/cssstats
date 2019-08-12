import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Text, SectionTitle } from './library'

export default ({ zIndexes = [] }) => (
  <Div py={[4, 5, 6]}>
    <SectionTitle
      title={`${uniq(zIndexes).length} 种 z-index 层级`}
      description={`${zIndexes.length} 处`}
    />

    {uniq(zIndexes).map(zIndex => (
      <Text
        key={zIndex}
        mb={3}
        mr={3}
        inline={true}
        fontWeight="bold"
        children={zIndex}
      />
    ))}
  </Div>
)
