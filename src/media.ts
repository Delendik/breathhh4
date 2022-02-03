import { css } from 'styled-components'

const breakpoints = {
  mobile: `375px`,
  tablet: `720px`,
  pretablet: `768px`,
  laptop: `1150px`,
  laptopX: `1245px`,
}

const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>

export const media = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: Parameters<typeof css>) => {
    return css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
  }
  return accumulator
  // eslint-disable-next-line @typescript-eslint/ban-types
}, {} as Record<keyof typeof breakpoints, Function>)
