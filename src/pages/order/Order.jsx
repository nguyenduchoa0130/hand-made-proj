import React, { useState } from 'react'
import './style.scss'
import { Space, Table, Tag } from 'antd';
import Thumbnail from '../../assets/img/card.png';


function Order() {
    const [selectedRowKeys, setSelectedRowKeys] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (text) => <div><img src={text} /></div>,
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'priceNew',
            key: 'priceNew',
            render: (text, item) => <div><span>{item.priceOld}</span>{item.priceNew}</div>
        },
        {
            title: 'Số lương',
            key: 'tags',
            dataIndex: 'tags',
        },
        {
            title: 'Thành tiền',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            priceOld: 6000000,
            priceNew: 500000,
            tags: ['nice', 'developer'],
            img: Thumbnail
        },
        {
            key: '2',
            name: 'Jim Green',
            priceOld: 6000000,
            priceNew: 500000,
            tags: ['loser'],
            img: Thumbnail
        },
        {
            key: '3',
            name: 'Joe Black',
            priceOld: 6000000,
            priceNew: 500000,
            tags: ['cool', 'teacher'],
            img: Thumbnail
        },
    ];
    const onSelectChange = (newSelectedRowKeys, selectedRows) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys, selectedRows);
        setSelectedRowKeys(newSelectedRowKeys);
        setSelectedRow(selectedRows);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <div className='order'>
            <div>Giỏ hàng của bạn</div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
        </div>
    )
}
export default Order
