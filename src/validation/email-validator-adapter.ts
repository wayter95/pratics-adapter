import isEmail from 'validator/lib/isEmail'
import { EmailValidatorProtocol } from "./email-validator-protocols";

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isValid(email: string): boolean {
    return isEmail(email);
  }
}