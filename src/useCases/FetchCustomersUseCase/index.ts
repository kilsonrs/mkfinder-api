import CustomerRepository from '../../repositories/CustomerRepository/implementations/CustomerRepository';
import FetchCustomersUseCase from './FetchCustomersUseCase';

const customerRepository = new CustomerRepository();
const fetchCustomersUseCase = new FetchCustomersUseCase(customerRepository);

export { fetchCustomersUseCase, customerRepository };
