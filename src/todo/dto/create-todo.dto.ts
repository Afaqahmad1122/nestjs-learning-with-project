import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
