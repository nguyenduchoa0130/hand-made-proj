import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Tag, message } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import LtDynamicTable from '../../../core/components/lt-dynamic-table/';
import UserService from '../../../shared/services/users.service';
import { useDispatch } from 'react-redux';
import { actions } from '../../../stores';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const tableColumns = useMemo(() => {
    return [
      {
        title: 'ID',
        dataIndex: '_id',
        render: (value) => value.slice(-7),
        align: 'center',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Họ và tên',
        dataIndex: 'name',
        render: (value) => <span className='text-capitalize'>{value}</span>,
      },
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        align: 'center',
        render: (value) => <Avatar src={value} size={48} icon={<UserOutlined />} />,
      },
      {
        title: 'Điện thoại',
        dataIndex: 'phone',
        align: 'center',
      },
      {
        title: 'Loại tài khoản',
        dataIndex: 'isAdmin',
        render: (value) => (
          <Tag color={value ? '#108ee9' : '#87d068'}>{value ? 'Admin' : 'Khách hàng'}</Tag>
        ),
        align: 'center',
      },
      {
        title: '',
        dataIndex: null,
        render: () => (
          <Button type='primary' icon={<InfoCircleOutlined />}>
            Chi tiết
          </Button>
        ),
      },
    ];
  }, []);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        dispatch(actions.showLoading());
        const users = await UserService.getAllUsers();
        setUsers(users);
      } catch (error) {
        messageApi.error(error.message);
      } finally {
        dispatch(actions.hideLoading());
      }
    };

    getAllUsers();
  }, []);

  return (
    <>
      {contextHolder}
      <LtDynamicTable cols={tableColumns} dataSrc={users} rowKey='_id' />
    </>
  );
};

export default Users;
