import { ValidationArguments } from 'class-validator';

const message = {
  maxLength:
    (len: number) =>
    ({ property }: ValidationArguments) =>
      `O campo ${property} deve ter no maximo ${len}`,
  minLength:
    (len: number) =>
    ({ property }: ValidationArguments) =>
      `O campo ${property} deve ter no minimo ${len}`,
  isEmail: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser um email valido`,
  isBoolean: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser um booleano`,
  isNumber: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser um numero`,
  isString: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser uma string`,
  isEmpty: ({ property }: ValidationArguments) =>
    `O campo ${property} é obrigatorio`,
  isPhone: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser um telefone valido`,
  isDate: ({ property }: ValidationArguments) =>
    `O campo ${property} deve ser uma data`,
  isIn:
    (values: any[]) =>
    ({ property }: ValidationArguments) =>
      `O campo ${property} deve ser ${values.slice(0, -1).join(', ') + ' ou ' + values.slice(-1)}`,
};

export default message;
