export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }
    if (email.length > 320) {
      return false
    }
    const [local, domain] = email.split('@')
    if (local.length > 64) {
      return false
    }
    if (domain.length > 255) {
      return false
    }
    return true
  }
}
