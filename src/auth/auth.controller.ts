import { Body, Controller, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { Role } from './roles/roles.decorator';
import { UserRole } from './roles/roles.enum';

@ApiTags('Authenticator')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register/teacher')
    @Role(UserRole.Admin)
    registerTeacher(@Body() registerUserDto: RegisterUserDto): Promise<User> {
        return this.authService.registerTeacher(registerUserDto);
    }

    @Post('register/student')
    @Role(UserRole.Admin)
    @Role(UserRole.Teacher)
    registerStudent(@Body() registerUserDto: RegisterUserDto): Promise<User> {
        return this.authService.registerStudent(registerUserDto);
    }

    @Post('login')
    @ApiResponse({ status: 201, description: 'Đăng nhập thành công!' })
    @ApiResponse({ status: 401, description: 'Đăng nhập thất bại!' })
    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        return this.authService.login(loginUserDto);
    }

    @Post('refresh-token')
    refreshToken(@Body() { refresh_token }): Promise<any> {
        return this.authService.refreshToken(refresh_token);
    }

}
