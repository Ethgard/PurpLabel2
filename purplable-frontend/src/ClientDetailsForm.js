import React from 'react';
import {Form, Input, Button, InputNumber} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';
import axios from 'axios'
import './ClientDetailsForm.css';

class ClientDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  };

  handleClick(values) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/purplable/db-add',
      data: values
    });
  }

  onFinish = values => {
    console.log('Success:', values);
    this.handleClick(values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <Form
        className="container"
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
          <Input className="add-client-name"/>
        </Form.Item>

        <Form.Item label="ID"
                   name="idNumber"
                   hasFeedback
                   rules={[
                     {
                       required: true,
                       message: 'Please input your ID number!',
                     },
                   ]}>
          <InputNumber min={0} maxLength={9} className="add-client-id"/>
        </Form.Item>

        <Form.Item className="add-client-button">
          <Button type="link" htmlType="submit">
            <PlusCircleTwoTone style={{fontSize: '32px'}}/>
          </Button>
        </Form.Item>
      </Form>
    );
  };
}

export default ClientDetailsForm;
