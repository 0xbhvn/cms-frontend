import React from 'react';

function UsersLoading(Component) {
    return function UsersLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        
        return (
            <p style={{fontSize: '25px'}}>
                Waiting for users to load!
            </p>
        );
    };
}

export default UsersLoading;