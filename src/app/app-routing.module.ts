import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PortfolioComponent} from "./portfolio";

const routes: Routes = [
  {path: "portfolio", component: PortfolioComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/portfolio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
