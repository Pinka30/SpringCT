import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // form = new FormGroup(
  //   {
  //     txtbox: new FormControl('',)
  //   }
  // )
  submitdata(form){
    sessionStorage.setItem("Textbox Value", form.textBox);
    sessionStorage.setItem("Dropdown List Value", form.dropdownList);
    sessionStorage.setItem("Checkbox Value", form.checkbox);
  }

}
