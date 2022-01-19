import cx from 'classnames'
import css from './Text.module.scss'

type TProperties = {
  preset?: `12` | `14` | `16` | `18` | `regular` | `low` | `title` | `subtitle`
  className?: string
  href?: string
}

export const Text: React.FC<TProperties> = (properties) => {
  const { children, className, preset = 16, href } = properties

  const settings = {
    className: cx(css.root, preset && css[`preset-${preset}`], className),
    ...(href && {
      target: `_blank`,
      rel: `noreferrer`,
      href,
    }),
  }

  const Tag = href ? `a` : `span`

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag {...settings}>{children}</Tag>
  )
}
