import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RenderService {
  // https://plantuml.com/de/text-encoding

  private hexEncode(text: string): string {
    let hex, i;

    let result = '';
    for (i = 0; i < text.length; i++) {
      hex = text.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-2);
    }

    return result;
  }

  public async render(textAsAscii: string): Promise<string> {
    const param = this.hexEncode(textAsAscii);
    // console.log(param);
    let response;
    try {
    response = await axios.get(
      'http://localhost:7450/plantuml/png/~h' + param,
      {
        responseType: 'arraybuffer',
      },
    );

    return Buffer.from(response.data, 'binary').toString('base64');

    }catch (e) {
      console.log('e',e.response.data);
      return Buffer.from(e.response.data, 'binary').toString('base64');
    }
  }
}
