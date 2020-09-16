import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CheckboxCustom from './component/CheckboxCustom';
import FilterForm from './component/FilterForm';
import TicketBody from './component/TicketBody';

import {
    Container,
    Row,
    Image,
    ToggleButtonGroup,
    ToggleButton,
    Form,
    // FormControl,
    Card,
} from 'react-bootstrap';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const App = () => {
    return (
        <div className="App">
            <Container component="header" className="header">
                <Row>
                    <Image alt="Logo" src={logo} className="logo" />
                </Row>
            </Container>
            <Container className="main">
                <aside className="aside">
                    <Card body className="aside-filter">
                        <fieldset>
                            <Form.Group>
                                <Form.Label as="legend">Количество пересадок</Form.Label>
                                <FilterForm>
                                    <CheckboxCustom label="Все" />
                                    <CheckboxCustom label="Без пересадок" />
                                    <CheckboxCustom label="1 пересадка" />
                                    <CheckboxCustom label="2 пересадки" />
                                    <CheckboxCustom label="3 пересадки" />
                                </FilterForm>
                            </Form.Group>
                        </fieldset>
                    </Card>
                </aside>
                <div component="main" className="section-main">
                    <ToggleButtonGroup
                        className="button-group"
                        type="radio"
                        name="options"
                        defaultValue={1}
                    >
                        <ToggleButton
                            value={1}
                            variant="outline-primary"
                            className="toggle-button"
                        >
                            Самый дешевый
                        </ToggleButton>
                        <ToggleButton
                            value={2}
                            variant="outline-primary"
                            className="toggle-button"
                        >
                            Самый быстрый
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <TicketBody />
                </div>
            </Container>
        </div>
    );
};

export default App;
