import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  isNotEmpty,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  id: number;

  @IsEmail({}, { message: 'Please provide valid Email.' })
  email: string;

  @IsAlphanumeric(undefined, {
    message: 'Password does not allow other than alphanumeric characters.',
  })
  password: string;

  @IsOptional()
  @IsAlpha()
  first_name?: string;

  @IsOptional()
  @IsAlpha()
  last_name?: string;

  @IsOptional()
  @IsAlpha()
  userType?: string;

  @IsOptional()
  @IsAlpha()
  brandName?: string;

  @IsOptional()
  @IsAlpha()
  vatId?: string;

  @IsOptional()
  @IsAlpha()
  representativeName?: string;

  @IsOptional()
  @IsAlpha()
  companyAddres?: string;

  @IsOptional()
  @IsAlpha()
  packageId?: string;
}
