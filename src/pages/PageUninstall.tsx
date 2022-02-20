import styled from 'styled-components'
import ReactGa from 'react-ga'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Formik, Form, Field } from 'formik'
import { RouteComponentProps } from '@reach/router'
import { media } from 'src/media'
import * as Yup from 'yup'

import { UserStore } from 'src/store/UserStore'
import { LayoutBaseWithoutFooter } from 'src/components/LayoutBaseWithoutFooter'
import { Button, LoaderTop } from 'src/ui/atoms'

const DATA = [
  { text: `Don't understand how it works` },
  { text: `Privacy Concerns` },
  { text: `Windows shows to often` },
  { text: `Slows down computer` },
  { text: `Doesn't support native language` },
  { text: `Was useless application to me` },
  { text: `Other`, type: `textArea` },
]

const Root = styled.div`
  width: 740px;
  margin: 71px auto;

  ${media.pretablet`
    max-width: 672px;
    width: 100%;
  `}
`
const ControlsWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const Title = styled.h1`
  font-size: 42px;
  line-height: 44px;
  text-transform: uppercase;
  margin-bottom: 8px;

  ${media.mobile`
    font-size: 28px;
    line-height: 38px;
  `}
`

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: var(--color-ground-700);
  margin-bottom: 34px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: inline-block;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  background: transparent;
  cursor: pointer;
  border: 2px solid var(--color-black);
  border-radius: 2px;
  margin: 0 14px 0 0;

  :hover {
    border-color: var(--color-ground-900);
  }

  :active {
    border-color: var(--color-ground-800);
  }
`
const TextCheckBox = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 20px;
`

export const Checkbox = styled(Field)`
  display: none;

  &:checked + ${Label} {
    background-color: var(--color-black);
    background-image: url(/assets/check.svg);
    background-repeat: no-repeat;
    background-position: center;

    :hover {
      border-color: var(--color-ground-900);
      background-color: var(--color-ground-900);
    }

    :active {
      border-color: var(--color-ground-800);
      background-color: var(--color-ground-800);
    }
  }
`

const RootThanks = styled.div`
  display: flex;
  height: calc(100vh - 89px);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.mobile`
    height: calc(100vh - 73px);
  `}
`

const TitleThanks = styled.h1`
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  max-width: 500px;
  margin-bottom: 24px;

  ${media.mobile`
    font-size: 40px;
    line-height: 50px;
  `}
`

const TextThanks = styled.p`
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  ${media.mobile`
    font-size: 16px;
    line-height: 25px;
  `}
`

const InputMoodWrap = styled.div`
  max-width: 455px;
  position: relative;
  border: 1px solid var(--color-ground-200);
  border-radius: 3px;
  margin-bottom: 34px;
`

const TextareaAutosize = styled(Field)`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  max-height: 96px;
  padding: 15px;
  overflow: hidden;
  color: var(--color-text);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  word-break: break-all;
  resize: none;
  margin-top: 4px;

  &[disabled] {
    opacity: 0.4;
  }

  &::placeholder {
    color: var(--color-ground-600);
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }

  &:focus::placeholder {
    color: var(--color-ground-700);
  }
`

const validationSchema = Yup.object().shape({
  comment: Yup.string().min(10, `Too Short!`).max(1_000, `Too Long!`),
})

export const PageUninstall: React.FC<RouteComponentProps> = observer(() => {
  const isDataSendStorage = localStorage.getItem(`data_send`) && localStorage.getItem(`data_send`)
  const [isDataSend, setDataSend] = useState(isDataSendStorage)
  const [text, setText] = useState(``)
  console.log(isDataSendStorage)
  const [isInFocus, isInFocusSet] = useState(false)
  const eventTrack = (category, action, label) => {
    ReactGa.event({
      category,
      action,
      label,
    })
  }

  useEffect(() => {
    UserStore.sendDeleteFact()
  }, [])

  return (
    <LayoutBaseWithoutFooter>
      <LoaderTop />
      {isDataSend === `yes` ? (
        <RootThanks>
          <TitleThanks>Thank you for the feedback</TitleThanks>
          <TextThanks>We are getting better with your help</TextThanks>
        </RootThanks>
      ) : (
        <Root>
          <Title>Please, help us improve</Title>
          <Subtitle>
            We’d love your feedback on how we could make Breathhh better for other users
          </Subtitle>

          <Formik
            initialValues={{
              reason: ``,
              comment: ``,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const array = Array.from(values.reason)
              array.push(values.comment)
              console.log(array)
              await UserStore.sendDeleteFeedback(array)
              setDataSend(`yes`)
              localStorage.setItem(`data_send`, `yes`)
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <Wrapper>
                  {DATA.map((item, index) => {
                    return (
                      <div key={index}>
                        {item?.text !== `Other` && (
                          <TextCheckBox>
                            <Checkbox
                              id={item.text}
                              type="checkbox"
                              name="reason"
                              value={item.text}
                            />
                            <Label htmlFor={item.text} />
                            {item.text}
                          </TextCheckBox>
                        )}
                        {item?.type === `textArea` && (
                          <InputMoodWrap>
                            <TextareaAutosize
                              name="comment"
                              onFocus={() => isInFocusSet(true)}
                              onBlur={() => isInFocusSet(false)}
                              placeholder="Your thoughts or feelings"
                            />
                            {errors.comment && touched.comment && errors.comment}
                          </InputMoodWrap>
                        )}
                      </div>
                    )
                  })}
                  {/* <InputMoodWrap>
                    <TextareaAutosize
                      value={text}
                      name="comment"
                      as="textarea"
                      onChange={(event) => setText(event.target.value)}
                      onFocus={() => isInFocusSet(true)}
                      onBlur={() => isInFocusSet(false)}
                      placeholder="Your thoughts or feelings"
                    />
                    {errors.comment && touched.comment && errors.comment}
                  </InputMoodWrap> */}
                  {(values.reason.length > 0 || values.comment.length > 0) && (
                    <ControlsWrap>
                      <Button
                        type="submit"
                        autoFocus
                        onClick={() => eventTrack(`button`, `click`, `feedback`)}
                      >
                        Submit
                      </Button>
                    </ControlsWrap>
                  )}
                </Wrapper>
              </Form>
            )}
          </Formik>
        </Root>
      )}
    </LayoutBaseWithoutFooter>
  )
})
