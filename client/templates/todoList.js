Template.todoList.helpers({
  todos: function() {
    return Todos.find({}, {sort: {createdAt: -1}});
  }
});

Template.todoList.events({
  'click .toggle-checked': function() {
    Todos.update(this._id, {$set: {checked: !this.checked}});
  },
  'click .delete-todo': function() {
    if(confirm('Are you sure?')) {
      Todos.remove(this._id);
    }
  }
});
