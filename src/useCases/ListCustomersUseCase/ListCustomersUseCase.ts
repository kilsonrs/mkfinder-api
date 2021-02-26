import Customer from '../../entities/Customer';
import CustomerRepository from '../../repositories/CustomerRepository/implementations/CustomerRepository';
import ListCustomersDTO from './ListCustomersDTO';

export default class ListCustomersUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  public async execute(queryData: ListCustomersDTO): Promise<Customer[]> {
    const isQueryParamInvalid =
      queryData.query?.nome === '' || queryData.query?.mac === '';

    if (isQueryParamInvalid) {
      throw new Error('Invalid query param provided');
    }

    const customers = this.customerRepository.list(queryData);
    return customers;
  }
}
