import cx from 'classnames'
import * as icons from 'src/ui/icons'
import css from './TabMenu.module.scss'

// eslint-disable-next-line react/jsx-key
const data = [<icons.Breathhh />, <icons.Stats />, <icons.Face />, <icons.User />]

type TProperties = {
  activeTab: number
  onChange?: (_: number) => void
}

export const TabMenu: React.FC<TProperties> = (properties) => {
  const { onChange, activeTab } = properties

  return (
    <div className={css.root}>
      {data.map((item, index) => (
        <button
          key={index}
          type="button"
          className={cx(css.menuItem, activeTab === index && css.active)}
          onClick={() => onChange(index)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
