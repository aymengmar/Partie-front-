import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandeIthem } from 'src/model/commandeIthem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeIthemService {
  Url:string="http://localhost:3000/commandeItem"
  public orderList = new BehaviorSubject<any>([]);
  public orderItemList:any =[]
  constructor(private http:HttpClient) { }
  
  
  add(data:CommandeIthem):Observable<CommandeIthem>{
    return this.http.post<CommandeIthem>(this.Url+"/add",data);
  }
  
  getAll():Observable<CommandeIthem[]>{
    return this.http.get<CommandeIthem[]>(this.Url +"/fetch")
  }
  
  
  remove(id:number){
    return this.http.delete(this.Url+"/remove/"+id)  
  }
  
  edit(Id: number, data:CommandeIthem):Observable<CommandeIthem>{
    return this.http.put<CommandeIthem>(this.Url+"/update/"+Id, data);
  }

  getByid(id: number): Observable<CommandeIthem> {
    return this.http.get<CommandeIthem>(this.Url+"/detail/"+id);

  }

  getOrders(){
    return this.orderList.asObservable();
  }
  addToCart(item:any)
  {
    var total = item.price
    this.orderItemList.push({...item, total: total});
    this.orderList.next(this.orderItemList);
    
  }
  removeCartItem(item: any){
    this.orderItemList.map((a:any, index:any)=>{
      if(item.id=== a.id){
        this.orderItemList.splice(index,1);
      }
    })
    this.orderList.next(this.orderItemList);
  }
  removeAllCart(){
    this.orderItemList = []
    this.orderList.next(this.orderItemList);
  }

 
}
