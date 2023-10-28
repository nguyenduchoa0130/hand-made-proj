import React from 'react';
import BannerImg from '../../assets/img/Banner-1.png'
import LineIcon from '../../assets/icon/lineIcon.svg'
import LineFullIcon from '../../assets/icon/lineFullIcon.svg'
import ImageSale from '../../assets/img/Banner-2.png'
import './style.scss'
import CardStore from '../../core/components/card-store/CardStore';
import { Pagination } from 'antd';
const Store = () => {
    return <div className='store'>
        <div className='banner'>
            <img src={BannerImg} alt="" />
        </div>
        <div className='line-category'>
            <img src={LineIcon} alt='line' />
            <div>Danh mục</div>
            <img src={LineIcon} alt='line' />
        </div>
        <div className='store-body'>
            <div className='category'>
                <div><button className='active'>Nguyên liệu thêu</button></div>
                <div><button>Nguyên liệu đan móc</button></div>
                <div><button>Nguyên liệu thêu nối</button></div>
                <div><button>Nguyên liệu len chọc</button></div>
                <div><button>Nguyên liệu khác</button></div>
            </div>
            <div>
                <div className='body'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                        return <CardStore />
                    })}
                </div>
                <div className='pagination'>
                    <Pagination defaultCurrent={1} pageSize={12} total={34} />
                </div>
            </div>
        </div>
        <img src={LineFullIcon} alt='line' width="100%" height="35px" />
        <div className='grid-sale'>
            {[1, 2, 3, 4, 5, 6].map(item => {
                return <img src={ImageSale} alt='img' />
            })}
        </div>
    </div>
};

export default Store;
