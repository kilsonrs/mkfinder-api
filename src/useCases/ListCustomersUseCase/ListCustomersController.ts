import { Request, Response } from 'express';
import ListCustomersUseCase from './ListCustomersUseCase';

export default class ListCustomersController {
  constructor(private listCustomers: ListCustomersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { query } = request;
      const customers = await this.listCustomers.execute({
        query,
      });
      return response.json(customers);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        message: err.message || 'Internal server error',
      });
    }
  }
}
