import { AppLinks } from './types';

const DASHBOARD_ROUTE_TITLE = 'Inicio';
const SURVEYS_ROUTE_TITLE = 'Encuestas';
const REQUIREMENTS_ROUTE_TITLE = 'Requisitos';
const QUESTIONS_ROUTE_TITLE = 'Preguntas';
const OPTIONS_ROUTE_TITLE = 'Opciones';
const ANSWERS_ROUTE_TITLE = 'Respuestas';
const TOURS_ROUTE_TITLE = 'Recorridos';
const RESULTS_ROUTE_TITLE = 'Resultados';
const SURVEYED_ROUTE_TITLE = 'Encuestados';
const USERS_ROUTE_TITLE = 'Usuarios';
const CLIENTS_ROUTE_TITLE = 'Clientes';
export const USER_WELCOME_NAVBAR = 'Bienvenido';
export const USER_SETTINGS = 'Configuración';
export const LOGOUT = 'Cerrar sesión';

export const APP_LINKS: AppLinks = [
  {
    text: DASHBOARD_ROUTE_TITLE,
    route: '/dashboard',
    key: 'dashboard',
  },
  {
    text: SURVEYS_ROUTE_TITLE,
    route: '/surveys',
    key: 'surveys',
  },
  {
    text: REQUIREMENTS_ROUTE_TITLE,
    route: '/requirements',
    key: 'requirements',
  },
  {
    text: QUESTIONS_ROUTE_TITLE,
    route: '/questions',
    key: 'questions',
  },
  {
    text: OPTIONS_ROUTE_TITLE,
    route: '/options',
    key: 'options',
  },
  {
    text: ANSWERS_ROUTE_TITLE,
    route: '/answers',
    key: 'answers',
  },
  {
    text: TOURS_ROUTE_TITLE,
    route: '/tours',
    key: 'tours',
  },
  {
    text: RESULTS_ROUTE_TITLE,
    route: '/results',
    key: 'results',
  },
  {
    text: SURVEYED_ROUTE_TITLE,
    route: '/surveyed',
    key: 'surveyed',
  },
  {
    text: USERS_ROUTE_TITLE,
    route: '/users',
    key: 'users',
  },
  {
    text: CLIENTS_ROUTE_TITLE,
    route: '/clients',
    key: 'clients',
  },
];
