/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Div, Text, SectionTitle } from './library'

export default ({ fontFamilies = [] }) => (
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(fontFamilies).length} 种字体`}
      description={`${fontFamilies.length} 处声明`}
    />

    {uniq(fontFamilies).map(fontFamily => (
      <div
        key={fontFamily}
        sx={{ borderBottom: '1px solid', borderColor: 'gray', py: 4 }}
      >
        <Text mb={3} fontWeight="bold" children={fontFamily} />
        <Div fontSize={[4, 5, 6]} fontWeight="bold" style={{ fontFamily }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          <span style={{ fontWeight: 400 }}>abcdefghijklmnopqrstuvwxyz</span>
          <br />
          <span style={{ fontWeight: 400 }}>0123456789!@#$%^&*()-+{}[];</span>
        </Div>
      </div>
    ))}
  </Div>
)
