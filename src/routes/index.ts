import { Router } from 'express';
import { fetchCustomersUseCase } from '../useCases/FetchCustomersUseCase';
import { listCustomersController } from '../useCases/ListCustomersUseCase';
import { getCustomerDetailsController } from '../useCases/GetCustomerDetailsUseCase';

const routes = Router();

fetchCustomersUseCase.execute([
  process.env.SERVER_1_NAME as string,
  process.env.SERVER_2_NAME as string,
]);

routes.get('/customers', (request, response) => {
  return listCustomersController.handle(request, response);
});

routes.get('/customer-details/:login', (request, response) => {
  return getCustomerDetailsController.handle(request, response);
});

export default routes;
