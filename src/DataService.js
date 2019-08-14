import axios from 'axios';

class DataService {

    getAllItems() {
        return axios.get('http://localhost:8080/items/getAll');
    }

    doAddItem() {
        let item = {};
        item.itemName = document.getElementById('itemName').value;
        item.itemBrand = document.getElementById('itemBrand').value;
        item.itemColour = document.getElementById('itemColour').value;
        item.itemType = document.getElementById('itemType').value;
        return axios.post('http://localhost:8080/item/add', item);
    }

    doDelItem(id) {
        return axios.delete('http://localhost:8080/item/del/' + id);
    }

    doUpdateItem() {
        let item = {};
        item.itemName = document.getElementById('updateItemName').value;
        item.itemBrand = document.getElementById('updateItemBrand').value;
        item.itemColour = document.getElementById('updateItemColour').value;
        item.itemType = document.getElementById('updateItemType').value;
        return axios.post('http://localhost:8080/item/update', item);
    }
}

export default new DataService();