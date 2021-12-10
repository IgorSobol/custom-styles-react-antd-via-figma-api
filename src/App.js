import React, { useState } from 'react';
import {
  Col,
  Space,
  Button,
  Divider,
  Tooltip,
} from 'antd';
import {
  SearchOutlined,
  DownloadOutlined
} from '@ant-design/icons';

import './App.less';

function App() {
  const SplitSpace = props => <Space split={<Divider type="vertical" />} size={4} {...props} />;
  const [ size, changeSize ] = useState('large');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom styles react antd via figma api</h1>
        <div className="App">
      <Col flex="auto">
        <Space direction="vertical" split={<Divider />} style={{ width: '100%' }} size={0}>

          {/* Colors */}
          <SplitSpace>
            <ul>
              <li
                key="base"
                className={`color-base`}
              >
                <span>blue-base</span>
              </li>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
                  return (
                    <li
                      key={key}
                      className={`color-${key}`}
                    >
                      <span>blue-{key}</span>
                    </li>
                  )
                })
              }
            </ul>
            {/* <ul>
              <li
                key="base"
                className={`color-base`}
              >
                <span>blue-base</span>
              </li>
              {
                primaryColors.map(e => {
                  return (
                    <li
                      key={e.value}
                      className={`color-${e.value}`}
                      style={{backgroundColor: e.value}}
                    >
                      <span>{e.value}</span>
                    </li>
                  )
                })
              }
            </ul> */}
          </SplitSpace>
          {/* 1 */}
          <SplitSpace>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </SplitSpace>

          {/* 2 */}
          <SplitSpace>
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
            <br />
            <br />
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="primary" shape="circle" size="large">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <br />
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
          </SplitSpace>

          {/* 3 */}
          <SplitSpace style={{ padding: '10px', background: 'rgb(190, 200, 200)' }}>
            <Button size={size} onClick={() => changeSize('large')}>Large</Button>
            <Button size={size} onClick={() => changeSize('default')}>Default</Button>
            <Button size={size} onClick={() => changeSize('small')}>Small</Button>
            <br />
            <br />
            <Button type="primary" size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
              Dashed
            </Button>
            <br />
            <Button type="link" size={size}>
              Link
            </Button>
            <br />
            <Button type="primary" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
          </SplitSpace>

          {/* 4 */}
          <SplitSpace>
            <Button type="primary">Primary</Button>
              <Button type="primary" disabled>
                Primary(disabled)
              </Button>
              <br />
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
              <br />
              <Button type="dashed">Dashed</Button>
              <Button type="dashed" disabled>
                Dashed(disabled)
              </Button>
              <br />
              <Button type="text">Text</Button>
              <Button type="text" disabled>
                Text(disabled)
              </Button>
              <br />
              <Button type="link">Link</Button>
              <Button type="link" disabled>
                Link(disabled)
              </Button>
              <br />
              <Button danger>Danger Default</Button>
              <Button danger disabled>
                Danger Default(disabled)
              </Button>
              <br />
              <Button danger type="text">
                Danger Text
              </Button>
              <Button danger type="text" disabled>
                Danger Text(disabled)
              </Button>
              <br />
              <Button type="link" danger>
                Danger Link
              </Button>
              <Button type="link" danger disabled>
                Danger Link(disabled)
              </Button>
          </SplitSpace>

          {/* 5 */}
          <SplitSpace>
            <Button type="primary" danger>
              Primary
            </Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>
              Dashed
            </Button>
            <Button type="text" danger>
              Text
            </Button>
            <Button type="link" danger>
              Link
            </Button>
          </SplitSpace>
        </Space>
      </Col>
    </div>
      </header>
    </div>
  );
}

export default App;
