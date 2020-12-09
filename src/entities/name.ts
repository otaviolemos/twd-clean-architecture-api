import { left, right, Either } from '../shared/either'
import { InvalidNameError } from './errors/invalid-name-error'

export class Name {
  private readonly value: string

  private constructor (name: string) {
    this.value = name
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return left(new InvalidNameError())
    }

    return right(new Name(name))
  }

  public static validate (name: string): boolean {
    if (!name) {
      return false
    }

    if (name.trim().length < 2 || name.trim().length > 256) {
      return false
    }

    return true
  }
}
