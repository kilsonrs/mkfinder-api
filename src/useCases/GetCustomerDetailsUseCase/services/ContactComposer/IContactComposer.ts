import IContact from '../../dtos/IContact';

export default interface IContactComposer {
  compose(data: any): IContact;
}
