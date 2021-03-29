import Customer from '../../../entities/Customer';
import ListCustomersDTO from '../../../useCases/ListCustomersUseCase/ListCustomersDTO';
import { parseMac, parseString } from '../../../utils/stringParser';
import { isLogin, isMac } from '../../../utils/typeCheck';
import ICustomerRepository from '../ICustomerRepository';

export default class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  async save(_customers: Customer[]): Promise<void> {
    this.customers = [...this.customers, ..._customers];
  }

  list(data: ListCustomersDTO): Customer[] {
    const { payload } = data.query;
    const payloadType = isLogin(payload) ? 'login' : isMac(payload) ? 'mac' : 'nome';
    switch(payloadType) {
      case 'login':
        return this.customers
        .filter(client =>
          parseString(client.login).includes(parseString(payload).slice(1)),
        )
        .filter((_, index) => index < 10);
      case 'mac':
        return this.customers
        .filter(
          client => client.mac && parseMac(client.mac).includes(parseMac(payload)),
        )
        .filter((_, index) => index < 10);
      default:
        return this.customers
        .filter(client => parseString(client.nome).includes(parseString(payload)))
        .filter((_, index) => index < 10);
    }
  }
}
