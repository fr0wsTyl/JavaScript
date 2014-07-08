//NOTICE - Looping into every prototype is fast operation, it is equal to put out in other function :)
define(function() {
    var Store;
    Store = (function() {
        //formula for sorting items by name
        function sorByName(a, b) {
            if (a.itemName < b.itemName)
                return -1;
            if (a.itemName > b.itemName)
                return 1;
            return 0;
        }

        //formula for sorting items by price
        function sortByPrice(a, b) {
            if (a.itemPrice < b.itemPrice)
                return -1;
            if (a.itemPrice > b.itemPrice)
                return 1;
            return 0;
        }
        //Base Store obj
        function Store(title) {
            this.title = title;
            this._items = [];
            this._smartPhonesItems = [];
            this._mobiles = [];
            this._computers = [];
            this._filterByType = [];
            this._filterByPrice = [];
            this._associativeArray = {};
            this._filterItemsByName = [];
        }

        //method for addItem in store
        Store.prototype.addItem = function(item) {
            this._items.push(item);
            return this;
        }

        //method for return all of store items sorted by name
        Store.prototype.getAll = function() {
            this._items.sort(sorByName);
            return this._items;
        }

        //Return all items with 'smart-phone' in type
        Store.prototype.getSmartPhones = function() {
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == 'smart-phone') {
                    this._smartPhonesItems.push(this._items[i]);
                }
            };
            this._smartPhonesItems.sort(sorByName);
            return this._smartPhonesItems;
        }

        //Return all items with 'smart-phone' and 'tablet' in type
        Store.prototype.getMobiles = function() {
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == 'smart-phone') {
                    this._mobiles.push(this._items[i]);
                }
            };
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == 'tablet') {
                    this._mobiles.push(this._items[i]);
                }
            };
            this._mobiles.sort(sorByName);
            return this._mobiles;
        }

        //Return all items with 'pc' and 'notebook' in type
        Store.prototype.getComputers = function() {
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == 'pc') {
                    this._computers.push(this._items[i]);
                }
            };
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == 'notebook') {
                    this._computers.push(this._items[i]);
                }
            };
            this._computers.sort(sorByName);
            return this._computers;
        }

        //Return all items by given type
        Store.prototype.filterItemsByType = function(filterType) {
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemType == filterType) {
                    this._filterByType.push(this._items[i]);
                }
            };
            this._filterByType.sort(sorByName);
            return this._filterByType;
        }

        //Return all items with filter by price
        Store.prototype.filterItemsByPrice = function(options) {
            if (options == null) {
                for (var i = 0; i < this._items.length; i++) {
                    this._filterByPrice.push(this._items[i]);
                };
                this._filterByPrice.sort(sortByPrice);
                return this._filterByPrice;
            }

            //Return if max price is missing
            if (options.min && !(options.max)) {
                var minPriceArr = [];
                this.min = options.min;
                for (var i = 0; i < this._items.length; i++) {
                    if (this._items[i].itemPrice > this.min) {
                        minPriceArr.push(this._items[i]);
                    };
                };
                minPriceArr.sort(sortByPrice);
                return minPriceArr;
            };

            //Return if min price is missing 
            if (options.max && !(options.min)) {
                var maxPriceArr = [];
                this.max = options.max;
                for (var i = 0; i < this._items.length; i++) {
                    if (this._items[i].itemPrice < this.max) {
                        maxPriceArr.push(this._items[i]);
                    };
                };
                maxPriceArr.sort(sortByPrice);
                return maxPriceArr;
            };
            //Return if max price and min price is right
            if (options.min && options.max) {
                var minMax = [];
                this.min = options.min;
                this.max = options.max;
                for (var i = 0; i < this._items.length; i++) {
                    if (this._items[i].itemPrice > this.min && this._items[i].itemPrice < this.max) {
                        minMax.push(this._items[i]);
                    };
                };
                minMax.sort(sortByPrice);
                return minMax;
            };
        }
        //Return associative array with count of items type
        Store.prototype.countItemsByType = function() {
            for (var i = 0; i < this._items.length; i++) {
                this._associativeArray[this._items[i].itemType] = i;
            };
            return this._associativeArray;
        }

        //Return items with given filter name
        Store.prototype.filterItemsByName = function(partOfName) {
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].itemName.toLowerCase().search(partOfName) != -1) {
                    this._filterItemsByName.push(this._items[i]);
                };
            };
            this._filterItemsByName.sort(sorByName);
            return this._filterItemsByName;
        }
        return Store;
    }());
    return Store;
});