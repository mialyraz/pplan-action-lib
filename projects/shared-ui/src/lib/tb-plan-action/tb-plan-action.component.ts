import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tb-plan-action',
  templateUrl: './tb-plan-action.component.html',
  styleUrls: ['./tb-plan-action.component.css']
})
export class TBPlanActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() checkpoint: any;
  @Input() planActions: any[] = [];
  @Input() stats: any;
  @Input() selectedKPI: string = '';

  @Output() back = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() add = new EventEmitter<void>();
  @Output() openFac = new EventEmitter<any>();
  @Output() kpiChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  searchText = '';
  

}
