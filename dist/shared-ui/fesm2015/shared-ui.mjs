import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class SharedUiService {
    constructor() { }
}
SharedUiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SharedUiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SharedUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedUiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SharedUiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: SharedUiComponent, selector: "lib-shared-ui", ngImport: i0, template: `
    <p>
      shared-ui works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-ui', template: `
    <p>
      shared-ui works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class TBPlanActionComponent {
    constructor() {
        this.planActions = [];
        this.selectedKPI = '';
        this.back = new EventEmitter();
        this.save = new EventEmitter();
        this.delete = new EventEmitter();
        this.add = new EventEmitter();
        this.openFac = new EventEmitter();
        this.kpiChange = new EventEmitter();
        this.searchChange = new EventEmitter();
        this.searchText = '';
    }
    ngOnInit() {
    }
}
TBPlanActionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TBPlanActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TBPlanActionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TBPlanActionComponent, selector: "lib-tb-plan-action", inputs: { checkpoint: "checkpoint", planActions: "planActions", stats: "stats", selectedKPI: "selectedKPI" }, outputs: { back: "back", save: "save", delete: "delete", add: "add", openFac: "openFac", kpiChange: "kpiChange", searchChange: "searchChange" }, ngImport: i0, template: "<div class=\"pa-container\">\n\n  <!-- HEADER -->\n  <div class=\"pa-header\">\n\n    <button class=\"btn btn-outline-primary\"\n            (click)=\"back.emit()\">\n      \u2190 Retour\n    </button>\n\n    <div class=\"pa-title\">\n      Action du checkpoint {{ checkpoint?.idqualite }} -\n      {{ checkpoint?.description }}\n    </div>\n\n    <input type=\"text\"\n           class=\"form-control pa-search\"\n           placeholder=\"Recherche...\"\n           [(ngModel)]=\"searchText\"\n           (input)=\"searchChange.emit(searchText)\">\n  </div>\n\n  <!-- KPI DASHBOARD -->\n  <div class=\"pa-dashboard\">\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'all'\"\n         (click)=\"kpiChange.emit('all')\">\n      <h4>Tous les sujets</h4>\n      <div class=\"value\">{{ stats?.nbrSujet }}</div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'sansAction'\"\n         (click)=\"kpiChange.emit('sansAction')\">\n      <h4>Sujet sans action</h4>\n      <div class=\"value text-warning\">\n        {{ stats?.nbrSujetSansAction }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'cloturees'\"\n         (click)=\"kpiChange.emit('cloturees')\">\n      <h4>Cl\u00F4tur\u00E9es</h4>\n      <div class=\"value text-success\">\n        {{ stats?.nbrTermines }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'retard'\"\n         (click)=\"kpiChange.emit('retard')\">\n      <h4>En retard</h4>\n      <div class=\"value text-danger\">\n        {{ stats?.nbrRetards }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\">\n      <h4>Taux global</h4>\n      <div class=\"value\">\n        {{ stats?.tauxGlobal }} %\n      </div>\n    </div>\n\n  </div>\n\n  <!-- LISTE PLAN ACTION -->\n  <div *ngFor=\"let pa of planActions; let i = index\"\n       class=\"pa-item\">\n\n    <div class=\"pa-item-header\">\n\n      <span class=\"fw-bold\">\n        PA / Sujet #{{ i + 1 }}\n      </span>\n\n      <div class=\"pa-badges\">\n        <span class=\"badge bg-primary\">\n          \uD83D\uDDC2 {{ pa.nbActionsOuvertes || 0 }}\n        </span>\n\n        <span class=\"badge bg-success\">\n          \u2705 {{ pa.nbrTermines || 0 }}\n        </span>\n      </div>\n\n      <div class=\"pa-donut\"\n           [style.--percent]=\"pa.tauxAvancement || 0\">\n        <div class=\"center\">\n          {{ pa.tauxAvancement || 0 }}%\n        </div>\n      </div>\n\n      <div class=\"pa-actions\">\n        <button class=\"btn btn-sm btn-success\"\n                (click)=\"openFac.emit(pa)\">\n          Voir FAC\n        </button>\n\n        <button class=\"btn btn-sm btn-danger\"\n                (click)=\"delete.emit(pa)\">\n          Supprimer\n        </button>\n      </div>\n    </div>\n\n    <div class=\"pa-item-body\">\n      <textarea class=\"form-control\"\n                [(ngModel)]=\"pa.sujet\"\n                (blur)=\"save.emit(pa)\"\n                rows=\"2\">\n      </textarea>\n    </div>\n  </div>\n\n  <button class=\"btn btn-success mt-3\"\n          (click)=\"add.emit()\">\n    + Ajouter un sujet\n  </button>\n\n</div>\n", styles: [".pa-container{max-width:1600px;margin:auto;padding:20px}.pa-header{display:flex;align-items:center;gap:20px;margin-bottom:30px}.pa-title{flex:1;text-align:center;font-size:1.3rem;font-weight:600}.pa-search{width:250px}.pa-dashboard{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-bottom:30px}.pa-card{background:white;padding:15px;border-radius:12px;box-shadow:0 4px 12px #00000014;cursor:pointer;transition:.2s ease}.pa-card:hover{transform:translateY(-3px)}.pa-card.active{border:2px solid #0d6efd}.pa-item{background:white;border-radius:12px;margin-bottom:20px;box-shadow:0 4px 12px #00000014}.pa-item-header{display:flex;align-items:center;justify-content:space-between;padding:15px;background:#f5f7f8;border-radius:12px 12px 0 0}.pa-donut{--percent: 0;width:40px;height:40px;border-radius:50%;background:conic-gradient(#198754 calc(var(--percent) * 1%),#e0e0e0 0);display:flex;align-items:center;justify-content:center}.pa-donut:before{content:\"\";width:28px;height:28px;background:white;border-radius:50%;position:absolute}.pa-donut .center{position:relative;font-size:.7rem;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TBPlanActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tb-plan-action', template: "<div class=\"pa-container\">\n\n  <!-- HEADER -->\n  <div class=\"pa-header\">\n\n    <button class=\"btn btn-outline-primary\"\n            (click)=\"back.emit()\">\n      \u2190 Retour\n    </button>\n\n    <div class=\"pa-title\">\n      Action du checkpoint {{ checkpoint?.idqualite }} -\n      {{ checkpoint?.description }}\n    </div>\n\n    <input type=\"text\"\n           class=\"form-control pa-search\"\n           placeholder=\"Recherche...\"\n           [(ngModel)]=\"searchText\"\n           (input)=\"searchChange.emit(searchText)\">\n  </div>\n\n  <!-- KPI DASHBOARD -->\n  <div class=\"pa-dashboard\">\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'all'\"\n         (click)=\"kpiChange.emit('all')\">\n      <h4>Tous les sujets</h4>\n      <div class=\"value\">{{ stats?.nbrSujet }}</div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'sansAction'\"\n         (click)=\"kpiChange.emit('sansAction')\">\n      <h4>Sujet sans action</h4>\n      <div class=\"value text-warning\">\n        {{ stats?.nbrSujetSansAction }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'cloturees'\"\n         (click)=\"kpiChange.emit('cloturees')\">\n      <h4>Cl\u00F4tur\u00E9es</h4>\n      <div class=\"value text-success\">\n        {{ stats?.nbrTermines }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\"\n         [class.active]=\"selectedKPI === 'retard'\"\n         (click)=\"kpiChange.emit('retard')\">\n      <h4>En retard</h4>\n      <div class=\"value text-danger\">\n        {{ stats?.nbrRetards }}\n      </div>\n    </div>\n\n    <div class=\"pa-card\">\n      <h4>Taux global</h4>\n      <div class=\"value\">\n        {{ stats?.tauxGlobal }} %\n      </div>\n    </div>\n\n  </div>\n\n  <!-- LISTE PLAN ACTION -->\n  <div *ngFor=\"let pa of planActions; let i = index\"\n       class=\"pa-item\">\n\n    <div class=\"pa-item-header\">\n\n      <span class=\"fw-bold\">\n        PA / Sujet #{{ i + 1 }}\n      </span>\n\n      <div class=\"pa-badges\">\n        <span class=\"badge bg-primary\">\n          \uD83D\uDDC2 {{ pa.nbActionsOuvertes || 0 }}\n        </span>\n\n        <span class=\"badge bg-success\">\n          \u2705 {{ pa.nbrTermines || 0 }}\n        </span>\n      </div>\n\n      <div class=\"pa-donut\"\n           [style.--percent]=\"pa.tauxAvancement || 0\">\n        <div class=\"center\">\n          {{ pa.tauxAvancement || 0 }}%\n        </div>\n      </div>\n\n      <div class=\"pa-actions\">\n        <button class=\"btn btn-sm btn-success\"\n                (click)=\"openFac.emit(pa)\">\n          Voir FAC\n        </button>\n\n        <button class=\"btn btn-sm btn-danger\"\n                (click)=\"delete.emit(pa)\">\n          Supprimer\n        </button>\n      </div>\n    </div>\n\n    <div class=\"pa-item-body\">\n      <textarea class=\"form-control\"\n                [(ngModel)]=\"pa.sujet\"\n                (blur)=\"save.emit(pa)\"\n                rows=\"2\">\n      </textarea>\n    </div>\n  </div>\n\n  <button class=\"btn btn-success mt-3\"\n          (click)=\"add.emit()\">\n    + Ajouter un sujet\n  </button>\n\n</div>\n", styles: [".pa-container{max-width:1600px;margin:auto;padding:20px}.pa-header{display:flex;align-items:center;gap:20px;margin-bottom:30px}.pa-title{flex:1;text-align:center;font-size:1.3rem;font-weight:600}.pa-search{width:250px}.pa-dashboard{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-bottom:30px}.pa-card{background:white;padding:15px;border-radius:12px;box-shadow:0 4px 12px #00000014;cursor:pointer;transition:.2s ease}.pa-card:hover{transform:translateY(-3px)}.pa-card.active{border:2px solid #0d6efd}.pa-item{background:white;border-radius:12px;margin-bottom:20px;box-shadow:0 4px 12px #00000014}.pa-item-header{display:flex;align-items:center;justify-content:space-between;padding:15px;background:#f5f7f8;border-radius:12px 12px 0 0}.pa-donut{--percent: 0;width:40px;height:40px;border-radius:50%;background:conic-gradient(#198754 calc(var(--percent) * 1%),#e0e0e0 0);display:flex;align-items:center;justify-content:center}.pa-donut:before{content:\"\";width:28px;height:28px;background:white;border-radius:50%;position:absolute}.pa-donut .center{position:relative;font-size:.7rem;font-weight:700}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { checkpoint: [{
                type: Input
            }], planActions: [{
                type: Input
            }], stats: [{
                type: Input
            }], selectedKPI: [{
                type: Input
            }], back: [{
                type: Output
            }], save: [{
                type: Output
            }], delete: [{
                type: Output
            }], add: [{
                type: Output
            }], openFac: [{
                type: Output
            }], kpiChange: [{
                type: Output
            }], searchChange: [{
                type: Output
            }] } });

class SharedUiModule {
}
SharedUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: SharedUiModule, declarations: [SharedUiComponent,
        TBPlanActionComponent], imports: [CommonModule,
        FormsModule // <
    ], exports: [SharedUiComponent] });
SharedUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiModule, imports: [CommonModule,
        FormsModule // <
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SharedUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedUiComponent,
                        TBPlanActionComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule // <
                    ],
                    exports: [
                        SharedUiComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of shared-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedUiComponent, SharedUiModule, SharedUiService, TBPlanActionComponent };
//# sourceMappingURL=shared-ui.mjs.map
