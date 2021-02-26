import IConnection from '../../dtos/IConnection';

export default interface IConnectionComposer {
  compose(data: any): IConnection;
}
