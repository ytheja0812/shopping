import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ItemsRoute extends Route {
    async model(params)
    {
        const {item_id}=params;
        const data =await this.store.findAll('product');
        console.log('data is ',data)
        const product = data.find(({id})=>id==item_id);
        return product;
    }
    setupController(controller, model) {
        super.setupController(controller,model);
        controller.color=model.colors[0].color;
    }
}
