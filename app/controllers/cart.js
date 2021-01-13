import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';
export default class CartController extends Controller {

    @service shoppingCart;
    get subTotal(){
        return this.shoppingCart.itemList.reduce((acc,item)=>acc+(item.price*item.count),0)
    }
    get tax(){ return 0.09*this.subTotal}
    get total(){ return this.subTotal+this.tax}

    @action
    updateItemCount(item,event)
    {
        const count = event.target.value;
        if(count >0)
        item.count=parseInt(count);
        else
        item.count=0;
    }
}

