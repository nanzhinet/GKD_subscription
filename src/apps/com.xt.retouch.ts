import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xt.retouch',
  name: '醒图',
  groups: [
    {
      key: 5,
      name: '好评反馈',
      activityIds: 'com.xt.retouch.uilauncher.MainActivity',
      rules: '[id="com.xt.retouch:id/market_feedback_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13062637',
    },
  ],
});
