import React from 'react';
import PropTypes from 'prop-types';
import style from './notFoundPage.scss';

function NotFoundPage({ history }) {
    return (
        <div className={style.container}>
            <div className={style.head} />

            <div className={style.txtbg404}>

                <div className={style.txtbox}>

                    <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>

                    <p className={style.paddingbox}>请点击以下链接继续浏览网页</p>

                    <p>
                        》
                    <a style={{ cursor: 'pointer' }} onClick={() => history.goBack()}>返回上一页面</a>
                    </p>

                    <p>
                        》
                        <a onClick={() => history.push('/')}>
                            返回网站首页
                        </a>
                    </p>

                </div>

            </div>
        </div>
    );
}
NotFoundPage.propTypes = {
    history: PropTypes.object.isRequired
};
export default NotFoundPage;
