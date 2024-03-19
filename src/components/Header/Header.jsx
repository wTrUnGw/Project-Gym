import { Menu } from 'antd'
import React from 'react'
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    
        
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />}>Cart</Menu.Item>
          </Menu>
        
      );
  
}
