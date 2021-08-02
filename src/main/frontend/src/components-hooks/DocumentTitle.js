import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocumentTitle() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <button type="button" onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

export default DocumentTitle;