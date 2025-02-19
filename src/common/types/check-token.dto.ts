'use strict';

import { ApiProperty } from '@nestjs/swagger';

export class CheckTokenDto {
  @ApiProperty()
  siteId: number;

  @ApiProperty()
  jwt: string;

  constructor(data: { siteId: number; jwt: string }) {
    this.siteId = data.siteId;
    this.jwt = data.jwt;
  }
}
