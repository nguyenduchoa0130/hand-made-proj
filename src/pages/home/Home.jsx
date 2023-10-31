import React from 'react';
import banner1 from '../../assets/img/Banner-1.png'
import banner2 from '../../assets/img/Banner-2.png'
import './style.scss'
import TemplateList from './components/template-list/TemplateList';
import Image1 from '../../assets/img/img-1.png'
import Image2 from '../../assets/img/img-2.png'

const Home = () => {
  return <div className='home'>
    <div className='banner'>
      <div>
        <img src={banner1} alt='banner' />
      </div>
      <div>
        <img src={banner2} alt='banner' />
        <img src={banner2} alt='banner' />
      </div>
    </div>
    <div className='category'>
      <div>Nguyên liệu thêu</div>
      <div>Nguyên liệu đan móc</div>
      <div>Nguyên liệu thêu nối</div>
      <div>Nguyên liệu len chọc</div>
      <div>Nguyên liệu khác</div>
    </div>
    <TemplateList item={{title:'Thêu',image:Image1, bgColor:'#ED969A'}} />
    <TemplateList item={{title:'Đan móc',image:Image2, bgColor:'#D2AA06'}}/>
    
  </div>;
};

export default Home;
