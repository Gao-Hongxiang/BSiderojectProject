import React, { useCallback } from 'react';
import { setLocale, getLocale, FormattedMessage } from 'umi';
import { Button } from 'antd';

const SelectLang: React.FC<any> = () => {
  const changLang = useCallback(() => {
    const locale = getLocale();
    if (!locale || locale === 'zh-CN') {
      setLocale('en-US');
    } else {
      setLocale('zh-CN');
    }
  }, []);

  return (
    <Button
      shape="round"
      style={{
        margin: '0 8px',
      }}
      onClick={changLang}
    >
      <FormattedMessage id="navBar.lang" />
    </Button>
  );
};

export default SelectLang;
