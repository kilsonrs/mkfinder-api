import IAddress from '../../dtos/IAddress';
import IAddressComposer from './IAddressComposer';

export default class AddressComposer implements IAddressComposer {
  compose(data: any): IAddress {
    const {
      id,
      uuid_cliente,
      cpf_cnpj,
      endereco_res,
      numero_res,
      bairro_res,
      cidade_res,
      estado_res,
      cep_res,
      complemento_res,
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    } = data;
    const address = {
      id,
      uuid_cliente,
      cpf_cnpj,
      endereco_res,
      numero_res,
      bairro_res,
      cidade_res,
      estado_res,
      cep_res,
      complemento_res,
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    };
    return address;
  }
}
