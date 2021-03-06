import React from 'react';

// MaterialUI
import { Card, CardContent, CardMedia, Grid, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' 
                ? theme.palette.grey[200] 
                : theme.palette.grey[700],
    },
    articleTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    articleText: {
        dispay: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}));

const Articles = (props) => {
    const { articles } = props;
    const classes = useStyles();

    if(!articles || articles.length === 0) return <p>Could not find any articles.</p>;

    return (
        <React.Fragment>
            <Container maxWidth='md' component='main'>
                <Grid container spacing={5} alignItems='flex-end'>
                    { articles.map((article) =>  {
                        return (
                            <Grid item key={article.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={article.image}
                                        title={article.title}
                                    />
                                    <CardContent>
                                        <Typography 
                                            gutterBottom
											variant="h6"
											component="h2"
											className={classes.articleTitle}
                                        >
                                            <Link 
                                                color='textPrimary'
                                                href={'article/' + article.slug}
                                            >
                                                {article.title}
                                            </Link>
                                        </Typography>
                                        <div className={classes.articleText}>
                                            <Typography variant="p" color="textSecondary">
                                                Posted by {article.author}
                                            </Typography>
										</div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Articles;