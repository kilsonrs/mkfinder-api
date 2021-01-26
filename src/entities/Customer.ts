export default class Customer {
  public company!: string;
  public id!: string;
  public codigo!: string;
  public nome!: string;
  public nome_res!: string;
  public login!: string;
  public cpf_cnpj!: string;
  public tipo!: string;
  public coordenadas!: string;
  public senha!: string;
  public email!: string;
  public ip!: string;
  public mac!: string;
  public ramal!: string;
  public endereco!: string;
  public numero!: string;
  public bairro!: string;
  public complemento!: string;
  public cidade!: string;
  public estado!: string;
  public cep!: string;
  public uuid_cliente!: string;
  constructor(props: Customer) {
    Object.assign(this, props);
  }
}
