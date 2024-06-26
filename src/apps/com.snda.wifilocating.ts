import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-"好看"页面广告弹窗',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.lantern.start.main.activity.HomeMainActivity',
          matches: '[vid="interstitial_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/14032794',
        },
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + View[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e6a94c34-6580-4bf5-8c44-16c9c9534be4',
          snapshotUrls: 'https://i.gkd.li/i/14256643',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-连接 WiFi 后弹出的广告',
      desc: '点击关闭',
      activityIds: 'com.wifitutu.ui.tools.SpeedUpBActivity',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[vid="native_express_close_proxy"]',
          snapshotUrls: 'https://i.gkd.li/i/14622506',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-加速成功自动返回',
      quickFind: true,
      activityIds: 'com.wifitutu.ui.tools.SpeedUpActivity',
      rules: '[vid="success_desc"] + [vid="back_layout"]',
      snapshotUrls: 'https://i.gkd.li/i/14811492',
    },
  ],
});
