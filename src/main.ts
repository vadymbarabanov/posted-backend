import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const DEFAULT_PORT = 4000
const PORT = process.env.PORT || DEFAULT_PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () =>
    console.log(`🚀 Server started on port http://localhost:${PORT}`),
  )
}
bootstrap()
