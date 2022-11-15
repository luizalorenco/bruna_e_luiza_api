import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateFilmeDto from './dto/createFilme.dto';
import Filme from './entity/filmes.entity';
import { UpdateFilmeDto } from './dto/updateFilme.dto';

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(Filme) private filmeRepository: Repository<Filme>,
  ) {}

  // find all
  getAllFilmes() {
    return this.filmeRepository.find();
  }

  // find by id
  async getFilmeById(id: any) {
    const filme = await this.filmeRepository.findOne(id);
    if (filme) {
      return filme;
    }

    throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
  }

  // create
  async createFilme(filme: CreateFilmeDto) {
    const newFilme = await this.filmeRepository.create(filme);
    await this.filmeRepository.save(newFilme);

    return newFilme;
  }

  // update
  async updateFilme(id: any, post: UpdateFilmeDto) {
    await this.filmeRepository.update(id, post);
    const updatedFilme = await this.filmeRepository.findOne(id);
    if (updatedFilme) {
      return updatedFilme;
    }

    throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteFilme(id: number) {
    const deletedFilme = await this.filmeRepository.delete(id);
    if (!deletedFilme.affected) {
      throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}