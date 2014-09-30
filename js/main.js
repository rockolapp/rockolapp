Sfotipy = {}; //creo namespace

//definiendo clases
Sfotipy.Song = Backbone.Model.extend({}); //modelo
Sfotipy.SongView = Backbone.View.extend({ //vista
	tagName: 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#song-template").html()),

	render: function(){ //esta funcion se ejecutara cuando se visualice sta pantalla o vista.
		//var song  = this.model; //obtengo el modelo que me estan agregando para obener la cancion la cancion llaman la propiedad this.model del modelo Song
		//var name  = song.get('name'); //obtebgo el nombre d ela cancion
		//var author= song.get('author'); //obtengo el author
		var html = this.template(this.model.toJSON());
		//llamar un handler de jquery q tiene backbone
		this.$el.html(html);
		
	}
});

window.Sfotipy=Sfotipy;

