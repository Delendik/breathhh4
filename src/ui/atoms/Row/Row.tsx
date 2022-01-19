import cx from 'classnames'
import css from './Row.module.scss'

type TProperties = {
  className?: string
  mta?: boolean
}

export const Row: React.FC<TProperties> = ({ children, className, mta }) => (
  <span className={cx(css.root, mta && css.mta, className)}>{children}</span>
)
