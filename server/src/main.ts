import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {isNullOrUndefined} from "util";

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap().then(r => {
  if (isNullOrUndefined(r)){
    return;
  }
  console.log(r);
});
