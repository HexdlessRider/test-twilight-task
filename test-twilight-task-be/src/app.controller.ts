import {
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly apiKey = 'fb1fffffa1e09a0888bbe10987edfc';
  private readonly apiUrl = 'https://api3.twilightcyber.com/infections/_search';

  @Get('/domain-info')
  async getDomain(@Query('domain') domain: string) {
    try {
      const response = await axios.post(
        `${this.apiUrl}`,
        {
          domains: [domain],
          size: 2,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error fetching domain info',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
