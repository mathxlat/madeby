class Save {
    constructor(id, itemId, category, createdby, name, image, description, price){
        this.id = id.toString();
        this.itemId = itemId.toString();
        this.category = category;
        this.createdby = createdby;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
    }
}

export default Save;