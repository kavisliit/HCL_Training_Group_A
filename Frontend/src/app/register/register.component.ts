import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  repass!: string
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    let brand = document.getElementById("names")
    let inp = document.getElementById("name")
    if (!this.user.name) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Name"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }



    brand = document.getElementById("emails")
    inp = document.getElementById("email")
    if (!this.user.email) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Email"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("nics")
    inp = document.getElementById("nic")
    if (!this.user.nic) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the NIC"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }


    brand = document.getElementById("passs")
    inp = document.getElementById("pass")
    if (!this.user.password) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter a Password"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("rpasss")
    inp = document.getElementById("rpass")
    if (!this.repass) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter Password again"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

  }



}
