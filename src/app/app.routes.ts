import { Routes } from '@angular/router';
import { ListComponent } from './domains/productos/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from './domains/productos/pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'about',
                //component: AboutComponent
                /**Permite hacer una carga perezosa de componentes en lugar de cargarlos todos juntos */
                loadComponent: () => import('@info/pages/about/about.component').then(m => m.AboutComponent)
            },
            {
                path: '',
//                component: ListComponent
                /**Permite hacer una carga perezosa de componentes en lugar de cargarlos todos juntos */
                loadComponent: () => import('@productos/pages/list/list.component').then(m => m.ListComponent)
                
            },
            {
                /*Parametro dinamico*/
                path: 'product/:id',
                //                component: ProductDetailComponent
                /**Permite hacer una carga perezosa de componentes en lugar de cargarlos todos juntos */
                loadComponent: () => import('@productos/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)

            }

        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
