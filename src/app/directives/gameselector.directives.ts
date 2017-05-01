import { Directive, 
    OnInit, 
    ElementRef, 
    HostListener,
    Output 
} from "@angular/core";

@Directive({
    selector: '[gameselector]',
    outputs: ["selectedoutput"]
})
export class GameSelectorDirectives implements OnInit {

    selectedoutput:boolean = false;
    
    @HostListener('mouseover') onMouseOver() {
        this.selectedoutput = true;
    //    console.log('1');
    }

    constructor(private element: ElementRef){

    }
    ngOnInit(): void {
    
    }
}
          