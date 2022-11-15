import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Filme from './entity/filmes.entity';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filme])],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}