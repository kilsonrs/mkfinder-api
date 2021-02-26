import GetCustomerDetailsController from './GetCustomerDetailsController';
import GetCustomerDetailsUseCase from './GetCustomerDetailsUseCase';

import AddressComposer from './services/AddressComposer/AddressComposer';
import ConnectionComposer from './services/ConnectionComposer/ConnectionComposer';
import ContactComposer from './services/ContactComposer/ContactComposer';
import PersonComposer from './services/PersonComposer/PersonComposer';

const addressComposer = new AddressComposer();
const connectionComposer = new ConnectionComposer();
const contactComposer = new ContactComposer();
const personComposer = new PersonComposer();

const getCustomerDetailsUseCase = new GetCustomerDetailsUseCase(
  addressComposer,
  connectionComposer,
  contactComposer,
  personComposer,
);

const getCustomerDetailsController = new GetCustomerDetailsController(
  getCustomerDetailsUseCase,
);

export { getCustomerDetailsController, getCustomerDetailsUseCase };
