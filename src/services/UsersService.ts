import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  };

  // por receber apenas um parametro, não há necessidade de criar uma interface;
  // apenas declarar o email, que será o único parametro...
  async create(email: string) {
    // verificar se o usuário exist...
    const userExists = await this.usersRepository.findOne({ email });

    // retornar user...
    if (userExists) {
      return userExists;
    };

    // caso não, criar...
    const user = this.usersRepository.create({
      email
    });

    this.usersRepository.save(user);

    // retornar user...
    return user;
  }
};

export { UsersService };