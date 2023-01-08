export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = Maybe<T>;

export type PaginationArg = {
  limit?: number;
  page?: number;
  pageSize?: number;
  start?: number;
};

export type FilterInput<T = any> = {
  and?: InputMaybe<Array<InputMaybe<T>>>;
  between?: InputMaybe<Array<InputMaybe<T>>>;
  contains?: InputMaybe<T>;
  containsi?: InputMaybe<T>;
  endsWith?: InputMaybe<T>;
  eq?: InputMaybe<T>;
  gt?: InputMaybe<T>;
  gte?: InputMaybe<T>;
  in?: InputMaybe<Array<InputMaybe<T>>>;
  lt?: InputMaybe<T>;
  lte?: InputMaybe<T>;
  ne?: InputMaybe<T>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<T>;
  notContainsi?: InputMaybe<T>;
  notIn?: InputMaybe<Array<InputMaybe<T>>>;
  notNull?: InputMaybe<boolean>;
  null?: InputMaybe<boolean>;
  or?: InputMaybe<Array<InputMaybe<T>>>;
  startsWith?: InputMaybe<T>;
};

export type DateTimeFilterInput = FilterInput;
export type StringFilterInput = FilterInput<string>;
export type IntFilterInput = FilterInput<number>;
export type BooleanFilterInput = FilterInput<boolean>;
export type IdFilterInput = FilterInput<string>;
export type JsonFilterInput = FilterInput<{}>;

export type RawTargetDataOption = {
  id: string | null;
  attributes: { name: string | null } | null;
} | null;

export type RawImageData = {
  id: string | null;
  attributes: { url: string } | null;
} | null;

export type FileDataFromServer = {
  id: string;
  url: string;
};

export type AutocompleteData = {
  id: string;
  name: string;
};

export type FileWork = FileList | File | string | null | undefined;

export type LayoutMode = 'divider' | 'float';
export type LayoutTheme = 'light' | 'dark';

export interface CardModel {
  title: string;
  description: string;
  img: string;
  handleClick?: () => void;
}

export interface AgreementCardPropsModel {
  iconName: string;
  route: string;
  onFunctionIcon: () => void;
  labelTag?: string;
  colorTextTag?: string;
  backgroundColorTag?: string;
}

export type AutocompleteDataGroup = AutocompleteData & {
  group: string;
};
