import React from 'react'
import cx from 'classnames'
import * as icons from 'src/ui/icons'

import css from './Button.module.scss'

type TButton = {
  appearanceTransponentBlack?: `transponentBlack`
  appearanceGrey?: `onGrey`
  appearance?: `onlyOnDark`
  fullWidth?: boolean
  tag?: string
  href?: string
  iconSize?: string
  iconLeft?: keyof typeof icons
  iconRight?: keyof typeof icons
} & React.ComponentProps<`button`>

export const Button: React.FC<TButton> = (properties) => {
  const {
    children,
    tag,
    href,
    iconLeft,
    iconRight,
    appearance,
    appearanceGrey,
    appearanceTransponentBlack,
    fullWidth,
    iconSize,
    ...rest
  } = properties

  return React.createElement(
    tag || href ? `a` : `button`,
    {
      ...rest,
      href,
      ...(href ? { target: `blank` } : {}),
      className: cx(
        css.root,
        appearance && css[`appearance-${appearance}`],
        appearanceGrey && css[appearanceGrey],
        appearanceTransponentBlack && css[appearanceTransponentBlack],
        fullWidth && css.fullWidth
      ),
    },
    <>
      {iconLeft && (
        <span className={css.iconLeft}>
          {React.createElement(icons[iconLeft], {
            width: iconSize,
            height: iconSize,
          })}
        </span>
      )}
      <span className={css.content}>{children}</span>
      {iconRight && (
        <span className={css.iconRight}>
          {React.createElement(icons[iconRight], {
            width: iconSize,
            height: iconSize,
          })}
        </span>
      )}
    </>
  )
}
