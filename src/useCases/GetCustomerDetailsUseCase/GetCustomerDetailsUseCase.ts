import api from '../../service/api';
import GetCustomerDTO from './GetCustomerDTO';

interface IRequest {
  login: string;
  company: string;
}

export default class GetCustomerUseCase {
  public async execute({ login, company }: IRequest): Promise<GetCustomerDTO> {
    if (!login) {
      throw new Error('login not provided');
    }
    if (!company) {
      throw new Error('company not provided');
    }

    const customerResponse = await api(company).get(`cliente/list/${login}`);
    const invoiceResponse = await api(company).get(`invoice/list/${login}`);

    const invoices =
      invoiceResponse.data === 'NULL' ? null : invoiceResponse.data;

    const customer = {
      customer: customerResponse.data.dados,
      invoices,
    };
    return customer;
  }
}
