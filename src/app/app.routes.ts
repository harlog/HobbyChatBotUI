import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter } from '@angular/router';

export const routes: Routes = [];
providers: [provideHttpClient(), provideRouter(routes)]
;
