import styled from 'styled-components/native'
import { Text } from 'react-native'

import typography, { TypographyVariants } from '../../styles/typography'

type TypoTextProps = {
  variant?: TypographyVariants
}

const Typography = styled(Text)<TypoTextProps>`
  ${({ variant }) => typography[variant || 'p']};
  
`

export default Typography;