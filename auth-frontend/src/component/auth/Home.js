import react from 'react';
import { Typography, Container, Grid, Link, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        // backgroundColor:"#2874f1",
        height: "50vh",
        width: "50vh",
        backgroundImage: "https://reactjsexample.com/content/images/2020/06/glitz.jpg"
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <Container component="main" fixid maxWidth="xs"  >
            <CssBaseline />
            <div className={classes.paper}>
                
                        <Typography>Login Yourself on this Website</Typography>
                <Grid container justify="center">
                    <Grid item>
                        <Link href="/LogIn" variant="body2">
                            SignIn
                        </Link>
                    </Grid>
                </Grid>

            </div>

        </Container>
    )
}