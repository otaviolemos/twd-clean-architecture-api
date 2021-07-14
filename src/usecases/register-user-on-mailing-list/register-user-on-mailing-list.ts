import { User, UserData } from '@/entities'
import { UserRepository } from '@/usecases/register-user-on-mailing-list/ports'
import { UseCase } from '@/usecases/ports'

export class RegisterUserOnMailingList implements UseCase {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: User): Promise<UserData> {
    const name = request.name.value
    const email = request.email.value
    const userData = { name, email }
    if (!(await this.userRepo.exists(userData))) {
      await this.userRepo.add(userData)
    }
    return userData
  }
}
