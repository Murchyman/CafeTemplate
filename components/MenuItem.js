import React from 'react';
import MenuItemModule from '../styles/MenuItem.module.js';
const MenuItem = (props) => {
  return (<div>
    <style jsx >{MenuItemModule}</style>
    <div keynum={"Wrapper" + props.keynum} className="wrapper">
      <div keynum={"Title" + props.keynum} className="menuItemTitle">

        <b keynum={"ItemName" + props.keynum}>{props.ItemName}</b>
        <b keynum={"ItemPrice" + props.keynum}>{props.ItemPrice}</b>
      </div>
      <div keynum={"DescriptionDiv" + props.keynum} className="menuItemDescription">
        <i keynum={"Description" + props.keynum}>{props.ItemDescription}</i>
      </div>
    </div>


  </div>)

};

export default MenuItem;
