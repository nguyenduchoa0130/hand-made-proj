import React, { useState } from 'react'
import './style.scss'
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectListProduct } from '../../stores/global/global.selectors';
import { decreaseNumber, increaseNumber } from '../../stores/global/global.actions';


function Order() {
    const dispatch = useDispatch()
    const data = useSelector(selectListProduct)
    const [selectedRowKeys, setSelectedRowKeys] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const [number, setNumber] = useState(0);
    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (text) => <div><img src={text} /></div>
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <div className='title'>{text}</div>
        },
        {
            title: 'Đơn giá',
            dataIndex: 'newPrice',
            key: 'newPrice',
            align: 'center',
            render: (text, item) => <div className='price'><span className='priceOld'>{item.oldPrice.toLocaleString('en-US')}đ</span>{item.newPrice.toLocaleString('en-US')}đ</div>
        },
        {
            title: 'Số lượng',
            key: 'number',
            dataIndex: 'number',
            align: 'center',
            render: (text, item) => <div className='number'>
                <button onClick={() => {
                    setNumber(number - 1);
                    dispatch(decreaseNumber(item))
                }}>-</button>
                <span>{text}</span>
                <button onClick={() => {
                    setNumber(number + 1);
                    dispatch(increaseNumber(item))
                }}>+</button>
            </div>
        },
        {
            title: 'Thành tiền',
            key: 'total',
            dataIndex: 'total',
            align: 'center',
            render: (text, item) => {
                let total = item.number * item.newPrice
                return <div>{total.toLocaleString('en-US')}đ</div>
            }
        },
        {
            title: '',
            key: 'action',
            align: 'right',
            render: (_, record) => (
                <button className='button-delete' >Xóa</button>
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
    const calculateItemTotal = (item) => item.newPrice * item.number;

    const calculateOverallTotal = () => {
        return data.reduce((total, item) => total + calculateItemTotal(item), 0);
    };
    return (
        <div className='order'>
            <div className='order-title'>Giỏ hàng của bạn</div>
            <div className='order-table'>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
            </div>
            <div className='total'>
                <div>Tổng thanh toán 3 sản phẩm:</div>
                <div>{calculateOverallTotal()}đ</div>
                <Button type='primary' size='large'>Mua hàng</Button>
            </div>
        </div>
    )
}
export default Order
