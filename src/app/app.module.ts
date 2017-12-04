import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { Authguard } from './authguard.service';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,  
    FormsModule, 
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:"", component: ProductsComponent},
      {path:"login", component: LoginComponent},
      {path:"products", component: ProductsComponent},
      {path:"shopping-cart", component: ShoppingCartComponent},

      {path:"check-out", component: CheckOutComponent, canActivate:[Authguard]},
      {path:"order-success", component: OrderSuccessComponent, canActivate:[Authguard]},
      {path:"my-orders", component: MyOrdersComponent, canActivate:[Authguard]},

      {path:"admin/admin-products", component: AdminProductsComponent},
      {path:"admin/products/new", component: ProductFormComponent},
      {path:'admin/products/:id', component: ProductFormComponent},
      {path:'admin/products', component: AdminProductsComponent},
      {path:"admin/admin-orders", component: AdminOrdersComponent}
            
    ])
  ],
  providers: [
    AngularFireAuth,
    AuthService,
    Authguard,
    CategoryService, 
    ProductService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
