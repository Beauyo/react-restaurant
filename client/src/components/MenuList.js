import React from 'react';
import Menut from "./Menut";

const MenuList = ({ menus, updateMenu, deleteMenu }) => (
    <div>
        { menus.map( Menu =>
            <Menut
            key={Menu.id}
            {...Menu}
            updateMenu={updateMenu}
            deleteMenu={deleteMenu}
            />
            )
        }
    </div>
)

export default MenuList;