import { Request, Response } from 'express';
import GetCustomerDetailsUseCase from './GetCustomerDetailsUseCase';

export default class GetCustomerDetailsController {
  constructor(private getCustomerDetails: GetCustomerDetailsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { login } = request.params;
      const { company } = request.query;

      const customer = await this.getCustomerDetails.execute({
        login,
        company: company as string,
      });
      return response.json(customer);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        message: err.message || 'Internal server error',
      });
    }
  }
}
