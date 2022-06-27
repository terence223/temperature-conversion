import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Switch } from 'antd';
import styled from 'styled-components';
import { Theme } from 'types/Theme';

import TemperatureConversion from './pages/TemperatureConversion';

const { Header, Content } = Layout;

const AppLayout = styled(Layout)`
  height: 100vh;
`;

const AppHeader = styled(Header)`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AppContent = styled(Content)`
  padding: 50px;
`;

const ModeSwitch = styled(Switch)`
  align-self: center;
`;

const AppTitle = styled.h2`
  color: rgba(255, 255, 255, 0.9);
`;

const App = () => {
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const handleModeSwitcherChange = (checked: boolean) => {
    switcher({
      theme: checked ? themes[Theme.LIGHT] : themes[Theme.DARK],
    });
    localStorage.setItem('theme', checked ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <div className="App">
      <AppLayout>
        <AppHeader className="header">
          <AppTitle>Temperature Conversion</AppTitle>
          {status === 'loaded' && (
            <ModeSwitch
              className="theme-switch"
              checkedChildren={<FontAwesomeIcon icon={faSun} />}
              unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
              onChange={handleModeSwitcherChange}
              defaultChecked={currentTheme === Theme.LIGHT}
            />
          )}
        </AppHeader>
        <AppContent>
          <TemperatureConversion />
        </AppContent>
      </AppLayout>
    </div>
  );
};

export default App;
