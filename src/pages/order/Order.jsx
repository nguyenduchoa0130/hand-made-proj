import React, { useState } from 'react'
import './style.scss'
import { Button, Space, Table, Tag } from 'antd';
import Thumbnail from '../../assets/img/card.png';


function Order() {
    const [data, setData] = useState([
        {
            key: '1',
            name: 'John Brown',
            priceOld: 6000000,
            priceNew: 500000,
            number: 1,
            total: 100000000,
            img: Thumbnail

        },
        {
            key: '2',
            name: 'Jim Green',
            priceOld: 6000000,
            priceNew: 500000,
            number: 1,
            total: 100000000,
            img: Thumbnail
        },
        {
            key: '3',
            name: 'Joe Black',
            priceOld: 6000000,
            priceNew: 500000,
            number: 1,
            total: 100000000,
            img: Thumbnail
        },

    ])
    const [selectedRowKeys, setSelectedRowKeys] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (text) => <div><img src={text} /></div>
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <div className='title'>{text}</div>
        },
        {
            title: 'Đơn giá',
            dataIndex: 'priceNew',
            key: 'priceNew',
            align: 'center',
            render: (text, item) => <div className='price'><span className='priceOld'>{item.priceOld.toLocaleString('en-US')}đ</span>{item.priceNew.toLocaleString('en-US')}đ</div>
        },
        {
            title: 'Số lượng',
            key: 'number',
            dataIndex: 'number',
            align: 'center',
            render: (text, item) => <div className='number'>
                <button>-</button>
                <span>{text}</span>
                <button>+</button>
            </div>
        },
        {
            title: 'Thành tiền',
            key: 'total',
            dataIndex: 'total',
            align: 'center',
            render: (text) => <div>{text.toLocaleString('en-US')}đ</div>

        },
        {
            title: '',
            key: 'action',
            align: 'right',
            render: (_, record) => (
                <button className='button-delete'>Xóa</button>
            ),
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
            <div className='order-title'>Giỏ hàng của bạn</div>
            <div className='order-table'>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
            </div>
            <div className='total'>
                <div>Tổng thanh toán 3 sản phẩm:</div>
                <div>20.000.000.000đ</div>
                <Button type='primary' size='large'>Mua hàng</Button>
            </div>
        </div>
    )
}
export default Order
