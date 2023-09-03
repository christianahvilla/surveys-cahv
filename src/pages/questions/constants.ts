export const ADD_QUESTION_ROUTE = '/questions/create';
export const LIST_QUESTION_ROUTE = '/questions/list';
export const EDIT_QUESTION_ROUTE = '/questions/edit';

export const AVAILABLE_QUESTION_TYPE = [
  {
    key: 'abierta',
    label: 'Abierta',
  },
  {
    key: 'multiple',
    label: 'Múltiple',
  },
  {
    key: 'multipleimages',
    label: 'Imagenes Múltiples',
  },
];

// sIn(['encuesta', 'personalNombre', 'personalApat', 'personalAmat','personalEdad',
//     'personalCel', 'personalMail', 'personalEstudios'])
//     proposito:string;

export const QUESTIONS_PROPOSES = [
  {
    key: 'encuesta',
    label: 'Encuesta',
  },
  {
    key: 'personalNombre',
    label: 'Nombre',
  },
  {
    key: 'personalApat',
    label: 'Apellido Paterno',
  },
  {
    key: 'personalAmat',
    label: 'Apellido Materno',
  },
  {
    key: 'personalEdad',
    label: 'Edad',
  },
  {
    key: 'personalCel',
    label: 'Celular',
  },
  {
    key: 'personalMail',
    label: 'Correo',
  },
  {
    key: 'personalEstudios',
    label: 'Estudios',
  },
];
