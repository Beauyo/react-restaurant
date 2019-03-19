import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';


const Menu = ({ id, name, deleteMenu }) => (
        <div>
                <Header as="h2">{name}</Header>

                <div>

                        <Button
                                icon
                                color="red"
                                size="tiny"
                                onClick={() => deleteMenu(id)}
                                style={{ marginLeft: "15px", }}
                        >
                                <Icon name="trash" />
                        </Button>
                </div>
        </div>

)

export default Menu; 