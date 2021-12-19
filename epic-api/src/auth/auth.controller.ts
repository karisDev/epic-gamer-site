import { Body, Controller, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './localAuthGuard';
import RequestWithUser from './interfaces/requestWithUser.i';
import { response, Response } from 'express';
import JwtAuthGuard from './jwtAuth.guard';

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
    @UseGuards(LocalAuthGuard)
    async login(@Req() request: RequestWithUser, @Res() response: Response) {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(request.user);
        response.setHeader('Set-Cookie', cookie);
        return request.res.send(user);
    }

    @HttpCode(200)
    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logOut(@Req() _request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogout());
        response.send();
    }
}
