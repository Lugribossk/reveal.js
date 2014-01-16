var DocumentModel = Backbone.Model.extend({});
var document = new DocumentModel();

document.on("change:title", function (doc, newTitle) {
    console.log("Title changed to", newTitle);
});
document.set("title", "Hello World");

var DocumentView = Marionette.Layout.extend({
    template: Handlebars.compile(template),
    regions: {
        imageBrowser: "image-browser"
    },
    onRender: function () {
        this.imageBrowser.show(new ImageBrowserView({}));
    }
});

region.show(new DocumentView({
    model: document
}));


var DocumentView = Marionette.Layout.extend({
    bindings: {
        ".title": "title",
        ".content": "content",
        ".alert.short-title": {
            observe: "title",
            visible: function (title) {
                return title.length < 5;
            }
        }
    },
    // ...
});

var DocumentModel = Associations.AssociatedModel.extend({
    relations: [{
        type: Associations.One,
        key: "author",
        relatedModel: AuthorModel
    }, {
        type: Associations.Many,
        key: "comments",
        collectionType: CommentCollection
    }]
});


var TableView = Marionette.CollectionView.extend({
	itemView: DocumentThumbnailView
});

var view = new TableView({
	collection: documents
});