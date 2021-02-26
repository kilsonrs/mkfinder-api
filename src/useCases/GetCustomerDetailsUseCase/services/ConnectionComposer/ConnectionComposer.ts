import IConnection from '../../dtos/IConnection';
import IConnectionComposer from './IConnectionComposer';

export default class ConnectionComposer implements IConnectionComposer {
  compose(data: any): IConnection {
    const { ramal, login, senha, mac, chave, plano, venc } = data;
    const connection = {
      ramal,
      login,
      senha,
      mac,
      chave,
      plano,
      venc,
    };
    return connection;
  }
}
