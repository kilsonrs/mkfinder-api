interface IProfileStatus {
  isFree: boolean;
  isActive: boolean;
  deactivationDate: string;
  isBlocked: boolean;
  blockDate: string;
  inException: boolean;
  exceptionUntil: string;
}

interface IPerson {
  company: string;
  id: string;
  nome: string;
  cpf_cnpj: string;
  uuid_cliente: string;
  url: string | undefined;
  status: IProfileStatus;
}

export default IPerson;
