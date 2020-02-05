import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/users.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  public title = 'Teacher App';
  public user: User;
  public identity = null;
  public token = null;

  constructor(private userService: UserService){
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }
  
  ngOnInit(){
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    console.log(this.identity);
    console.log(this.identity);
  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    M.toast({html:'Log out succesfull, thanks for your visit'});
  }

  public onSubmitLogin(form: NgForm){

    const params ={
      email: form.value.email,
      password: form.value.password,
      gethash: true
    }
    if(form.value.gethash){
      console.log("Yes get hast");
    }else{
      console.log("No get hash");
      //Get datas user
      this.userService.singUp(form.value)
        .subscribe(
          response=>{
            console.log(response['user']);
            const identity = response['user'];
            this.identity = identity;

            if(this.token!=null){
              M.toast({html:'Ok Login'});
            }else{
              //Create element token
              localStorage.setItem('identity',JSON.stringify(identity));
              //Get Token
              this.userService.singUp(params)
                .subscribe(
                  res => {
                    const token = res['token'];
                    this.token = token;
                    console.log('token');
                    if(this.token.length <= 0){
                      M.toast({html:'Error Login'});
                    }else{
                      localStorage.setItem('token',token);
                      console.log(localStorage.getItem('token'));
                      console.log(localStorage.getItem('identity'));
                    }
                  }, error => {
                      M.toast({html:'Not Login'});
                  }
                )
              //Persist in LocalStorege
              
            }
            
            M.toast({html:'Login Succesfully'});
            
          },
          error =>{
            console.log(error);
            M.toast({html:'Not Login'});
          }
        )
    }
  }

}

