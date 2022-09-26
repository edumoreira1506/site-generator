type SiteColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  texts: string;
};

export class Site {
  title: string;
  description: string;
  id: string;
  colors: SiteColors;

  constructor(
    title: string,
    description: string,
    id: string,
    colors: SiteColors = {
      primary: '#000000',
      secondary: '#000000',
      tertiary: '#000000',
      texts: '#000000',
    }
  ) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.colors = colors;
  }
}
