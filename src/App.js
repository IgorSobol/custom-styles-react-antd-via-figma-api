import React from 'react';
import {
  Col,
  Space,
  Divider,
} from 'antd';

import './App.less';

function App() {
  const SplitSpace = props => <Space split={<Divider type="vertical" />} size={4} {...props} />;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ant Design Color Palet</h1>
        <div className="App">
          <Col flex="auto">
            <Space direction="vertical" split={<Divider />} style={{ width: '100%' }} size={0}>

              {/* Colors */}
              <SplitSpace>
                <ul>
                  <li
                    key="base"
                    className={`blue-color-base`}
                  >
                    <span>blue-base</span>
                  </li>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
                      return (
                        <li
                          key={key}
                          className={`blue-color-${key}`}
                        >
                          <span>blue-{key}</span>
                        </li>
                      )
                    })
                  }
                </ul>
                <ul>
                  <li
                    key="base"
                    className={`cyan-color-base`}
                  >
                    <span>blue-base</span>
                  </li>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
                      return (
                        <li
                          key={key}
                          className={`cyan-color-${key}`}
                        >
                          <span>cyan-{key}</span>
                        </li>
                      )
                    })
                  }
                </ul>
                <ul>
                  <li
                    key="base"
                    className={`magenta-color-base`}
                  >
                    <span>blue-base</span>
                  </li>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
                      return (
                        <li
                          key={key}
                          className={`magenta-color-${key}`}
                        >
                          <span>magenta-{key}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </SplitSpace>
            </Space>
          </Col>
        </div>
      </header>
    </div>
  );
}

export default App;
