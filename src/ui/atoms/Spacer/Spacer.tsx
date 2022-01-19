import cx from 'classnames'
import css from './Spacer.module.scss'

type TProperties = {
  s?:
    | `4`
    | `6`
    | `8`
    | `12`
    | `16`
    | `18`
    | `20`
    | `22`
    | `24`
    | `32`
    | `34`
    | `36`
    | `45`
    | `48`
    | `64`
    | `68`
    | `70`
    | `72`
    | `Mta`
}

export const Spacer = ({ s = `24` }: TProperties) => (
  <span className={cx(css.root, css[`size${s}`])} />
)
