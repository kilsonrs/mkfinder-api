import IContact from '../../dtos/IContact';
import IContactComposer from './IContactComposer';

export default class ContactComposer implements IContactComposer {
  compose(data: any): IContact {
    const { id, uuid_cliente, fone, celular, celular2, email } = data;
    const contact = {
      id,
      uuid_cliente,
      fone,
      celular,
      celular2,
      email,
    };
    return contact;
  }
}
