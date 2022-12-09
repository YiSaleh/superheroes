// angular 
import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

// services
import { ApiService } from '../services/api.service';

// Model
import { Superhero } from '../entities/models/superhero.model';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.scss']
})
export class SuperheroListComponent implements AfterViewInit {

  //#region declare variables

  displayedColumns: string[] = ['name', 'phone', 'email', 'date', 'country', 'company'];
  dataSource;

  //#endregion


  //#region constructor
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private apiService: ApiService) {

  }
  //#endregion

  @ViewChild(MatSort) sort: MatSort;

  //#region ngonit 

  ngOnInit(): void {
    this.getSuperheroes()
  }
 
  //#endregion

  //#region ngAfterViewInit
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  //#endregion


  /**
   * @title Table with sorting
  */

  //#region load controls
  getSuperheroes() {
    this.apiService.getSuperheroes().subscribe((superHeroes) => {
      this.dataSource = new MatTableDataSource(superHeroes)
      // console.log(JSON.stringify(this.dataSource))
    })
  }
  //#endregion
  
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}







