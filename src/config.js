export const apiUrl = "https://api.breathhh.app";
export const apiUrlFacebook = apiUrl + "/auth/facebook";
export const apiUrlGoogle = apiUrl + "/auth/google_oauth2";
export const chromeExtUrl = "https://google.com";
const chromeExtId = "dopklhbdmcnabanjfjaipjjmnlbdnknk";

export const sendMessageToExt = (type) => {
  try {
    chrome.runtime.sendMessage(chromeExtId, { type });
  } catch (error) {
    console.log("Extension not installed");
  }
};
