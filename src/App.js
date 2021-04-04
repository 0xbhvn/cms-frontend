import React, { useEffect, useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Articles from './components/articles';
import ArticleLoadingComponent from './components/articleLoading';
import Container  from '@material-ui/core/Container';

function App() {
  const ArticleLoading = ArticleLoadingComponent(Articles);
  
  const [appState, setAppState] = useState({
    loading: false,
    articles: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:8000/api/articles/';

    fetch(apiUrl)
      .then((data) => data.json())
      .then((articles) => {
        setAppState({
          loading: false,
          articles: articles
        });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
            Latest Articles
        </Typography>
        <ArticleLoading isLoading={appState.loading} articles={appState.articles} />
      </Container>
    </div>
  );
}

export default App;