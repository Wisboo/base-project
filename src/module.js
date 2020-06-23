import * as angular from 'angular';
import { view1 } from './view1.js';
import { AppRoutes } from './view1.js';
import './styles.scss';

const app = angular.module('wisboo', [])
  .config(AppRoutes);
  .component('view1', view1);
