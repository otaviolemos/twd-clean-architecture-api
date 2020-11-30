export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }
    if (email.length > 320) {
      return false
    }
    const [local] = email.split('@')
    if (local.length > 64) {
      return false
    }
    return true
  }
}
