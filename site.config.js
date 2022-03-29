/*
 * @Author: vecpeng
 * @Date: 2022-03-29 12:39:39
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-29 18:11:08
 * @FilePath: /nextjs-notion-starter-kit/site.config.js
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
export default {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6911b004390e4ef6be2253178ba1a0ec',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'vecpeng',
  domain: 'vecpeng.com',
  author: 'vecpeng',

  // open graph metadata (optional)
  description: 'Stay foolish, stay hungry',
  socialImageTitle: '',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'vecpeng',
  github: 'vecpeng',
  linkedin: 'vecpeng',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
