export const yahhtUrl = 'https://yahht.com/'
export const apiUrl = 'https://api.breathhh.app'
export const apiUrlFacebook = `${apiUrl}/auth/facebook`
export const apiUrlGoogle = `${apiUrl}/auth/google_oauth2`
export const chromeExtUrl = 'https://google.com'

const chromeExtId_OLD = 'bmllbkjcollkklanejokmbnmgmknkkph'
const chromeExtId = 'cllimaakonijffcoofcdjmgdibcdiabd'

// FIXME: нужно будет удалить `chromeExtId_OLD`, когда все будут сидеть на новой версии
export const sendMessageToExt = (type: string) => {
  try {
    chrome.runtime.sendMessage(chromeExtId, { type })
  } catch (error) {
    console.log('Extension not installed')
  }

  try {
    chrome.runtime.sendMessage(chromeExtId_OLD, { type })
  } catch (error) {
    console.error(error)
  }
}
