export const yahhtUrl = `https://yahht.com/`
export const facebook = `https://www.facebook.com/breathhh.page`
export const twitter = `https://twitter.com/BreathhhApp`
export const medium = `https://breathhh.medium.com`
export const breathUltima = `https://breathhh.app/subscription`
export const apiUrl = `https://api.breathhh.app`
export const apiUrlFacebook = `${apiUrl}/auth/facebook?reg_from=web`
export const apiUrlGoogle = `${apiUrl}/auth/google_oauth2?reg_from=web`
export const chromeExtUrl = `https://chrome.google.com/webstore/detail/breathhh/niipedbmjiopjpmjcpigiflabghcckeo`

// Тут храняться еще и старые id, для обратной совместимости. Первый - актуальный
const chromeExtIds = [
  `niipedbmjiopjpmjcpigiflabghcckeo`,
  `cllimaakonijffcoofcdjmgdibcdiabd`,
  `bmllbkjcollkklanejokmbnmgmknkkph`,
]

export const sendMessageToExt = (type: string) => {
  chromeExtIds.forEach((extId) => {
    try {
      chrome.runtime.sendMessage(extId, { type })
      // eslint-disable-next-line no-empty
    } catch {}
  })
}
