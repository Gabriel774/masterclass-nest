import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({message: 'O nome é obrigatório'})
  @Length(5, 50)
  name: string;

  @IsNotEmpty()
  function: string;
}
