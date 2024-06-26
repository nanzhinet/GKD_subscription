import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 5, 8, 11],
  groups: [
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <n * > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849671',
            'https://i.gkd.li/i/14645530',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches:
            '@ImageView[id=null][clickable=true] -(2,3) * > [text*="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f6498773-af55-4ba9-96fa-4c0597523d55',
          snapshotUrls: [
            'https://i.gkd.li/i/12647525',
            'https://i.gkd.li/i/14178516',
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches: '@ImageView[clickable=true] < * - * > [text*="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c52e22c6-987e-46c2-a4ca-e1182972ed94',
          snapshotUrls: [
            'https://i.gkd.li/i/14321041',
            'https://i.gkd.li/i/14468152',
          ],
        },
        {
          key: 3,
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <4 * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14192451',
        },
        {
          key: 4,
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <3 * < * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14730741',
        },
        {
          key: 90,
          preKeys: [0, 1, 2, 3, 4],
          quickFind: true,
          matches: '@[clickable=true] >3 [text$="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13849689',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView[text$="的广告"] +n TextView[text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12864109',
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647525',
            'https://i.gkd.li/i/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        {
          key: 11,
          matches: 'TextView[text$="的广告"] +3 ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14178922',
        },
        {
          key: 12,
          matches: 'TextView[text$="的广告"] - Image',
          snapshotUrls: 'https://i.gkd.li/i/14548763',
        },
        // 预留13~99
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/12647541'],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]', // 1686911063850
        '[vid="ad_container"] [vid="img_close_focus"]',
      ],
      snapshotUrls: 'https://i.gkd.li/i/14156887', //规则2，规则1快照缺失
    },
    {
      key: 10,
      name: '通知提示-推送通知弹窗',
      desc: '点击x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.dialog.d',
          matches:
            '[id="com.zhihu.android:id/guide_title"] - [id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063',
          snapshotUrls: 'https://i.gkd.li/i/12647583',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '会员页广告弹窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/dismiss"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9eb78a95-c2dc-4a8b-9b86-f9d0fc0ed6fd',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页广告弹窗',
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5c471b6-dbc7-4150-be52-3ae4a28806e0',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/floating_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/335dee89-4b55-40f1-8316-b7b4f86a8ee6',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-发想法赢奖励弹窗',
      desc: '点击右上角x',
      activityIds: 'com.zhihu.android.topic.TopicActivity',
      rules: '[vid="scene_container"] >n ViewGroup + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/14020339',
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            'ViewGroup > TextView[text!=""][index=1] +(2,3) ImageView[clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/0443d5cb-aa24-4447-afd7-58c5a09af835',
          snapshotUrls: [
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14232195', // text="创作者小助手"
            'https://i.gkd.li/i/14235024', // text="知乎游戏"
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * > [text*="广告"]',
          exampleUrls:
            'https://m.gkd.li/45487685/c7d89c48-91d1-4658-b22e-d2626117be8b',
          snapshotUrls: 'https://i.gkd.li/i/14206988',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          ],
          matches: '[text*="广告"] +(1,2) [text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
          ],
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@[vid="menu"][visibleToUser=true] < * - * > [text^="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14296163',
        },
        {
          key: 4,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          quickFind: true,
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14332161',
        },
        {
          key: 5,
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'View[childCount=3] > @Image[index=1][clickable=true][visibleToUser=true] + [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14391614',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮小广告',
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '@[vid="activity_close"] + * > [vid="activity_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
        {
          key: 1,
          name: '首页-右侧悬浮窗广告',
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
      ],
    },
    {
      key: 16,
      name: '更新提示',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]', // checked=false 区别勾选前后
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502', // 勾选前
            'https://i.gkd.li/i/14445815', // 勾选后
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[取消]',
          matches: '@[text="取消"] + [text="去应用市场"]',
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
    },
    {
      key: 101, // 不属于广告，序号往后排
      name: '功能类-问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12647688',
        'https://i.gkd.li/i/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
      ],
    },
  ],
});
