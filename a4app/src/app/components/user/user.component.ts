import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts;
  msg:string;

  constructor(private dataservice:DataService) { 

  }

  ngOnInit() {
    this.name = 'Billy Bob';
    this.age = 44;
    this.email = 'bbob@example.com';
    this.address = {
      street:'44 W 4th',
      city:'Bebop',
      state:'KY'
    };
    this.hobbies = ['whistling', 'drinking', 'sleeping'];


    this.dataservice.getPosts().subscribe((posts)=> {
      console.log(posts);
      this.posts = posts;
    })
  }

  onClick(){
    this.msg = 'Hello, ' + this.name + ', you clicked me';
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    return false; // prevent the new item from disappearing due to a refresh to the orig
  }

  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++){
      if (this.hobbies[i] == hobby) {
        // remove from array
        this.hobbies.splice(i, 1);
      }
    }
  }
}

// define the Address type
interface Address{
  street:string,
  city:string,
  state:string
}

interface Posts{
  id:number,
  title:string,
  body:string,
  userId:number
}