import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[app-anchor]'
})

export class AppAnchorDirective {
  constructor(public ViewContainerRef: ViewContainerRef) {}
}
