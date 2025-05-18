import {Project} from "../models/Project";

export class ProjectBuilder {
    private project: Project = {} as unknown as Project;

    public constructor(id: string) {
        this.project.id = id;
    }

    public withName(name: string): ProjectBuilder {
        this.project.name = name;
        return this;
    }

    public withDescription(description: string): ProjectBuilder {
        this.project.description = description;
        return this;
    }

    public withUrl(url: string): ProjectBuilder {
        this.project.url = new URL(url);
        return this;
    }

    public withChild(id: string, builder: ((b: ProjectBuilder) => ProjectBuilder)) {
        const project = builder(new ProjectBuilder(id)).build();
        this.project.children ??= []
        this.project.children.push(project);
        return this;
    }

    public build(): Project {
        return this.project;
    }

}