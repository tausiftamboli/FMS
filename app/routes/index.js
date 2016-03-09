import Ember from 'ember';

export default Ember.Route.extend({

Day: function() {
        return this.get('startsAt');
}
});
