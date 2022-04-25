import { Type } from "class-transformer";
import {
  IsDefined,
  IsEnum,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from "class-validator";
import { AddressDto } from "./Address.dto";
import { UserSource } from "../../../Entity/User";

export class CreateUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly phoneNumber: string;

  @IsEnum(UserSource)
  readonly userSource: UserSource;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDto)
  readonly address: AddressDto;
}
