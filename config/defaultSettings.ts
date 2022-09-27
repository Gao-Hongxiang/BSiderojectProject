import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  logo: 'https://retechstatic-prod.s3.us-west-2.amazonaws.com/logo.png',
  iconfontUrl: '',
  headerHeight: 48,
  splitMenus: false,
};

export default Settings;
