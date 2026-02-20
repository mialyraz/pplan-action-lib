import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TBPlanActionComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    checkpoint: any;
    planActions: any[];
    stats: any;
    selectedKPI: string;
    back: EventEmitter<void>;
    save: EventEmitter<any>;
    delete: EventEmitter<any>;
    add: EventEmitter<void>;
    openFac: EventEmitter<any>;
    kpiChange: EventEmitter<string>;
    searchChange: EventEmitter<string>;
    searchText: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TBPlanActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TBPlanActionComponent, "lib-tb-plan-action", never, { "checkpoint": "checkpoint"; "planActions": "planActions"; "stats": "stats"; "selectedKPI": "selectedKPI"; }, { "back": "back"; "save": "save"; "delete": "delete"; "add": "add"; "openFac": "openFac"; "kpiChange": "kpiChange"; "searchChange": "searchChange"; }, never, never, false>;
}
