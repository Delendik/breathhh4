// import styled from 'styled-components'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { RouteComponentProps } from '@reach/router'
import { Container } from '../components/Container'
import { chromeExtUrl } from '../utils/config'

const DATA = [
  { text: "Don't understand how it works" },
  { text: 'Privacy Concerns' },
  { text: 'Windows shows to often' },
  { text: 'Slows down computer' },
  { text: "Doesn't support native language" },
  { text: 'Was useless application to me' },
  { text: 'Other', type: 'textArea' },
]

export const UnInstallExt: React.FC<RouteComponentProps> = () => {
  const [isDataSend, setDataSend] = useState(false)

  return (
    <Container>
      <h1>Sorry! Please, help us improve</h1>
      <h2>Why did you uninstall Breathhh? Check all that apply.</h2>

      {isDataSend ? (
        <div>
          <p>🥶</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            reason: '',
            comment: '',
          }}
          onSubmit={async (values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2))
              setDataSend(true)
            }, 400)
          }}
        >
          {({ values }) => (
            <Form>
              {DATA.map((item, index) => {
                return (
                  <div key={index}>
                    <label>
                      <Field type="radio" name="reason" value={item.text} />
                      {item.text}
                    </label>

                    {item?.type === 'textArea' && (
                      <div>
                        <Field
                          name="comment"
                          as="textarea"
                          disabled={values.reason !== item.text}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
              <button type="submit" disabled={!values.reason}>
                Submit
              </button>
              <a href={chromeExtUrl}>Reinstall extension</a>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  )
}
