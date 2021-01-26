import Customer from '../../entities/Customer';
import ListCustomersDTO from '../../useCases/ListCustomersUseCase/ListCustomersDTO';

export default interface ICustomerRepository {
  save(customer: Customer[]): Promise<void>;
  list(queryData: ListCustomersDTO): Customer[];
}
