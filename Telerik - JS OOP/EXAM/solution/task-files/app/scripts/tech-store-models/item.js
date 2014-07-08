define(function() {
    var Item;
    Item = (function() {
        function Item(itemType, itemName, itemPrice) {
            this.itemType = itemType;
            this.itemName = itemName;
            this.itemPrice = itemPrice;
        }
        return Item;
    }());
    return Item;
});