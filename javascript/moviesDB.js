var movies = [
	{
		title: "Yeh Jawani Hai Deewani",
		rating: 3,
		hasWatched: true
	},
	{
		title: "Andhadhun",
		rating: 4,
		hasWatched: false
	},
	{
		title: "Badhai Ho",
		rating: 3.5,
		hasWatched: true
	}
]

movies.forEach(function(movie){
	if(movie.hasWatched === true){
		console.log("You have watched"+" "+'"'+movie.title+'"'+" "+"-"+" "+movie.rating);
	}
	else {
		console.log("You have not seen"+" "+'"'+movie.title+'"'+" "+"-"+" "+movie.rating);
	}
});