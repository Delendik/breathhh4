// import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Formik, Form, Field } from 'formik'
import { RouteComponentProps } from '@reach/router'

import { UserStore } from 'src/store/UserStore'
import { Container } from 'src/components/Container'
import { chromeExtUrl } from 'src/utils/config'

const DATA = [
  { text: "Don't understand how it works" },
  { text: 'Privacy Concerns' },
  { text: 'Windows shows to often' },
  { text: 'Slows down computer' },
  { text: "Doesn't support native language" },
  { text: 'Was useless application to me' },
  { text: 'Other', type: 'textArea' },
]

export const PageUninstall: React.FC<RouteComponentProps> = observer(() => {
  const [isDataSend, setDataSend] = useState(false)

  useEffect(() => {
    UserStore.sendDeleteFact()
  }, [])

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
            await UserStore.sendDeleteFeedback(values)
            setDataSend(true)
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
})
