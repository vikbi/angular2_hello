//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
//console.log(Appp);
bootstrap(App, [])
  .catch(err => console.error(err));