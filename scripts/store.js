'use strict';

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = function(id) {
    return store.items.find(items =>items.id === id );
  };
  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch {
      console.log( 'Cannot add item: {error.message}');
    }
  }
  const findAndToggleChecked = function(id) {
      if (this.findById(id).checked === true) {
         this.findById(id).checked = false;
      }
      if (this.findById(id).checked === false) {
         this.findById(id).checked = true;
      }
  };
  const findAndUpdateName = function(id,newName) {
    try {
      Item.validateName(newName);
  }
    catch {
      console.log( 'Cannot add item: {error.message}');
  }
    findById(id).name = newName;
  };

 const findAndDelete = function(id) {
    // this.items.splice([this.items.findIndex(findById(id))], 1)
    const filtered = this.items.filter(item => item.id !== id);
    this.items = filtered;
 };
  return {
    items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete
  };
}());