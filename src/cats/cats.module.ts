import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  components: [CatsService],
  exports: [CatsService]
})
export class CatsModule { }
