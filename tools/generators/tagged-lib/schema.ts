export interface GeneratorOptions {
    name: string;
    type?: "util"|"ui"|"feature"|"e2e";
    directory?:"shared"|"api"|"store";
  }