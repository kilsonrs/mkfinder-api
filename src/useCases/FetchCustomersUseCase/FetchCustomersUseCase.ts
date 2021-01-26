import CustomerRepository from '../../repositories/CustomerRepository/implementations/CustomerRepository';
import FetchCustomerDTO from './FetchCustomerDTO';
import api from '../../service/api';

class FetchCustomersUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(companies: string[]): Promise<void> {
    companies.forEach(async company => {
      const response = await api(company).get('/cliente/listAll');
      const customers = response.data.clientes
        .map((client: FetchCustomerDTO) => ({
          ...client,
          company,
          url:
            company === process.env.SERVER_1_NAME
              ? process.env.SERVER_1_URL
              : process.env.SERVER_2_URL,
        }))
        .sort((a: FetchCustomerDTO, b: FetchCustomerDTO) => {
          return a.nome.localeCompare(b.nome);
        });

      await this.customerRepository.save(customers);
    });
  }
}

export default FetchCustomersUseCase;
