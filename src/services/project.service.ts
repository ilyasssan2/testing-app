import UserReposotrie from "../reposotries/project.reposotrie";

class Project {
  constructor(private userReposotrie: UserReposotrie) {}
 async save(params: {
    name: string;
    startDate: Date;
    description: string;
    budget: number;
  }) {
    //  run some logic and then save the new project
   await this.userReposotrie.save(params);
  }
 async getByName(name: string) {
    //  run some logic and then save the new project
   const project = await  this.userReposotrie.getByName(name);
   return project;
  }
}

export default Project;