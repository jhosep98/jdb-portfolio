import { addCollection } from '@iconify/react';

const PROVIDER_PROJECT = 'portfolio';

const PREFIX_PROJECT = 'jdb';

const getIconifyName = (iconName: string) => `@${PROVIDER_PROJECT}:${PREFIX_PROJECT}:${iconName}`;

export const ICONS_PROJECT = {
  home: 'home',
  person: 'person',
  settings: 'settings',
  email: 'email',
  cake: 'cake',
  location: 'location',
  back_arrow: 'back_arrow',
  back_chevron: 'back_chevron',
};

export const ICONS_NAME = {
  home: getIconifyName(ICONS_PROJECT.home),
  person: getIconifyName(ICONS_PROJECT.person),
  settings: getIconifyName(ICONS_PROJECT.settings),
  email: getIconifyName(ICONS_PROJECT.email),
  cake: getIconifyName(ICONS_PROJECT.cake),
  location: getIconifyName(ICONS_PROJECT.location),
  back_arrow: 'eva:arrow-back-outline',
  back_chevron: 'eva:arrow-ios-back-fill',
};

export const InitializerIcons = () => {
  // name generated from iconify
  // @{PROVIDER_PROJECT}:{PREFIX_PROJECT}:{name}
  // example: @portfolio:jdb:edit

  addCollection({
    prefix: PREFIX_PROJECT,
    icons: {
      [ICONS_PROJECT.home]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z"/></svg>',
      },
      [ICONS_PROJECT.person]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="5"/><path stroke-linecap="round" stroke-linejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"/></g></svg>',
      },
      [ICONS_PROJECT.settings]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 2v4l-2 1l-3-3l-4 4l3 3l-1 2H2v6h4l1 2l-3 3l4 4l3-3l2 1v4h6v-4l2-1l3 3l4-4l-3-3l1-2h4v-6h-4l-1-2l3-3l-4-4l-3 3l-2-1V2Z"/><circle cx="16" cy="16" r="4"/></g></svg>',
      },
      [ICONS_PROJECT.email]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>',
      },
      [ICONS_PROJECT.cake]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22q-.425 0-.712-.288Q3 21.425 3 21v-5q0-.825.587-1.413Q4.175 14 5 14v-4q0-.825.588-1.413Q6.175 8 7 8h4V6.55q-.45-.3-.725-.725Q10 5.4 10 4.8q0-.375.15-.738q.15-.362.45-.662l1.05-1.05q.05-.05.35-.15q.05 0 .35.15L13.4 3.4q.3.3.45.662q.15.363.15.738q0 .6-.275 1.025q-.275.425-.725.725V8h4q.825 0 1.413.587Q19 9.175 19 10v4q.825 0 1.413.587Q21 15.175 21 16v5q0 .425-.288.712Q20.425 22 20 22Zm3-8h10v-4H7Zm-2 6h14v-4H5Zm2-6h10Zm-2 6h14Zm14-6H5h14Z"/></svg>',
      },
      [ICONS_PROJECT.location]: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"/></g></svg>',
      },
    },
    width: 24,
    height: 24,
    provider: PROVIDER_PROJECT,
  });
};
