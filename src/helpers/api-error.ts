import { NextApiResponse } from 'next'
import { NotFoundError } from './task-repository'

export interface IApiError {
  code: number
  message: string
}

export class ApiError {
  public static errorHandler(
    error: NotFoundError | Error,
    res: NextApiResponse
  ) {
    console.log(error)
    let data: IApiError = {
      code: 500,
      message: 'Internal Server Error',
    }
    if (error instanceof NotFoundError) {
      data = {
        code: 404,
        message: error.message,
      }
    }
    return this.format(data, res)
  }

  private static format(error: IApiError, res: NextApiResponse) {
    res.status(error.code).json(error)
  }
}
