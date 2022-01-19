import css from './FormCheckbox.module.scss'

type TProperties = React.ComponentProps<`input`> & {
  withApiSyncCheck?: boolean
}

export const FormCheckbox: React.FC<TProperties> = (props) => {
  const { children, name, onChange, checked, withApiSyncCheck } = props

  const id = `id_${name}`

  return (
    <div className={css.root}>
      <input
        type="checkbox"
        className={css.input}
        name={name}
        id={id}
        onChange={onChange}
        defaultChecked={withApiSyncCheck ? undefined : checked}
        checked={withApiSyncCheck ? checked : undefined}
      />
      <span className={css.dotWrap}>
        <span className={css.dot} />
      </span>
      <label className={css.label} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
