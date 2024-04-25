import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    user_name: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}