import IPerson from '../../dtos/IPerson';
import IPersonComposer from './IPersonComposer';

export default class PersonComposer implements IPersonComposer {
  compose(data: any): IPerson {
    const {
      id,
      nome,
      cpf_cnpj,
      uuid_cliente,
      company,
      isento,
      cli_ativado,
      data_desativacao,
      bloqueado,
      data_bloq,
      observacao,
      rem_obs,
    } = data;

    const url =
      company === process.env.SERVER_1_NAME
        ? process.env.SERVER_1_URL
        : process.env.SERVER_2_URL;

    const person = {
      id,
      nome,
      cpf_cnpj,
      uuid_cliente,
      company,
      url,
      status: {
        isFree: isento === 'sim',
        isActive: cli_ativado === 's',
        deactivationDate: data_desativacao,
        isBlocked: bloqueado === 'sim',
        blockDate: data_bloq,
        inException: observacao === 'sim',
        exceptionUntil: rem_obs,
      },
    };

    return person;
  }
}
