export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }
    if (email.length > 320) {
      return false
    }
    const [local, domain] = email.split('@')
    if (local.length > 64 || local.length === 0) {
      return false
    }
    if (domain.length > 255 || domain.length === 0) {
      return false
    }
    const domainParts = domain.split('.')
    if (domainParts.some(function (part) {
      return part.length > 63
    })) {
      return false
    }
    return true
  }
}
