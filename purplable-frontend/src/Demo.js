import React from 'react';
import {Form, Input, Button, InputNumber} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Demo extends React.Component {

  constructor() {
    super();
    this.state = {
      username: ''
    }
  };

  handleClick() {
    // axios.get('')
    //   .then(response => console.log(response))
  }

  onFinish = values => {
    console.log('Success:', values);
    this.handleClick();
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}>
        <Form.Item
          label="Full name"
          name="fullName"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your full name!',
            },
          ]}>
          <Input/>
        </Form.Item>

        <Form.Item label="ID"
                   name="idnumber"
                   hasFeedback
                   rules={[
                     {
                       required: true,
                       message: 'Please input your ID number!',
                     },
                   ]}>
          <InputNumber min={1} max={999999999}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="link" htmlType="submit">
            <PlusCircleTwoTone style={{fontSize: '32px'}}/>
          </Button>
        </Form.Item>
      </Form>
    );
  };
}

export default Demo;
