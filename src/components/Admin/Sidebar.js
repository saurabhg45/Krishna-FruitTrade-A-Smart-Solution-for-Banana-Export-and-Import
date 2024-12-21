import React, { useState } from 'react';
import '../Admin/admin.css';  // Ensure you have appropriate CSS for sidebar styling

import { Link } from 'react-router-dom';

import {
  BsGrid1X2Fill, 
  BsBoxSeam, 
  BsCartCheckFill, 
  BsChatDotsFill, 
  BsBellFill, 
  BsGearFill, 
  BsPersonCircle, 
  BsPersonPlusFill, 
  BsPeopleFill,
  BsBarChartFill,
  BsFileTextFill,
  BsChevronRight,
  BsChevronDown
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [productDropdown, setProductDropdown] = useState(false);
  const [customerDropdown, setCustomerDropdown] = useState(false);
  const [invoiceDropdown, setInvoiceDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);

  const toggleProductDropdown = () => setProductDropdown(!productDropdown);
  const toggleCustomerDropdown = () => setCustomerDropdown(!customerDropdown);
  const toggleInvoiceDropdown = () => setInvoiceDropdown(!invoiceDropdown);
  const toggleOrderDropdown = () => setOrderDropdown(!orderDropdown);

  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsGrid1X2Fill className='icon_header' /> <span>Fresh Horizon</span>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item active'>
          <Link to="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBarChartFill className='icon' /> Analytics
          </a>
        </li>
        <li className={`sidebar-list-item ${productDropdown ? 'open' : ''}`} onClick={toggleProductDropdown}>
          <a href="#">
            <BsBoxSeam className='icon' /> Products {productDropdown ? <BsChevronDown className='dropdown-icon' /> : <BsChevronRight className='dropdown-icon' />}
          </a>
          {productDropdown && (
            <ul className='dropdown-list'>
              <li><Link to="P-list">Product List</Link></li>
              <li><a href="">Product View</a></li>
              <li><Link to="P-upload">Product Upload</Link></li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${orderDropdown ? 'open' : ''}`} onClick={toggleOrderDropdown}>
          <a href="#">
            <BsCartCheckFill className='icon' /> Orders {orderDropdown ? <BsChevronDown className='dropdown-icon' /> : <BsChevronRight className='dropdown-icon' />}
          </a>
          {orderDropdown && (
            <ul className='dropdown-list'>
              <li><a href="">Order Lists</a></li>
              <li><a href="">Create Order</a></li>
              <li><Link to="">Order Details</Link></li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${customerDropdown ? 'open' : ''}`} onClick={toggleCustomerDropdown}>
          <a href="#">
            <BsPeopleFill className='icon' /> Customers {customerDropdown ? <BsChevronDown className='dropdown-icon' /> : <BsChevronRight className='dropdown-icon' />}
          </a>
          {customerDropdown && (
            <ul className='dropdown-list'>
              <li><a href="">List Customer</a></li>
              <li><a href="">Create Customer</a></li>
              <li><a href="">Customer Details</a></li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${invoiceDropdown ? 'open' : ''}`} onClick={toggleInvoiceDropdown}>
          <a href="#">
            <BsFileTextFill className='icon' /> Invoices {invoiceDropdown ? <BsChevronDown className='dropdown-icon' /> : <BsChevronRight className='dropdown-icon' />}
          </a>
          {invoiceDropdown && (
            <ul className='dropdown-list'>
              <li><a href="">List Invoices</a></li>
              <li><a href="">Create Invoice</a></li>
              <li><a href="">Invoice Details</a></li>
            </ul>
          )}
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsChatDotsFill className='icon' /> Messages
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBellFill className='icon' /> Notifications
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;


