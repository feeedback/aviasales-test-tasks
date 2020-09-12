import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {
    Container,
    // Grid,
    Paper,
    Avatar,
    ButtonGroup,
    Button,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const App = () => {
    const classes = {
        header: 'header',
        logo: 'logo',
        main: 'main',
        aside: 'aside',
        sectionMain: 'section-main',
        buttonGroup: 'button-group',
    };
    return (
        <div className="App">
            <Container component="header" maxWidth="lg" className={classes.header}>
                <Avatar alt="Logo" src={logo} className={classes.logo} />
            </Container>
            <Container component="main" maxWidth="lg" className={classes.main}>
                <Paper component="aside" elevation={2} className={classes.aside} />
                <div component="div" className={classes.sectionMain}>
                    <ButtonGroup
                        // variant="contained"
                        // color="primary"
                        aria-label="outlined button group"
                        className={classes.buttonGroup}
                        fullWidth={true}
                    >
                        <Button variant="contained" color="primary">
                            Самый дешевый
                        </Button>
                        <Button>Самый быстрый</Button>
                    </ButtonGroup>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                sdfdfadfgdfagdafg
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default App;
