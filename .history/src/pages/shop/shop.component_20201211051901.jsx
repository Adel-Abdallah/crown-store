import React from 'react';
import SHOP_DATA from './shop.data.js'


class ShopPage extends ReactComponent {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA

        }
    }
    render() {
        return <div>SHOP PAGE</div>
    }
}

export default ShopPage;