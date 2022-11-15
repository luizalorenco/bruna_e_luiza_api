import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Filme {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public titulo: string;

  @Column()
  public ano: string;

  @Column()
  public diretor: string;

  @Column()
  public genero: string;
}

export default Filme;