import {Injectable} from '@nestjs/common';
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

        const url = process.env.PLANTUML_SERVER_URL + '/plantuml/png/~h' + param;
        // console.log('url',url);
        try {
            response = await axios.get(
                url,
                {
                    responseType: 'arraybuffer',
                },
            );

            return Buffer.from(response.data, 'binary').toString('base64');

        } catch (e) {
            // console.log('e', e.response.data);
            return Buffer.from(e.response.data, 'binary').toString('base64');
        }
    }
}
