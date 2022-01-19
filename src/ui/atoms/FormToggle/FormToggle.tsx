import css from './FormToggle.module.scss'

type TProperties = React.ComponentProps<`input`> & {
  withApiSyncCheck?: boolean
  loading?: boolean
}

export const FormToggle: React.FC<TProperties> = (props) => {
  const { children, name, onChange, checked, withApiSyncCheck, loading } = props

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
        disabled={loading}
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
