import { Entity ,Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
class Project extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  public name: string;
  @Column()
  public startDate: Date;
  @Column()
  public description: string;
  @Column()
  public budget: number;

//   constructor(
//     name: string,
//     startDate: Date,
//     description: string,
//     budget: number
//   ) {
//       super()
//       this.name = name;
//       this.description = description;
//       this.startDate = startDate;
//       this.budget = budget;
//   }
}

export default Project;