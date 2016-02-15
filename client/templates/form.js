Template.form.events({
  'submit .new-todo': function(event) {
    event.preventDefault();
    var text = event.target.text.value;
    Meteor.call('addTodo', text);
    event.target.text.value = '';
  }
});
