import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthentificationGuard } from './localAuthentificationGuard';
import RequestWithUser from './interfaces/requestWithUser.i';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    async register(
        @Body('email') email: string,
        @Body('password') password: string)
    {
        return this.authService.register({email, password});
    }

    @HttpCode(200)
    @Post('login')
    @UseGuards(LocalAuthentificationGuard)
    async login(@Req() request: RequestWithUser) {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(request.user);
        request.res.setHeader('Set-Cookie', cookie);
        return request.res.send(user);
    }
}
