import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  readValues =()=>
  {
   let friend:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
   console.log(friend)
   this.api.addFriend(friend).subscribe(
    (response)=>
    {
      console.log(response)
      
    }
   )
  }

  constructor(private api:ApiService){

  }
}
