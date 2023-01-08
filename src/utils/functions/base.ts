import dayjs from 'dayjs';
import {
  AutocompleteData,
  Maybe,
  RawImageData,
  RawTargetDataOption,
} from '../types';

export const Capitalize = (str?: string | null, separator?: string) => {
  let words;

  if (separator) words = str?.trim().replaceAll(separator, ' ').split(' ');
  if (!separator) words = str?.trim().split(' ');

  return (
    words
      ?.map(
        (word) => `${word?.[0]?.toUpperCase()}${word?.substring(1)?.toLowerCase()}`,
      )
      .join(' ') || ''
  );
};

export const parseLocalStorage = (key: string) => {
  if (!localStorage && localStorage !== '') return undefined;
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || '')
    : undefined;
};

export const str = (e: Maybe<string>, defaultStr = '') => (e !== null && e !== undefined && e !== '' ? e.trim() : defaultStr);

export const parseTargetToArrAutocomplete = (
  arr: RawTargetDataOption[],
): AutocompleteData[] => arr
  .filter((e) => e?.id && e?.attributes && e.attributes.name)
  .map((e) => ({
    id: e?.id || '',
    name: Capitalize(e?.attributes?.name || '', '_'),
  }));

export const parseTargetToAutocomplete = (
  e?: RawTargetDataOption,
): AutocompleteData => ({
  id: e?.id || '',
  name: Capitalize(e?.attributes?.name) || '',
});

export const slugify = (text: string): string => text
  .toString()
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .trim()
  .replace(/[^a-z0-9]/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');

// eslint-disable-next-line max-len
export const reduceArrToIDsOrUndefined = (arr: AutocompleteData[]) => (arr.length > 0 ? arr.map((e) => e.id) : undefined);

export const reduceObjOrUndefined = (obj?: AutocompleteData) => {
  if (obj && obj.id) {
    return obj.id;
  }
  return undefined;
};

export const parseDateToString = (date?: Date | string) => {
  if (date) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  return dayjs().format('YYYY-MM-DD');
};

// eslint-disable-next-line max-len
export const reduceArrTargetToIDsOrUndefined = (arr: RawTargetDataOption[]) => (arr.length > 0 ? arr.filter((e) => e?.id).map((e) => e?.id) : undefined) as
    | string[]
    | undefined;

export const formatTemplateText = (
  text: string,
  name: string,
  organization: string,
) => text.replaceAll('@name', name).replaceAll('@company', organization);

export const copyToClipboard = async (data: string) => {
  await navigator.clipboard.writeText(data);
};

export const parseArrRawImageData = (arr: RawImageData[]) => arr
  ?.filter((e) => e?.id && e?.attributes && e?.attributes.url)
  .map((value) => ({
    id: value?.id || '',
    url: value?.attributes?.url || '',
  }));

export const fnFallback = (fn?: Function) => fn?.() || (() => {});
