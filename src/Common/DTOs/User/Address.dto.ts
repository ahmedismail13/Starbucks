import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddressDto {
  @IsString()
  readonly city: string;
  @IsString()
  readonly area: string;
  @IsString()
  readonly street: string;
  @IsNumber()
  readonly building: number;
  @IsNumber()
  readonly floor: number;
  @IsNumber()
  readonly apartment: number;
  @IsNumber()
  @IsNotEmpty()
  readonly zipCode: number;
}
