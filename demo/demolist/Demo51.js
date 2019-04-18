/**
*
* @title 左侧固定列
* @parent 列操作-锁定 Fixed
* @description 固定列到表格的左侧
*
*/



import React, { Component } from 'react';
import Table from '../../src';



const columns5 = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age", fixed: "left" },
  { title: "address", dataIndex: "address", key: "address" }
];

const data5 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park"
  },
  {
    key: "3",
    name: "Jim Green",
    age: 40,
    address: "London Park"
  },
  {
    key: "4",
    name: "Jim Green",
    age: 40,
    address: "London Park"
  }
];

class Demo51 extends Component {
  render() {
    return <Table columns={columns5} data={data5} scroll={{ x: "110%", y: 240 }}  />;
  }
}

export default Demo51;