$(document).ready( function(){
	/* Header Module */
	var Header = new Backbone.Marionette.Application();

	Header.addRegions({
		headerRegion: "#menu_header"
	});


	Item = Backbone.Model.extend({});

	Items = Backbone.Collection.extend({
		model: Item
	});

	HeaderItemView = Backbone.Marionette.ItemView.extend({
		template: Handlebars.compile($("#item-template").html()),
		tagName: 'li',
		className: 'pad-0'
	});
	
	HeaderView = Backbone.Marionette.CollectionView.extend({
		tagName: 'ul',
		className: 'nav navbar-nav',
		childView: HeaderItemView
	});

	Header.addInitializer( function(options){
		var itemsView = new HeaderView({
			collection: options.items
		});

		Header.headerRegion.show(itemsView);
	});

	var items = new Items([
		{
			icon: "icon_groups.png",
			item_name: "Groups"
		},
		{
			icon: "icon_events_on.png",
			item_name: "Calendar"
		},
		{
			icon: "icon_lamp_on.png",
			item_name: "Ideas	<img class='arrow' src='images/general/arrow.png'>"
		}
	]);

	Header.start({items: items});

	/* Groups Module */

	var Groups = new Backbone.Marionette.Application();

	Groups.addRegions({
		groupRegion: "#groups"
	});

	GroupItem = Backbone.Model.extend({});

	GroupItems = Backbone.Collection.extend({
		model: GroupItem
	});

	GroupItemView = Backbone.Marionette.ItemView.extend({
		template: Handlebars.compile($("#group-item-template").html()),
		className: 'col-md-4'
	});

	GroupsView = Backbone.Marionette.CompositeView.extend({
		template:  Handlebars.compile($("#groups-template").html()),
		childView: GroupItemView,

		attachHtml: function(collectionView, childView){
			collectionView.$('#groups_row').append( childView.el );
		}
	});

	Groups.addInitializer( function(options){
		var groupsView = new GroupsView({
			collection: options.groups
		});

		Groups.groupRegion.show(groupsView);
	});

	var groupsData = new GroupItems([
		{
			image: "images/groups/group_1.jpg",
			name: "Group 1",
			description: "This is the description to Group 1",
			date: "10/05",
			time: "10:30",
			time_type: "am",
			prize: "1800"
		},
		{
			image: "images/groups/group_1.jpg",
			name: "Group 2",
			description: "This is the description to Group 2",
			date: "11/06",
			time: "12:30",
			time_type: "am",
			prize: "5000"
		},
		{
			image: "images/groups/group_1.jpg",
			name: "Group 3",
			description: "This is the description to Group 3",
			date: "12/07",
			time: "10:50",
			time_type: "pm",
			prize: "2000"
		},
		{
			image: "images/groups/group_1.jpg",
			name: "Group 4",
			description: "This is the description to Group 4",
			date: "11/10",
			time: "08:30",
			time_type: "pm",
			prize: "12000"
		},
		{
			image: "images/groups/group_1.jpg",
			name: "Group 5",
			description: "This is the description to Group 5",
			date: "10/15",
			time: "02:30",
			time_type: "am",
			prize: "1000"
		},
		{
			image: "images/groups/group_1.jpg",
			name: "Group 6",
			description: "This is the description to Group 6",
			date: "12/15",
			time: "09:30",
			time_type: "pm",
			prize: "15000"
		}
	]);

	Groups.start({groups: groupsData});
});
