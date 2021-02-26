import Customer from '../../../entities/Customer';
import ListCustomersDTO from '../../../useCases/ListCustomersUseCase/ListCustomersDTO';
import { parseMac, parseString } from '../../../utils/stringParser';
import ICustomerRepository from '../ICustomerRepository';

export default class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  async save(_customers: Customer[]): Promise<void> {
    this.customers = [...this.customers, ..._customers];
  }

  list(data: ListCustomersDTO): Customer[] {
    const { login, nome, mac } = data.query;

    if (login) {
      return this.customers
        .filter(client =>
          parseString(client.login).includes(parseString(login)),
        )
        .filter((_, index) => index < 10);
    }

    if (nome) {
      return this.customers
        .filter(client => parseString(client.nome).includes(parseString(nome)))
        .filter((_, index) => index < 10);
    }

    if (mac) {
      return this.customers
        .filter(
          client => client.mac && parseMac(client.mac).includes(parseMac(mac)),
        )
        .filter((_, index) => index < 10);
    }
    return this.customers;
  }
}
