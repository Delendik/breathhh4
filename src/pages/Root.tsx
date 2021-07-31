import { RouteComponentProps } from '@reach/router'

import { useReferrer } from 'src/utils/useReferrer'

export const Root: React.FC<RouteComponentProps> = ({ children }) => {
  useReferrer()
  return <>{children}</>
}
