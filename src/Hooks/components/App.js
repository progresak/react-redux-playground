import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from "./UserList";

const App = () => {

    const [myState, setState] = useState('posts');

    return (
        <div className={'ui container'}>
           <div>
               <button onClick={() => setState('posts')}>Posts</button>
               <button onClick={() => setState('todos')}>Todos</button>
           </div>
            <ResourceList className={'ui pull left'} resource={myState}/>
            <UserList className={'ui pull right'} resource={myState}/>
        </div>
    )

};

export default App;