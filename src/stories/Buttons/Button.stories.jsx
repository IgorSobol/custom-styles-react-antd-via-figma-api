import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    block: {
      description: 'Option to fit button width to its parent width',
      defaultValue: false,
      control: 'boolean'
    },
    danger: {
      description: 'Set the danger status of button',
      defaultValue: false,
      control: 'boolean'
    },
    disabled: {
      description: 'Disabled state of button',
      defaultValue: false,
      control: 'boolean'
    },
    ghost: {
      description: 'Make background transparent and invert text and border colors',
      defaultValue: false,
      control: 'boolean'
    },
    href: {
      description: 'Redirect url of link button',
      type: 'string',
      default: false,
    },
    htmlType: {
      description: 'Set the original html type of button',
      type: 'string',
      defaultValue: 'button',
    },
    icon: {
      description: 'Set the icon component of button',
      type: 'ReactNode',
    },
    loading: {
      description: 'Set the loading status of button',
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
    size: {
      description: 'Set the size of button',
      defaultValue: 'middle',
      control: {
        type: 'select',
        options: ['large', 'middle', 'small'],
      },
    },
    target: {
      description: 'Same as target attribute of a, works when href is specified',
      type: 'string',
      default: false
    },
    type: {
      description: 'Can be set to primary ghost dashed link text default',
      type: 'string',
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
      },
    },
    title: {
      description: 'This props is not in the library, it was created for example.',
      type: 'string',
    }
  }
};

const Template = ({title, ...args}) => (<Button {...args}>{title}</Button>);

export const Default = Template.bind({});
Default.args = {
  title: 'Default button'
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <DownloadOutlined />,
  title: 'Text'
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  title: 'Text',
  href: '/',
  type: 'link'
};
