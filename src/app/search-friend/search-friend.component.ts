import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css']
})
export class SearchFriendComponent {
sname=""

search=()=>
{
  let sear:any={"sname":this.sname}
  console.log(sear)
}
}
