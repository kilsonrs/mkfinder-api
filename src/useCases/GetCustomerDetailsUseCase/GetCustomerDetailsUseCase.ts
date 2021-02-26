import api from '../../service/api';
import getLastFiveMonths from '../../utils/getLastFiveMonths';
import GetCustomerDTO from './dtos/GetCustomerDTO';

import IAddressComposer from './services/AddressComposer/IAddressComposer';
import IConnectionComposer from './services/ConnectionComposer/IConnectionComposer';
import IContactComposer from './services/ContactComposer/IContactComposer';
import IPersonComposer from './services/PersonComposer/IPersonComposer';

interface IRequest {
  login: string;
  company: string;
}

export default class GetCustomerUseCase {
  constructor(
    private addressComposer: IAddressComposer,
    private connectionComposer: IConnectionComposer,
    private contactComposer: IContactComposer,
    private personComposer: IPersonComposer,
  ) {}

  public async execute({ login, company }: IRequest): Promise<GetCustomerDTO> {
    if (!login) {
      throw new Error('login not provided');
    }
    if (!company) {
      throw new Error('company not provided');
    }

    const customerResponse = await api(company).get(`cliente/list/${login}`);
    const invoiceResponse = await api(company).get(`invoice/list/${login}`);

    const customerData = customerResponse.data.dados[0];
    Object.assign(customerData, { company });

    const invoices =
      invoiceResponse.data === 'NULL'
        ? null
        : getLastFiveMonths(invoiceResponse.data);

    const person = this.personComposer.compose(customerData);
    const contact = this.contactComposer.compose(customerData);
    const address = this.addressComposer.compose(customerData);
    const connection = this.connectionComposer.compose(customerData);

    const customer = {
      person,
      contact,
      connection,
      address,
      invoices,
    };

    return customer;
  }
}
