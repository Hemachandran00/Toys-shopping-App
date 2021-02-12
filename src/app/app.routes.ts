import { CategoryComponent } from "./pages/category/category.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";


export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'category',
        component:CategoryComponent
    },
    {
        path:'category/:hero',
        component:CategoryComponent
    },
    {
        path:'product/:id',
        component:ProductComponent
    },
    {
        path:'**',
        component:HomeComponent
    }
];