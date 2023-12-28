import React from "react";
import ChildComponent from './ChildComponent';

function ParentComponent(){
    const data = 'Hello 나는 ParentComponent야';

    return <ChildComponent message={data} />;
    
}

export default ParentComponent;