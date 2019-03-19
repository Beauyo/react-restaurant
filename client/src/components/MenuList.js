import React from 'react';
import Menut from "./Menu";

const MenuList = ({ Menus, updateMenu, deleteMenu }) => (
    <div>
        { Menus.map( Menu =>
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