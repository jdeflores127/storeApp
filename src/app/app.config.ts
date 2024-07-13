import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';

import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    /*el withComponentInputBinding transforma los parametros en rutas de la url */
    /*El preload sirve para redes lentas, JS aprovecha los tiempos muertos y descarga chunks */
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),

    provideHttpClient()

  ]
};
