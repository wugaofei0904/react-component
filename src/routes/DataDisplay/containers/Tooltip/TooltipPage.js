/**
 * Created by Aus on 2017/11/13.
 */
import React from 'react'
import List from 'components/DataDisplay/List/'
import Switch from 'components/DataEntry/Switch/'
import ListTitle from 'components/DataDisplay/ListTitle/'
import Tooltip from 'components/DataDisplay/Tooltip/'
import Button from 'components/DataEntry/Button/'
import Tools from 'components/Tools/Tools'
const Item = List.Item;

const TooltipPage = () => {

    const switchTooltip = <Tooltip title="switch被禁用" trigger='click'>
            <Switch disabled />
        </Tooltip>

    return (
        <div className="page list">
            <h1 className="title">
                <span className="fa fa-home" onClick={()=>{Tools.linkTo('/')}} />
                Tooltip
            </h1>

            <ListTitle title="结合按钮使用" />
            <div className="button-box">
                <Tooltip title="按钮被禁用">
                    <Button disabled>禁用按钮提示</Button>
                </Tooltip>

                <Tooltip
                    title={<span><span className="fa fa-exclamation-circle"/>提示文字</span>}
                    trigger='click'
                >
                    <Button type="primary">点击提示</Button>
                </Tooltip>
                <Tooltip
                    title={<span><span className="fa fa-exclamation-circle"/>长按提示文字</span>}
                    trigger='long-press'
                >
                    <Button type="primary">长按提示</Button>
                </Tooltip>
            </div>

            <List renderHeader="结合文字使用">
                <Item extra={switchTooltip}>
                    自动计算位置
                </Item>
            </List>
        </div>
    )
};

export default TooltipPage