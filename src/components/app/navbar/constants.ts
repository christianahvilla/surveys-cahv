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
    route: '/dashboard/list',
    key: 'dashboard',
  },
  {
    text: SURVEYS_ROUTE_TITLE,
    route: '/surveys/list',
    key: 'surveys',
  },
  {
    text: REQUIREMENTS_ROUTE_TITLE,
    route: '/requirements/list',
    key: 'requirements',
  },
  {
    text: QUESTIONS_ROUTE_TITLE,
    route: '/questions/list',
    key: 'questions',
  },
  {
    text: OPTIONS_ROUTE_TITLE,
    route: '/options/list',
    key: 'options',
  },
  {
    text: ANSWERS_ROUTE_TITLE,
    route: '/answers/list',
    key: 'answers',
  },
  {
    text: TOURS_ROUTE_TITLE,
    route: '/tours/list',
    key: 'tours',
  },
  {
    text: RESULTS_ROUTE_TITLE,
    route: '/results/list',
    key: 'results',
  },
  {
    text: SURVEYED_ROUTE_TITLE,
    route: '/surveyed/list',
    key: 'surveyed',
  },
  {
    text: USERS_ROUTE_TITLE,
    route: '/users/list',
    key: 'users',
  },
  {
    text: CLIENTS_ROUTE_TITLE,
    route: '/clients/list',
    key: 'clients',
  },
];
