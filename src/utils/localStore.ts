export class Referrer {
  private static REF_NAME = 'ref_url'

  static safeRef(value: string) {
    return localStorage.setItem(Referrer.REF_NAME, value)
  }

  static getRef() {
    return localStorage.getItem(Referrer.REF_NAME)
  }

  static clearRef() {
    return localStorage.removeItem(Referrer.REF_NAME)
  }
}
