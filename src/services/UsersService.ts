import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: UsersRepository;

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

    await this.usersRepository.save(user);
    // retornar user...
    return user;
  };

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
};

export { UsersService };