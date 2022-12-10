import { InputBoxGroupModel } from '@wulperstudio/cms';

import { valuesLanguage } from 'data';
import { Language } from 'interfaces';

export const languageModeArgs: InputBoxGroupModel<{
  id: Language;
  name: Language;
  children?: React.ReactNode;
}> = {
  options: [
    {
      id: 'en',
      name: 'en',
      children: valuesLanguage[0].icon,
    },
    {
      id: 'es',
      name: 'es',
      children: valuesLanguage[1].icon,
    },
  ],
  label: 'Language',
  variant: 'outlined',
  sizeElement: 'large',
};
