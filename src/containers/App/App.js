/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Button, Icon, Tile, Modal, Popconfirm } from 'tinper-bee';
import style from './app.scss';


function App(props) {
    console.log(props.location);
    const [showModal, modelSwitch] = useState(false);
    const content = '您喜欢使用tinper-bee组件库吗？';
    return (
        <div className={style.content}>
            <Button colors="primary" onClick={() => { modelSwitch(true); }}>主按钮</Button>
            <Button colors="secondary">次按钮</Button>
            <Button colors="secondary" onClick={() => { props.history.push('/hook'); }}><Icon type="uf-del" />Delete</Button>
            111111111
            <Popconfirm trigger="click" placement="right" content={content}>
                        <Button colors="primary">向右!</Button>
            </Popconfirm>
            <Tile style={{ width: 200 }}>
                <h4>占有率</h4>
                <span>进度</span>
                <h1>95%</h1>
            </Tile>
            <Modal
                show={showModal}
                onHide={() => { modelSwitch(false); }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>标题</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => { modelSwitch(false); }} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
                    <Button onClick={() => { modelSwitch(false); }} bordered>确认</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
