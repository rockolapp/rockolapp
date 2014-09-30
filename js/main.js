Sfotipy = {}; //creo namespace

//definiendo clases
Sfotipy.Song  	 = Backbone.Model.extend({}); //modelo
Sfotipy.Songs 	 = Backbone.Collection.extend({
	model: Sfotipy.Song //la clase del modelo 
	//la coleccion songs es una lista de modelo u objetos tipo song
});	 

Sfotipy.SongView = Backbone.View.extend({ //vista
	events : {
		//'EVENTO SELECTOR':'FUNCION'
			'click .action.icon-add': 'add'
	},

	tagName: 'li',

	className: 'item border-bottom',

	template: Handlebars.compile($("#song-template").html()),

	initialize: function () { //metodo que se ejecuta cuando se instanacia una vista o modelo, 
		this.listenTo(this.model, "change", this.render,this); //escuchalos cambios del medelo y sea vean en la aplicacion en tiempo real
	},

	render: function(){ //esta funcion se ejecutara cuando se visualice sta pantalla o vista.
		//var song  = this.model; //obtengo el modelo que me estan agregando para obener la cancion la cancion llaman la propiedad this.model del modelo Song
		//var name  = song.get('name'); //obtebgo el nombre d ela cancion
		//var author= song.get('author'); //obtengo el author
		var html = this.template(this.model.toJSON());//llamar un handler de jquery q tiene backbone
		this.$el.html(html);	
	},
	add: function (e){ //funcion del evento add linea 13
		alert(this.model.get("name"));
	}
});

window.Sfotipy=Sfotipy;

