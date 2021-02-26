import IAddress from '../../dtos/IAddress';

export default interface IAddressComposer {
  compose(data: any): IAddress;
}
