import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
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

export const PagePrivacy: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Top>
        <MadeBy />
      </Top>
      <header>
        <H1>Breathhh – Privacy Policy</H1>
        <Caption>Effective date: June 18, 2021</Caption>
        <Caption>Effective as of version: 1.0.0</Caption>
      </header>
      <p>Yahht ("us", "we", or "our") operates the Breathhh.</p>
      <p>
        This page informs you of our policies regarding the collection, use, and disclosure of
        personal data when you use our Service (website and extension) and the choices you have
        associated with that data.
      </p>

      <div>
        <H3>How do we access your data?</H3>
        <P>
          We receive your data through securely encrypted authentication via Google Account or
          Facebook.We receive your data through securely encrypted authentication via Google Account
          or Facebook. We get your browsing and interaction data through Google Analytics, Yandex
          Metrica and cookies to improve the product. We get data about open tabs in your browser
          through the Google Chrome extension. This is necessary for the correct and valuable
          operation of the service.
        </P>

        <H3>How do we use your data?</H3>
        <P>
          We use the data obtained during authorization to create your personal account within the
          web application and extension. We aggregate and use the data (visits, clicks, views)
          obtained by analyzing visits to the web application (website) to improve the user
          experience and convey the value of the product/service more accurately. We use the data
          obtained as a result of the extension's operation (pages visited, functionality opened by
          the extension) to flexibly adjust the extension's operation to the user's needs, as well
          as to let the user see useful information about his/her work on the computer/in the
          browser in a special page. It's important to note that using your history of open tabs in
          your browser we only know the shortened URL.
        </P>

        <H3>How do we store your data?</H3>
        <P>
          Data about the operation of the extension is stored on secure servers of the Digital Ocean
          service using SSL encryption. The data obtained by visiting the website (web application)
          is stored inside the Google Analytics and Yandex Metrica services. If you want to delete
          all the data about you obtained as a result of the extension, you can delete your account
          by request by email or in your profile page of the web application.
        </P>

        <H3>How do we share your data?</H3>
        <P>
          We will never transfer, sell, make copies, or share any of your data stored by the
          application to third party services or companies unless strictly necessary to enable the
          application to function properly. The development team, as well as the developed
          application, does not share any personal information publicly or with third parties,
          except as required by law.
        </P>
      </div>

      <br />
      <hr />
      <br />

      <p>
        If you have any questions or comments, you can reach out to us at{` `}
        <a href="mailto:mail@breathhh.app">mail@breathhh.app</a>
      </p>
      <Pad />
    </div>
  )
}
