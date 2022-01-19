import css from './Footer.module.scss'

export const Footer = () => (
  <p className={css.footer}>
    <a className={css.link} href="https://breathhh.app" target="_blank" rel="noreferrer">
      Breathhh
    </a>
    {` `}•{` `}
    <a
      className={css.link}
      href="https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo"
      target="_blank"
      rel="noreferrer"
    >
      Extension for Google Chrome
    </a>
  </p>
)
