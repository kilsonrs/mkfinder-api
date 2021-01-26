import GetCustomerDetailsController from './GetCustomerDetailsController';
import GetCustomerDetailsUseCase from './GetCustomerDetailsUseCase';

const getCustomerDetailsUseCase = new GetCustomerDetailsUseCase();
const getCustomerDetailsController = new GetCustomerDetailsController(
  getCustomerDetailsUseCase,
);

export { getCustomerDetailsController, getCustomerDetailsUseCase };
