//Importar módulos del router de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

//Array de rutas
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '**', component: LoginComponent }
  ];

// Exportar el módulo del router
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
// export class AppRoutingModule { }
// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);-->