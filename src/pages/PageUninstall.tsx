import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Formik, Form, Field } from 'formik'
import { RouteComponentProps } from '@reach/router'
import * as Yup from 'yup'

import { UserStore } from 'src/store/UserStore'
import { Container } from 'src/components/Container'
import { Button } from 'src/components/Button'
import { chromeExtUrl } from 'src/utils/config'

const DATA = [
  { text: `Don't understand how it works` },
  { text: `Privacy Concerns` },
  { text: `Windows shows to often` },
  { text: `Slows down computer` },
  { text: `Doesn't support native language` },
  { text: `Was useless application to me` },
  { text: `Other`, type: `textArea` },
]

const ControlsWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const validationSchema = Yup.object().shape({
  comment: Yup.string().min(2, `Too Short!`).max(1_000, `Too Long!`).required(`Required`),
})

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
            reason: ``,
            comment: ``,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await UserStore.sendDeleteFeedback(values)
            setDataSend(true)
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              {DATA.map((item, index) => {
                return (
                  <div key={index}>
                    <label>
                      <Field type="radio" name="reason" value={item.text} />
                      {item.text}
                    </label>

                    {item?.type === `textArea` && (
                      <div>
                        <Field
                          name="comment"
                          as="textarea"
                          disabled={values.reason !== item.text}
                        />
                        {errors.comment && touched.comment && errors.comment}
                      </div>
                    )}
                  </div>
                )
              })}
              <ControlsWrap>
                <Button type="submit" disabled={!values.reason}>
                  Submit
                </Button>
                <a href={chromeExtUrl} target="_blank" rel="noreferrer">
                  Reinstall extension
                </a>
              </ControlsWrap>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  )
})
