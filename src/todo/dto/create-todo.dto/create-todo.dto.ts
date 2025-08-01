import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsOptional()
  completed: boolean;
}
