import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email!: string
  password!: string
  emailvalid: boolean = false
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  emialvalidate(ev: any) {
    var regx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    if (regx.test(ev.target.value)) {
      var res = document.getElementById("emails")
      var vnum = document.getElementById("email")
      if (res && vnum) {
        res.innerHTML = "Valid Email"
        res.classList.add("validc")
        vnum.classList.remove("invalid")
        vnum.classList.add("valid")
        this.emailvalid = false
      }
    }
    else {
      var res = document.getElementById("emails")
      var vnum = document.getElementById("email")
      if (res && vnum) {
        res.innerHTML = "Invalid Email"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.emailvalid = true
      }
    }
  }

  login() {
    let brand = document.getElementById("emails")
    let inp = document.getElementById("email")
    if (!this.email) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Email"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        if (!this.emailvalid) {
          brand.innerHTML = ""
          inp.classList.remove("invalid")
        } else {
          alert("Email is invalid")
          return
        }

      }

    }


    brand = document.getElementById("passs")
    inp = document.getElementById("pass")
    if (!this.password) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Password"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }
    let fdata: FormData = new FormData()
    fdata.append("email", this.email)
    fdata.append("pass", this.password)
    this.adminservice.loginAdmin(fdata).subscribe(data => {
      var v: Admin = <Admin>data
      if (!v) {
        alert("Email or Password is Wrong!!!")
      } else {
        localStorage.setItem("aid", v.id.toString())
        location.href = "adminhome"
      }
    }, err => {
      console.log(err)
    })
  }

}
