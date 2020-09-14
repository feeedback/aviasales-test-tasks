import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CheckboxCustom from './component/CheckboxCustom';

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
    const classes = {
        header: 'header',
        logo: 'logo',
        main: 'main',
        aside: 'aside',
        asideFilter: 'aside-filter',
        sectionMain: 'section-main',
        buttonGroup: 'button-group',
        toggleButton: 'toggle-button',
        card: '',
        cardHeader: 'card-header-my',
        cardTitle: 'card-title-my',
        companyLogo: 'company-logo',
        routes: 'routes',
        routesBox: 'routes-box',
        routesColumn: 'routes-column',
        routesColumnTitle: 'routes-column-title',
        routesColumnInfo: 'routes-column-info',
    };
    return (
        <div className="App">
            <Container component="header" className={classes.header}>
                <Row>
                    <Image alt="Logo" src={logo} className={classes.logo} />
                </Row>
            </Container>
            <Container className={classes.main}>
                <aside>
                    <Card body className={classes.asideFilter}>
                        <fieldset>
                            <Form.Group>
                                <Form.Label as="legend">Количество пересадок</Form.Label>
                                {/* <Form.Check type="checkbox" label="Все" />
                            <Form.Check type="checkbox" label="Без пересадок" />
                            <Form.Check type="checkbox" label="1 пересадка" />
                            <Form.Check type="checkbox" label="2 пересадки" />
                            <Form.Check type="checkbox" label="3 пересадки" /> */}
                                <CheckboxCustom label="Все" checked />
                                <CheckboxCustom label="Без пересадок" />
                                <CheckboxCustom label="1 пересадка" />
                                <CheckboxCustom label="2 пересадки" />
                                <CheckboxCustom label="3 пересадки" />
                            </Form.Group>
                        </fieldset>
                    </Card>
                </aside>
                <div component="main" className={classes.sectionMain}>
                    <ToggleButtonGroup
                        className={classes.buttonGroup}
                        type="radio"
                        name="options"
                        defaultValue={1}
                    >
                        <ToggleButton
                            value={1}
                            variant="outline-primary"
                            className={classes.toggleButton}
                        >
                            Самый дешевый
                        </ToggleButton>
                        <ToggleButton
                            value={2}
                            variant="outline-primary"
                            className={classes.toggleButton}
                        >
                            Самый быстрый
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <Card className={classes.card}>
                        <Card.Body>
                            <div className={classes.cardHeader}>
                                <p className={classes.cardTitle}>13 400 Р</p>
                                <Image
                                    alt="s7"
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
                                    className={classes.companyLogo}
                                />
                            </div>
                            <div className={classes.routesBox}>
                                <div className={classes.routes}>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            MOW – HKT
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            10:45 – 08:00
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            В пути
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            21ч 15м
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            2 пересадки
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            HKG, JNB
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.routes}>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            MOW – HKT
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            10:45 – 08:00
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            В пути
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            21ч 15м
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            2 пересадки
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            HKG, JNB
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className={classes.card}>
                        <Card.Body>
                            <div className={classes.cardHeader}>
                                <p className={classes.cardTitle}>13 400 Р</p>
                                <Image
                                    alt="s7"
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
                                    className={classes.companyLogo}
                                />
                            </div>
                            <div className={classes.routesBox}>
                                <div className={classes.routes}>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            MOW – HKT
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            10:45 – 08:00
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            В пути
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            21ч 15м
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            2 пересадки
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            HKG, JNB
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.routes}>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            MOW – HKT
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            10:45 – 08:00
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            В пути
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            21ч 15м
                                        </span>
                                    </p>
                                    <p className={classes.routesColumn}>
                                        <span className={classes.routesColumnTitle}>
                                            2 пересадки
                                        </span>
                                        <span className={classes.routesColumnInfo}>
                                            HKG, JNB
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default App;
