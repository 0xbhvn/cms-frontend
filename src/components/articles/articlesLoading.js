import React from 'react';

function ArticlesLoading(Component) {
    return function ArticlesLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        
        return (
            <p style={{fontSize: '25px'}}>
                Waiting for articles to load!
            </p>
        );
    };
}

export default ArticlesLoading;