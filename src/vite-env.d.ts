/// <reference types="vite/client" />

import { PropsWithChildren } from 'react';

declare module 'react' {
  export type FCC<T = {}> = React.FC<PropsWithChildren<T>>;
}
