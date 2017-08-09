import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductlistService } from "../productlist.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','../../../node_modules/semantic-ui/dist/semantic.min.css','../css/ionicons-2.0.1/css/ionicons.min.css'],
  providers: [ProductlistService],
  animations: [
    trigger('hideAnim', [
      transition(':leave', [
        style({ opacity: '1' }),
        animate('250ms', style({ opacity: '0' }))
      ]),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('250ms', style({ opacity: '1' }))
      ])
    ])
  ]
})

export class ProductListComponent implements OnInit {

  public result: any[];
  constructor(public productList: ProductlistService, public _fb: FormBuilder) { }

  public addForm: boolean;
  public addClicked: boolean;
  public addUpdateForm: FormGroup;

  ngOnInit() {
    this.productList.getProductList().subscribe(result => { this.result = result });
    this.addUpdateForm = this._fb.group({
      name: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      quality: new FormControl('', Validators.required)
    });
  }

  public addFormPopup() {
    this.addForm = true;
    this.addClicked = false;
  }

  public hideAddForm() {
    this.addForm = false;
    this.addUpdateForm.reset();
  }

  public submitData() {
    if (this.addClicked == false) {
      this.result.push({
        name: this.addUpdateForm.controls['name'].value,
        rate: this.addUpdateForm.controls['rate'].value,
        quality: this.addUpdateForm.controls['quality'].value
      });
      this.addUpdateForm.reset();
    }
    else {
      this.result[this.updateIndex].name = this.addUpdateForm.controls['name'].value;
      this.result[this.updateIndex].rate = this.addUpdateForm.controls['rate'].value;
      this.result[this.updateIndex].quality = this.addUpdateForm.controls['quality'].value;
      this.updateIndex = 0;
    }
  }

  public deleteProduct(deleteIndex: any) {
    this.result.splice(this.result.indexOf(deleteIndex), 1);
  }

  public updateIndex: number = 0;
  public editProduct(i: any, editIndex: any) {
    this.addForm = true;
    this.addClicked = true;
    this.addUpdateForm = this._fb.group({
      name: new FormControl(editIndex.name, Validators.required),
      rate: new FormControl(editIndex.rate, Validators.required),
      quality: new FormControl(editIndex.quality, Validators.required)
    });
    this.updateIndex = i;
  }

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode != 13) {
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }
}

