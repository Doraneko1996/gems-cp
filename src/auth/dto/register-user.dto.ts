import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {

    @ApiProperty()
    user_name: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    role: number;

    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;
}