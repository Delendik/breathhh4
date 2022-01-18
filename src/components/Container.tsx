import styled from 'styled-components'

export const device = {
  mobileS: `(min-width: 320px)`,
  mobile: `(min-width: 375px)`,
  tablet: `(min-width: 720px)`,
  laptop: `(min-width: 1150px)`,
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.mobileS} {
    padding: 0 20px;
  }

  @media ${device.mobile} {
    padding: 0 35px;
  }

  @media ${device.tablet} {
    max-width: 672px;
    margin: 0 auto;
    padding: 0 48px;
  }

  @media ${device.laptop} {
    max-width: 1120px;
    padding: 0 100px;
  }
`

export const Container: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}
