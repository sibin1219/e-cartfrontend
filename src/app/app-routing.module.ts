import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { PnfComponent } from './pnf/pnf.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
{
  path:'',component:AllproductsComponent
},{
  path:'View/:id',component:ViewProductComponent
},{
  path:'user/login',component:LoginComponent
},{
  path:'user/register',component:RegisterComponent
},{
  path:'user/cart',component:CartComponent
},{
  path:'user/whishlist',component:WishlistComponent
},{
  path:'**',component:PnfComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
