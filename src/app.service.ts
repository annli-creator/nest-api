import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // tslint:disable-next-line:ban-types
  getVersion(): Object {
    return {
      code: 200,
      msg: '',
      data: {
        version: '0.0.1',
      },
    };
  }
}
