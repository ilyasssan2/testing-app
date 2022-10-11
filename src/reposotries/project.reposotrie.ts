import ProjectModel from "../models/project.model"

class Project {
  async save(project: {
    name: string;
    startDate: Date;
    description: string;
    budget: number;
  }) {
    await ProjectModel.create(project).save();
  }
  async getAll(): Promise<ProjectModel[]> {
    const projects = await ProjectModel.find();
    return projects;
  }
  async getByName(name: string) {
    const project = await ProjectModel.findOne({ where: { name } });
    return project;
  }
}


export default Project