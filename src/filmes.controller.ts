import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateFilmeDto from './dto/createFilme.dto';
import { FilmesService } from './filmes.service';
import { UpdateFilmeDto } from './dto/updateFilme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  // get all Filmes
  @Get()
  getFilmes() {
    return this.filmesService.getAllFilmes();
  }

 // get Filme by id
  @Get(':id')
  getFilmeById(@Param('id') id: string) {
    return this.filmesService.getFilmeById(Number(id));
  }

  // create Filme
  @Post()
  async createFilme(@Body() filme: CreateFilmeDto) {
    return this.filmesService.createFilme(filme);
  }

 /// update Filme
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() filme: UpdateFilmeDto) {
    return this.filmesService.updateFilme(Number(id), filme);
  }

  //delete Filme
  @Delete(':id')
  async deleteFilme(@Param('id') id: string) {
    this.filmesService.deleteFilme(Number(id));
  }
}