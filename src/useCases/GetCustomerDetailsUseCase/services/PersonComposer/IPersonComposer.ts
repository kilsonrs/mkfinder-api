import IPerson from '../../dtos/IPerson';

export default interface IPersonComposer {
  compose(data: any): IPerson;
}
