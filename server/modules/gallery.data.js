
class galeryItem {
    constructor(id,path,description,likes){
        this.id = id;
        this.path = path;
        this.description = description;
        this.likes = likes;
    }

    addLike(){
        this.likes++;
    }
}
const galleryItems = [
    { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
    { id: 2, path: 'images/1741JjjW-ZPgO9pSSk8GbaQ.jpg', description:'A',likes:99},
    { id: 3, path: 'images/funny-wikihow-Anime-Addiction.jpg', description:'B',likes:123213},
    { id: 4, path: 'images/images.jpg', description:'C', likes: 91232},
];

module.exports = galleryItems;