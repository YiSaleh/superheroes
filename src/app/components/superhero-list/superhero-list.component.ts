// angular 
import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

// services
import { SuperheroApi } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.scss']
})
export class SuperheroListComponent implements AfterViewInit {

  //#region declare variables
  displayedColumns: string[] = ['name', 'phone', 'email', 'date', 'country', 'company'];
  dataSource;
  showFilter:boolean
  //#endregion


  //#region constructor
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private superheroService: SuperheroApi) {

  }
  //#endregion

  @ViewChild(MatSort) sort: MatSort;

  //#region ngonit 
  ngOnInit(): void {
    this.getSuperheroes()
    this.showFilter= false

  }
  //#endregion

  //#region ngAfterViewInit
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  //#endregion


  //#region load controls
  getSuperheroes() {
    this.superheroService.getSuperheroes().subscribe((superHeroes) => {
      this.dataSource = new MatTableDataSource(superHeroes)
      // console.log(JSON.stringify(this.dataSource))
    })
  }
  //#endregion
  

  //#region actions
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  //#endregion
}







