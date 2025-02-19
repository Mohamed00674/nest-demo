import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RegexValidationPipe implements PipeTransform<string> {
  constructor(private readonly regex: RegExp) {}

  transform(value: string) {
    if (!this.regex.test(value)) {
      throw new BadRequestException('Invalid input');
    }
    return value;
  }
}
