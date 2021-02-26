import { parseISO, isAfter, subMonths } from 'date-fns';

interface IInvoice {
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

const lastFiveMonths = (data: string): boolean =>
  isAfter(parseISO(data), subMonths(Date.now(), 5));

const getLastFiveMonths = (data: IInvoice[]): IInvoice[] => {
  return data
    .filter(invoice => lastFiveMonths(invoice.datavenc))
    .filter(invoice => invoice.deltitulo !== '1')
    .sort((invoiceA, invoiceB) => {
      const compareDates = isAfter(
        parseISO(invoiceA.datavenc),
        parseISO(invoiceB.datavenc),
      );
      if (compareDates) {
        return 1;
      }
      if (!compareDates) {
        return -1;
      }
      return 0;
    });
};

export default getLastFiveMonths;
