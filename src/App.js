import React, { useEffect, useState } from 'react';
import axiosInstance from './axios';

import './App.css';
import Articles from './components/articles/articles';
import ArticlesLoadingComponent from './components/articles/articlesLoading';


function App() {
	const ArticlesLoading = ArticlesLoadingComponent(Articles);

	const [appState, setAppState] = useState({
		loading: true,
		articles: null,
	});

	useEffect(() => {
		axiosInstance.get('articles/').then((res) => {
			const articles = res.data;

			setAppState({ 
				loading: false, 
				articles: articles 
			});
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Articles</h1>
			<ArticlesLoading 
        		isLoading={appState.loading} 
        		articles={appState.articles} 
      		/>
		</div>
	);
}

export default App;