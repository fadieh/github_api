$('#fetch_github_profile').on('click', function(){
	var profile_name = $('#profile_name').val();
	var source = $('#profileTemplate').html();
	var template = Handlebars.compile(source);
	$.get('https://api.github.com/users/' + profile_name, function(githubProfile) { $('#profiles').append(template(githubProfile)); 
	});
});