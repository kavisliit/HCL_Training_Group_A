import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../User.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string
  password!: string
  emailvalid: boolean = false
  constructor(private userservice: UserService, private router: Router) { }

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
  goreg() {
    this.router.navigate(["register"])
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
    this.userservice.loginuser(fdata).subscribe(data => {
      var v: User = <User>data
      if (!v) {
        alert("Email or Password is Wrong!!!")
      } else {
        localStorage.setItem("uid", v.id.toString())
        // this.router.navigate(["home"])
        location.href = "home"
      }
    }, err => {
      console.log(err)
    })
  }

}
