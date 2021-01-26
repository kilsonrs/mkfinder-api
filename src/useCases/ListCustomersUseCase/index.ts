import ListCustomersUseCase from './ListCustomersUseCase';
import ListCustomersController from './ListCustomersController';
import { customerRepository } from '../FetchCustomersUseCase';

const listCustomersUseCase = new ListCustomersUseCase(customerRepository);

const listCustomersController = new ListCustomersController(
  listCustomersUseCase,
);

export { listCustomersUseCase, listCustomersController };
