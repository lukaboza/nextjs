import { globalCss } from ".";

// usado para o CCS global (toda aplicação) 
export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'roboto',
    fontWeight: 400,
  }
})