import { Button, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageCard from '../../assets/img/cardlarge.png';
import CardItem from '../../core/components/product-card/ProductCard';
import { addProduct } from '../../stores/global/global.actions';
import './style.scss';

function Detail() {
  const [count, setCount] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const itemMock = {
    id: '2',
    img: ImageCard,
    title: 'Bộ nguyên liệu làm thỏ bông (bao gồm kim, khung)',
    oldPrice: 6000000,
    newPrice: 50000,
  };
  const add = () => {
    dispatch(addProduct({ ...itemMock, number: count }));
    messageApi.open({
      type: 'success',
      content: 'Thêm thành công',
    });
  };

  return (
    <div className='detail'>
      {contextHolder}
      <div className='detail-content'>
        <div className='left'>
          <div className='thumbnail'>
            <img src={ImageCard} alt='card' />
          </div>
          <div className='item'>
            <img src={ImageCard} alt='card' />
            <img src={ImageCard} alt='card' className='active' />
            <img src={ImageCard} alt='card' />
            <img src={ImageCard} alt='card' />
            <img src={ImageCard} alt='card' />
          </div>
        </div>
        <div className='right'>
          <div className='info'>
            <div className='title'>[Set thêu tiết kiệm] Dụng cụ cơ bản chỉ Airo + phụ kiện</div>
            <div className='price'>111.000đ</div>
            <div className='number'>
              <div className='text-number'>Số lượng:</div>
              <div className='count'>
                <div
                  onClick={() => {
                    if (count !== 1) {
                      setCount(count - 1);
                    }
                  }}>
                  -
                </div>
                <div>{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
              </div>
            </div>
            <div className='add'>
              <Button onClick={add}>Thêm vào giỏ hàng</Button>
            </div>
          </div>

          <div className='description'>
            <div className='title'>Mô tả</div>
            <div>
              Set 50 màu chỉ bao gồm:
              <br />
              1. Set chỉ thêu hãng Airo ngẫu nhiên, gồm 50 màu chỉ cơ bản. Sợi chỉ mềm, trơn, dai và
              bền chắc, không phai màu. Mỗi sợi chỉ dài 8m gồm 6 sợi chỉ nhỏ, có thể tách sợi để
              thêu.
              <br />
              Gọn gàng và bảo quản chỉ lâu hơn khi cất trong hộp nhựa. Ngoài ra các bạn có thể mua
              miếng cuốn rời tại đây.
              <br />
              2. Kéo bấm cắt chỉ nhỏ gọn, lưỡi kéo sắc bén, ứng dụng trong cắt chỉ khi may vá, thêu
              thùa
              <br />
              3. Bộ kim 26 chiếc hoặc hộp kim 30 chiếc đủ các cỡ kim phục vụ nhu cầu may vá thêu
              thùa cơ bản trong gia đình. Chất liệu thép không gỉ giúp thêu trơn tru và bền đẹp. Phù
              hợp để dùng với chỉ thêu, chỉ may, len ruybang...
              <br />
              4. Giấy can lụa dùng để can lại hình thêu cho người không biết vẽ
              <br />
              5. Vải thô mộc tập thêu khổ 100x40cm, vải chưa qua nhuộm, giữ nguyên màu thuần của sợi
              dệt tạo nên sự mộc mạc độc đáo. Vải có màu kem tự nhiên và độ dày vừa phải, phù hợp
              làm túi, ví nhỏ, tranh... Tham khảo các loại vải tập thêu khác.
              <br />
              Lưu ý: Vải thô mộc dễ nhăn, khó ủi và có thể bị mốc nếu để ẩm quá lâu, vì vậy khi giặt
              bạn nên giũ nước (KHÔNG VẮT), phơi trực tiếp dưới nắng cho khô hoặc sấy thật khô để
              tránh mốc. Không nên vắt để tránh vải bị nhăn.
              <br />
              Nếu vải bị nhăn, nên ủi với nhiệt độ cao và ủi lâu hơn các loại vải khác. Tốt nhất nên
              dùng vải may những vật dụng không cần giặt quá nhiều lần để tránh giảm chất lượng vải.
              <br />
              6. Bút vẽ vải bay màu bằng nhiệt độ, sau khi thêu xong chỉ cần dùng bàn là hoặc máy
              sấy để làm bay màu mực
              <br />
              7. Khung thêu bằng nhựa cỡ 20cm, màu be, khung cứng cáp, có chốt mạ bạc chắc chắn. 2
              khung trong và ngoài có rãnh khớp với nhau giúp căng vải chắc chắn, không bị trơn.
              <br />
              8. Set 50 màu chỉ đi kèm hộp kim ghim vải 100 chiếc ghim vải màu trắng dùng để ghim
              vải hoặc phục vụ 1 số mũi thêu cần thiết
            </div>
          </div>
        </div>
      </div>
      <div className='reference'>
        <div className='title-refer'>Sản phẩm cùng loại</div>
        <div className='content-refer'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
}

export default Detail;
