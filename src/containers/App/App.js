import React from 'react';
import { Button, Icon } from 'tinper-bee';
import style from './app.scss';

function App() {
    return (
        <div className={style.content}>
                <Button colors="primary">主按钮</Button>
                <Button colors="secondary">次按钮</Button>
                <Button colors="secondary"><Icon type="uf-del" />Delete</Button>
                111111111
        </div>
    );
}

export default App;
