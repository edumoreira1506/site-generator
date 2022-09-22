export class Site {
  title: string;
  description: string;
  id: string;
  colors: string[];

  constructor(
    title: string,
    description: string,
    id: string,
    colors: string[] = []
  ) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.colors = colors;
  }
}
