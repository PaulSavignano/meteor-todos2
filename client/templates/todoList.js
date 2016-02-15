Meteor.subscribe("todos");

Template.todoList.helpers({
  todos: function() {
    return Todos.find({}, {sort: {createdAt: -1}});
  }
});

Template.todoList.events({
  'click .toggle-checked': function() {
    Meteor.call('setChecked', this._id, !this.checked);
  },
  'click .delete-todo': function() {
    Meteor.call('deleteTodo', this._id);
  }
});
