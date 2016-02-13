Template.form.events({
  'submit .new-todo': function(event) {
    event.preventDefault();
    var text = event.target.text.value;
    Todos.insert({
      text: text,
      createdAt: new Date()
    });
    event.target.text.value = '';
  }
});
