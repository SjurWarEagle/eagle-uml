import { Body, Controller, Post } from '@nestjs/common';
import { RenderService } from './render.service';

@Controller('/plantuml/v1/')
export class AppController {
  constructor(private readonly renderService: RenderService,
              ) {}

  @Post('render')
  async getHello(@Body() body: RenderRequest): Promise<string> {
    if (!body) {
      return undefined;
    }

    return await this.renderService.render(body.text);
  }
}
