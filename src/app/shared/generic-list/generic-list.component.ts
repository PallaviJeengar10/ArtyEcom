import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { RoleAuthenticationService } from 'src/app/services/role-authentication.service';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
})
export class GenericListComponent implements OnChanges {
  constructor(
    private router: Router,
    public roleAuthService: RoleAuthenticationService
  ) {}

  @Input() routerUrlAdd: string;
  @Input() routerUrlEdit: string;
  @Input() items: any[] = [];
  @Input() tableHeading: string;
  @Output() delete = new EventEmitter<any>();

  public gridData: GridDataResult;
  public pageSize = 5;
  public skip = 0;

  ngAfterViewInit() {
    $('div[kendowatermarkoverlay]').css({
      opacity: 0,
    });
  }

  ngOnInit(): void {
    this.loadGridData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.loadGridData();
    }
  }

  public loadGridData(): void {
    this.gridData = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length,
    };
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridData();
  }

  public onFilter(inputValue: string): void {}

  getObjectKeys(item: any): string[] {
    return Object.keys(item);
  }

  deleteItem(item: any) {
    let id =
      item.id ??
      item.productId ??
      item.subCategoryId ??
      item.categoryId ??
      item.userId;
    this.delete.emit(id);
  }

  redirectToAdd() {
    this.router.navigateByUrl(this.routerUrlAdd);
  }

  redirectToEdit(dataItem: any) {
    let id =
      dataItem.id ??
      dataItem.productId ??
      dataItem.subCategoryId ??
      dataItem.categoryId;
    this.router.navigate([(this.routerUrlEdit += '/' + id)], {
      state: { data: dataItem },
    });
  }
}
