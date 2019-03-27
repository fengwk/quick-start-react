import React from 'react';

class Page1 extends React.Component {

  /**
   * 构造函数
   *
   * @param props 调用组件写入的属性通过props传递到组件中
   */
  constructor(props) {
    super(props);// 首先调用父类构造函数
    this.state = {// 指定当前组件状态
      name: this.props.name// 这个属性由组件的调用者传递进来
    };
  }

  /**
   * 渲染函数,每次状态更新都会调用这个函数刷新view
   */
  render() {
    // jsx语法,使得js和html可以混写,最后会在babel加载器中被编译为普通js语法
    return (
      <div>
        {this.state.name}
      </div>
    );
  }

}

export default Page1;// 导出组件
