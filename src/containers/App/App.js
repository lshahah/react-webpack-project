import React from 'react';
import { Button, Icon } from 'tinper-bee';


function App() {
    return (
        <div>
                <Button colors="primary">主按钮</Button>
                <Button colors="secondary">次按钮</Button>
                <Button colors="secondary"><Icon type="uf-del" />Delete</Button>
        </div>
    );
}

export default App;
