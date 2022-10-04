export enum SiteComponentIdentifier {
  Banner = 'BANNER',
  Header = 'HEADER',
}

export const SiteComponentTemplates = {
  [SiteComponentIdentifier.Banner]: {
    title: '',
    description: '',
  },
  [SiteComponentIdentifier.Header]: {},
};

export type SiteComponent = {
  identifier: SiteComponentIdentifier;
  metadata: Record<string, boolean | number | string>;
};

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
  components: SiteComponent[];
  updatedAt: Date;
  createdAt: Date;

  constructor(
    title: string,
    description: string,
    id: string,
    colors: SiteColors = {
      primary: '#000000',
      secondary: '#000000',
      tertiary: '#000000',
      texts: '#000000',
    },
    components: SiteComponent[] = []
  ) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.title = title;
    this.description = description;
    this.id = id;
    this.colors = colors;
    this.components = components;
  }
}
