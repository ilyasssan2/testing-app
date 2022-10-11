import "reflect-metadata";
import "dotenv/config";

import { describe, it, expect,beforeAll } from "@jest/globals";

import ProjectReposotrie from "../reposotries/project.reposotrie";
import ProjectService from "../services/project.service";
import connectToDatabase from "../utils/connectToDatabase";


beforeAll(async () => {
  await connectToDatabase();
});
describe("testing project functionality", () => {
  it("it should test add user", async () => {
    const repo = new ProjectReposotrie();
    const service = new ProjectService(repo);
    const newProject = {
      budget: 500,
      name: "p1",
      description: "description1",
      startDate: new Date(),
    };
    await service.save(newProject);
    const project = await service.getByName(newProject.name);
    expect(project).toEqual(expect.objectContaining({ name: newProject.name,description: newProject.description}));
  });
});
