import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isNullOrUndefined } from 'util';
require('dotenv').config()

async function bootstrap() {
  const port = process.env.SERVER_PORT;
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors();
  await app.listen(port);

  console.log(`Started on port ${port}`);
}
bootstrap().then((r) => {
  if (isNullOrUndefined(r)) {
    return;
  }
  console.log(r);
});
