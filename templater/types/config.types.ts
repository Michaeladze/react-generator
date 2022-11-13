export interface IConfig {
  variables: IConfigVariables;
  explicit?: boolean;
  domains: Record<string, IConfigDomain>
}

export interface IConfigDomain {
  structure: any;
  templates: IConfigComponentTemplates[];
  questions: IConfigComponentQuestion[];
}

export interface IConfigComponentTemplates {
  name: string;
  template: string;
}

export interface IConfigComponentQuestion {
  name: string;
  message: string;
  type: string;
  required?: boolean;
  validate?: (input: any) => boolean;
}

export interface IConfigVariables {
  root: string;
}
