import React from "react";

function ArticleLoading(Component) {
    return function ArticleLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        
        return (
            <p style={{fontSize: '25px'}}>
                Waiting for articles to load!
            </p>
        );
    };
}

export default ArticleLoading;