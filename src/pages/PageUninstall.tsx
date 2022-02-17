import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Formik, Form, Field } from 'formik'
import { RouteComponentProps } from '@reach/router'
import * as Yup from 'yup'

import { UserStore } from 'src/store/UserStore'
import { Button } from 'src/components/Button'
import { chromeExtUrl } from 'src/utils/config'
import { LayoutBaseWithoutFooter } from 'src/components/LayoutBaseWithoutFooter'

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 500px;
  height: 500px;
`

export const Label = styled.label`
  height: 20px;
  width: 20px;
  background: transparent;
  border: 1px solid #034464;
  cursor: pointer;
  border: 2px solid #000000;
  border-radius: 2px;
  color: #000;
  font-size: 14px;
  margin: 0 16px 16px 0;
  padding: 8px 12px;

  :hover {
    border-color: red;
  }

  :active {
    border-color: red;
    background-color: #a4e0fd;
  }
`

const validationSchema = Yup.object().shape({
  comment: Yup.string().min(2, `Too Short!`).max(1_000, `Too Long!`),
})

export const PageUninstall: React.FC<RouteComponentProps> = observer(() => {
  const [isDataSend, setDataSend] = useState(false)

  useEffect(() => {
    UserStore.sendDeleteFact()
  }, [])

  return (
    <LayoutBaseWithoutFooter>
      <div>
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
                <Wrapper>
                  {DATA.map((item, index) => {
                    return (
                      <div key={index}>
                        <Label>
                          <Field type="checkbox" name="reason" value={item.text} />
                          {item.text}
                        </Label>

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
                </Wrapper>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </LayoutBaseWithoutFooter>
  )
})
