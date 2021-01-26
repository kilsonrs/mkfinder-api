import Customer from '../../entities/Customer';

interface Invoice {
  uuid_lanc: string;
  nome: string;
  datavenc: string;
  valor: string;
  cpf_cnpj: string;
  nossonum: string;
  linhadig: string;
  titulo: string;
  referencia: string;
  processamento: string;
  descricao: string;
  plano: string;
  status: string;
  datapag: string;
  valorpag: string;
  recibo: string;
  deltitulo: string;
}

export default interface GetCustomerDTO {
  customer: Customer[];
  invoices: Invoice[];
}
