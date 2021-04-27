import { Request, Response } from "express";
import { EmailValidatorClassAdapter } from "../validation/email-validator-adapter";

export class ValidationEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body
      const emailValidator = new EmailValidatorClassAdapter()
      const isValid = emailValidator.isValid(email)

      if (!isValid) {
        return response.status(200).json({
          email,
          message: 'O email não e valido!'
        })
      }
      return response.status(200).json({
        email,
        message: 'O email e valido!'
      })
    } catch (error) {
      return response.status(500).json({
        error,
        message: 'Eroo no servidor'
      })
    }
  }
}