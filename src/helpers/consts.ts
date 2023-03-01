import { InputVariantType } from '@wulperstudio/cms';

interface DrawerConstsModel {
  paddingContainerDrawer: string;
  variantInput: InputVariantType;
}

export const consts = {
  backgroundImageRandom: 'https://source.unsplash.com/random',
  backgroundImageDefault: 'https://bit.ly/3owyZ8I',
  boxShadowStyle: 'rgb(0 0 0 / 9%) 0px 3px 12px',
  widthLayout: '50vw',
  avatarImg: 'https://mui.com/static/images/avatar/1.jpg',
};

export const DRAWER_CONSTS: DrawerConstsModel = {
  paddingContainerDrawer: '15px',
  variantInput: 'unfilled',
};

export const DEFAULT_REQUIRED_MESSAGE = 'Este campo es obligatorio';
export const DEFAULT_ERROR_MESSAGE = 'OCURRIÓ UN ERROR';
export const DEFAULT_UPDATE_MESSAGE = 'SE ACTUALIZÓ EL REGISTRO';
export const DEFAULT_CREATE_MESSAGE = 'SE HA CREADO EL REGISTRO';
export const DEFAULT_DELETE_MESSAGE = 'SE HA ELIMINADO EL REGISTRO';
export const DEFAULT_EMAIL_MESSAGE = 'El correo no cuenta con un formato correcto';
