// angular 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// models
import { Filter } from 'src/app/entities/models/filter.model';

//serices
import { SuperheroApi } from 'src/app/services/superheroe.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-superhero-filter',
  templateUrl: './superhero-filter.component.html',
  styleUrls: ['./superhero-filter.component.scss']
})

export class SuperheroFilterComponent implements OnInit {

  //#region declare variables
  countries: {};
  fields: string[]= [];
  filters: Filter[]
  filterFormValues: {} = {}
  model;
  filterForm: FormGroup;
  //#endregion

  //#region constructor
  constructor(private superheroService: SuperheroApi,
     private sharedService: SharedService,
      private route: ActivatedRoute, 
      private router :Router) { }
  //#endregion 

  //#region ngonit
  ngOnInit(): void {
    this.getFilters();
    this.getFormControlFieldsName();
    this.buildForm()
    // TODO CHECK FOR Filter.TITLE IN GET FILTERS
    this.getCountries()
    
    this.route.queryParams.subscribe((params) => {
      // TODO: check each param against each key for a more accurate functionality 
      this.filterForm.patchValue(params);
    });

  }

  //#endregion

  //#region loadcontrols
  getCountries() {
    this.sharedService.getCountries().subscribe((countries) => {
      this.countries = countries.Response

    })
  }

  getFilters() {
    this.superheroService.getFilters().subscribe((filters) => {
      this.filters = filters
      console.log(this.filters, "filters")
    })
  }

  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      formGroupFields[field] = new FormControl("");
      this.fields.push(field);
    }
    return formGroupFields;
  }

  getFormControlFieldsName() {
    let arrayOfTitles = this.filters.map(f => f.title);
    this.filterFormValues = arrayOfTitles;
    const fieldsName = arrayOfTitles.reduce((acc, curr) => (acc[curr] = '', acc), {});
    this.model = fieldsName;
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.filterForm = new FormGroup(formGroupFields);
  }

  //#endregion

  //#region form actions
  submitForm() {
    console.log(this.filterForm.value)

    // call api-endpoint to save filter and 
    // get response with new datasource from backend 


    // set queryparams with filter on submit
    this.router.navigate(
      ['/all-superheroes'],
      { queryParams: this.filterForm.value }
    )

  }

  //#endregion
}
