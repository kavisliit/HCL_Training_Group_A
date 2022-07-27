import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../User.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  passwordValidity: boolean = false
  emailvalid: boolean = false
  nicvalid: boolean = false
  repass!: string
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


  nicValidate(ev: any) {
    var regx = /^([0-9]{9}[v|V]|[0-9]{12})$/
    if (regx.test(ev.target.value)) {
      var res = document.getElementById("nics")
      var vnum = document.getElementById("nic")
      if (res && vnum) {
        res.innerHTML = "Valid NIC"
        res.classList.add("validc")
        vnum.classList.remove("invalid")
        vnum.classList.add("valid")
        this.nicvalid = false
      }
    }
    else {
      var res = document.getElementById("nics")
      var vnum = document.getElementById("nic")
      if (res && vnum) {
        res.innerHTML = "Invalid NIC"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.nicvalid = true
      }
    }
  }

  passwordvalidate(ev: any) {
    var p: string = ev.target.value;
    var res = document.getElementById("passs")
    var vnum = document.getElementById("pass")
    if (res && vnum) {
      if (p.search(/[a-z]/) < 0) {
        res.innerHTML = "Must contain lower case letter"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.passwordValidity = false
        return
      } else {
        res.innerHTML = ""
        res.classList.add("validc")
        vnum.classList.remove("invalid")

      }

      if (p.search(/[A-Z]/) < 0) {
        res.innerHTML = "Must contain upper case letter"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.passwordValidity = false
        return
      } else {
        res.innerHTML = ""
        res.classList.add("validc")
        vnum.classList.remove("invalid")
      }


      if (p.search(/[0-9]/) < 0) {
        res.innerHTML = "Must contain Number"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.passwordValidity = false
        return
      } else {
        res.innerHTML = ""
        res.classList.add("validc")
        vnum.classList.remove("invalid")
      }


      if (p.search(/[!@#\$%\^&\*_]/) < 0) {
        res.innerHTML = "Must contain Special character"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.passwordValidity = false
        return
      } else {
        res.innerHTML = ""
        res.classList.add("validc")
        vnum.classList.remove("invalid")
      }

      if (p.length < 8) {
        res.innerHTML = "Must contain at least 8 character"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
        this.passwordValidity = false
        return
      } else {
        res.innerHTML = "Valid Password"
        res.classList.add("validc")
        vnum.classList.remove("invalid")
        vnum.classList.add("valid")
        this.passwordValidity = true
      }
    }
  }

  repassvalidate(ev: any) {
    var res = document.getElementById("rpasss")
    var vnum = document.getElementById("rpass")
    if (res && vnum) {
      if (this.user.password !== ev.target.value) {
        res.innerHTML = "Password does not match"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")

        return
      } else {
        res.innerHTML = "Passwords Matched"
        res.classList.add("validc")
        vnum.classList.remove("invalid")
        vnum.classList.add("valid")

      }
    }
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
        if (this.emailvalid) {
          alert("Email is invalid")
          return
        }

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
        if (this.nicvalid) {
          alert("NIC is invalid")
          return
        }
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
        if (this.passwordValidity) {
          if (this.repass === this.user.password) {
            brand.innerHTML = ""
            inp.classList.remove("invalid")
          }
          else {
            brand.innerHTML = "Password is mismatch"
            inp.classList.remove("valid")
            inp.classList.add("invalid")
            brand.classList.remove("validc")
            brand.classList.add("invalidc")
            return
          }

        } else {
          brand.innerHTML = "Password is invalid"
          inp.classList.add("invalid")
          return
        }

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

    this.userservice.createUser(this.user).subscribe(data => {
      let v: User = <User>data
      console.log(v)
    }, err => {
      console.log(err)
    })



  }



}
