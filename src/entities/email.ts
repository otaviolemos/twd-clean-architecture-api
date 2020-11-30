export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }
    return true
  }
}
