import colors from '../styles/colors';

const typography = {
  h1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: `${27}px`,
    lineHeight: `${26}px`,
    color: colors.white
  },
  h2: {
    fontFamily:'Poppins_500Medium',
    fontSize: `${24}px`,
    lineHeight: `${26}px`,
    color: colors.black
  },
  h3: {
    fontFamily: 'Poppins_500Medium',
    fontSize: `${24}px`,
    lineHeight: `${26}px`,
    color: colors.white
  },
  p: {
    fontFamily: ' Poppins_400Regular',
    fontSize: `${16}px`,
    lineHeight: `${20}px`,
    color: colors.white
  }
}

export type TypographyVariants = keyof typeof typography;

export default typography;