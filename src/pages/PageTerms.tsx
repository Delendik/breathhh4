import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { Container } from 'src/components/Container'
import { MadeBy } from 'src/components/MadeBy'

const H1 = styled.h1`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 40px;
  line-height: 45px;
`

const Top = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
`

const Caption = styled.p`
  margin: 0 0 5px;
  color: var(--gray);
  font-size: 15px;
  line-height: 25px;
`

const H3 = styled.h3`
  margin-top: 40px;
  margin-bottom: 15px;
`

const P = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 25px;
`

const Pad = styled.div`
  padding-top: 500px;
`

export const PageTerms: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <Top>
        <MadeBy />
      </Top>
      <header>
        <H1>Breathhh – Terms of Use</H1>
        <Caption>Last Update: June 18, 2021</Caption>
      </header>
      <p>Yahht ("us", "we", or "our") operates the Breathhh.</p>

      <div>
        <H3>Terms</H3>
        <P>
          By visiting the website, using the extension and other functionality of the service, you
          agree to these terms of service, applicable laws and regulations, and agree that you are
          responsible for compliance with any applicable local laws. If you do not agree to any of
          these terms of service, you are prohibited from visiting the website or using the
          extension. The materials contained on the Web site and within the extension are
          intellectual property and protected by applicable law.
        </P>

        <H3>License</H3>
        <P>
          Personal use of the Breathhh service is permitted. Commercial use of developed
          functionality within the service is discussed upon request (otherwise prohibited). It is
          important to note that the submission of a personal/private use license is not a transfer
          of ownership, and under this license, you are not allowed to modify or copy the materials,
          use the materials for any commercial purpose or for public display, or attempt to modify
          any software or functionality of the service. You may not remove any copyright or other
          intellectual property rights from the materials, transfer the materials to another person,
          or "mirror" the materials on a third party server. This license shall automatically
          terminate if you violate any of these terms and conditions and may be terminated at any
          time. Upon terminating your viewing of these materials or upon the termination of this
          license, you must destroy any downloaded materials in your possession whether in
          electronic or printed format.
        </P>

        <H3>Disclaimer of liability</H3>
        <P>
          The materials used in the site and the extension are provided "as is". Developer makes no
          warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          Further, the developer does not warrant or make any representations concerning the
          accuracy, likely results, or reliability of the materials used on the website and the
          Breathhh Extension in any way related to such materials or on any sites linked to this
          website.
        </P>

        <H3>The accuracy of the materials</H3>
        <P>
          The materials contained on the website, extensions and other functionality related to the
          Breathhh service may contain technical, typographical, or photographic errors. Developer
          does not warrant that any materials on the website are accurate, complete or current.
          Developer may make changes to the materials contained on the site at any time without
          notice.
        </P>

        <H3>Links</H3>
        <P>
          The developer does not review all sites that link to the breathhh.app website or
          extension, and is not responsible for the content of such sites. The inclusion of any link
          is not implied or verified by the developer. Use of any such linked site is at the user's
          own risk.
        </P>

        <H3>Modifications</H3>
        <P>
          The developer has the right to revise the terms of service for the breathhh.app website or
          extension at any time without notice. By using this website, extension, or other service
          functionality, you agree to the then-current version of these terms of service.
        </P>
      </div>

      <br />
      <hr />
      <br />

      <p>
        If you have any questions or comments, you can reach out to us at{' '}
        <a href="mailto:mail@yahht.com">mail@yahht.com</a>
      </p>
      <Pad />
    </Container>
  )
}
