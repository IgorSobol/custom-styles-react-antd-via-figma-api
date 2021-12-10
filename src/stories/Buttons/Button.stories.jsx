import React from 'react';
import { Button } from 'antd';

import 'antd/dist/antd.css';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    size: {
      description: 'Set the size of button',
      default: 'middle',
      control: {
        type: 'select',
        options: ['large', 'middle', 'small'],
      },
    },
    type: {
      description: 'Can be set to primary ghost dashed link text default',
      type: 'string',
      default: 'default',
      control: {
        type: 'select',
        options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
      },
    },
    href: {
      description: 'Redirect url of link button',
      type: 'string',
      default: false,
    },
    shape: {
      description: 'Can be set button shape',
      type: 'string',
      
      control: {
        type: 'select',
        options: ['default', 'circle', 'round'],
      }
    },
    children: {
      type: Node,
      default: null
    }
  }
};

const Template = ({children, ...args}) => (<Button {...args}>{children}</Button>);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <span>I</span>
};
