// 表情包展示平台 - 完整配置文件
// 所有可修改的内容都在这里，无需编辑index.html

const siteConfig = {
    // ====================== 网站基本信息 ======================
    /** 网站标题 */
    siteTitle: "表情包合集",
    
    /** 页面副标题 */
    pageSubtitle: "收集到的表情包合集",
    
    /** 页脚版权信息 */
    footerText: "© 2026 神秘用户 | 所有表情包仅供个人非商业使用",
    
    // ====================== 文件夹路径配置 ======================
    /** 表情包图片存放的文件夹路径 */
    photosFolder: "./photos",
    
    /** ZIP压缩包存放的文件夹路径 */
    zipsFolder: "./zips",
    
    // ====================== 表情包文件列表 ======================
    /** 
     * 表情包文件名列表
     * 支持PNG、JPG、GIF、WEBP等所有浏览器支持的图片格式
     * 示例: 'happy.png', 'sad.jpg', 'laugh.gif'
     */
    emojiFiles: [
        // 在这里添加你的表情包文件名
        // 'emoji1.png',
        // 'emoji2.jpg',
        // 'emoji3.gif',
    ],
    
    // ====================== ZIP下载包配置 ======================
    /** 
     * ZIP压缩包配置
     * name: 显示给用户的包名称
     * filename: 实际的ZIP文件名（放在zips文件夹中）
     */
    zipPackages: [
        // 在这里添加你的ZIP包
        // { name: '全部表情包合集', filename: 'TV的表情包文件.zip' },
        // { name: '可爱表情包合集', filename: '老班长的表情包.zip' },
        // { name: '搞笑表情包合集', filename: 'funny-emojis.zip' },
    ]
};
