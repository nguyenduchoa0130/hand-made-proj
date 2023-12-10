import React, { useMemo, useState } from 'react';
import LtDynamicTable from '../../../../core/components/lt-dynamic-table';

const UserOrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const tableColumns = useMemo(() => {}, []);

  return (
    <>
      <LtDynamicTable cols={tableColumns} dataSrc={orders} />
    </>
  );
};

export default UserOrderHistory;
