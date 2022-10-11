import Project from "../models/project.model";
const projects: Project[] = [];


export const getAllProjects = () => projects;
export const save = (user: Project) => {
    projects.push(user)
};

export default {
  getAllProjects,
  save,
};
