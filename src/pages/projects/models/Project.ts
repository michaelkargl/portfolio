
export interface Project {
    id: string,
    children: Project[],
    name: string,
    description: string,
    url: URL
}