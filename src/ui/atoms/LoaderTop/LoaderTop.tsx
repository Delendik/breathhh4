import { useRef, useEffect } from 'react'
// @ts-ignore
import LoadingBar from 'react-top-loading-bar'
import { observer } from 'mobx-react-lite'

import { UserStore } from 'src/store/UserStore'

export const LoaderTop = observer(() => {
  const ref = useRef(null)

  useEffect(() => {
    if (UserStore.loadingFeedback) {
      ref.current.continuousStart()
    } else {
      ref.current.complete()
    }
  }, [UserStore.loadingFeedback])

  return <LoadingBar color="var(--app-text-color)" ref={ref} />
})
