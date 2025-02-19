import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

const configService = new ConfigService();

const tokenExtractor = (req: Request): string | null => {
  const token = req?.headers?.authorization;

  if (!token) {
    return null;
  }
  return token.split(' ')[1];
};

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly conf: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([tokenExtractor]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_KEY'),
    });
  }
  validate(user) {
    return {
      email: user.email,
      fullname: user.fullname,
      avatar: user.avatar,
    };
  }
}
