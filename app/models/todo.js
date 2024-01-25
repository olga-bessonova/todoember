import Model from '@ember-data/model';

export default class TodoModel extends Model {
  @attr('string') title;
  @attr('boolean') isCompleted;
}
