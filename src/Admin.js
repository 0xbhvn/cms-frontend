import React, { useEffect, useState } from 'react';
import './App.css';
import Articles from './components/admin/articles';
import ArticlesLoadingComponent from './components/articles/articlesLoading';
import axiosInstance from './axios';

function Admin() {
	const ArticlesLoading = ArticlesLoadingComponent(Articles);
	const [appState, setAppState] = useState({
		loading: true,
		articles: null,
	});

	useEffect(() => {
		axiosInstance.get('articles/ ').then((res) => {
			const allArticles = res.data;
			setAppState({ loading: false, articles: allArticles });
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>All Articles</h1>
			<ArticlesLoading isLoading={appState.loading} articles={appState.articles} />
		</div>
	);
}

export default Admin;