import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
    async model()
    {
        const data =await this.store.findAll('product');
        console.log('data in index ',data);
        return data;
    }
}
