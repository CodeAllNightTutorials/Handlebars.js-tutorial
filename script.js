(function(){
	var content = document.getElementById('content');
	var html = '';
	var data = {
		title: 'Really cool people',
		people: [
			{
				name: 'John',
				age: 34,
				email: 'john@gmail.com'
			},
			{
				name: 'Sally',
				age: 22,
				email: 'sally12@gmail.com'
			},
			{
				name: 'George',
				age: 45,
				email: 'george@hotmail.com'
			}
		]
	};

	Handlebars.registerHelper('bold', function(text){
		text = Handlebars.escapeExpression(text);
		return new Handlebars.SafeString(
			'<b>' + text + '</b>'
		);
	});

	Handlebars.registerHelper('list', function(items, options){
		var out = '<ul>';

		for(var i = 0, length = items.length; i < length; i++){
			out += '<li>' + options.fn(items[i]) + '</li>';
		}

		return out + '</ul>';
	});

	var template = Handlebars.compile(document.getElementById('people-template').innerHTML);

	content.innerHTML = template(data);

})();