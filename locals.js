var I18N = {};

I18N.conf = {
    /**
     * 要翻译的页面正则
     */
    rePageClass: /\b(page-responsive page-profile|vis-public|page-(responsive|account|new-repo|create-org)|homepage|signup|session-authentication|oauth)\b/,

    /**
     * 匹配 pathname 页面的正则
     *
     * 通知页面 /notifications
     * 关注页面 /watching
     * 点赞页面 /stars
     * 问题页面 /issues
     * 拉取请求 /pulls
     * 搜索页面 /search
     * 趋势页面 /trending
     * 展示页面 /showcases
     * 导入仓库 /new/import
     *
     * 未登录首页 /
     */
    rePagePath: /\/(notifications|watching|stars|issues|search|pulls|trending|showcases|$|new\/import)/,

    /**
     * 匹配 url 页面的正则
     *
     * 代码片段页面 gist
     */
    rePageUrl: /(gist)\.github.com/,

    /**
     * 忽略区域的 class 正则
     *
     * 面包屑 breadcrumb
     * 文件列表 files js-navigation-container js-active-navigation-container
     * 代码高亮 highlight tab-size js-file-line-container
     * 代码差异 data highlight blob-wrapper
     * wiki内容 markdown-body
     */
    reIgnore: /(breadcrumb|files js-navigation-container|highlight tab-size|highlight blob-wrapper|markdown-body)/,
};

I18N.zh = {
    "title": { // 标题翻译
        "static": { 
        },
        "regexp": [ // 正则翻译
        ],
    },

    // 公共翻译
    "pubilc": { 
        "static": {

            // 最上方页面选项
            "Pull requests": "拉取请求",
            "Issues": "问题",
            "Marketplace": "广场",
            "Explore": "探索",

            // 右上头像点击
            "Signed in as": "你好",
            "Set status": "设置状态",
            "Your profile": "你的主页",
            "Your repositories": "你的仓库",
            "Your projects": "你的项目面板",
            "Your stars": "你的点赞",
            "Your gists": "你的代码片段",
            "Feature preview": "功能预览",
            "Help": "帮助",
            "Settings": "设置",
            "Sign out": "退出",

            // 右上角+号点击
            "New repository": "新建仓库",
            "Import repository": "导入仓库",
            "New gist": "新建代码片段",
            "New organization": "新建组织",
            "New project": "新建项目面板",

            // 底层栏
            "Blog": "博客",
            "About": "关于",
            "Shop": "商店",
            "Contact GitHub": "联系GitHub",
            "Pricing": "定价",
            "Training": "培训",
            "Status": "状态",
            "Security": "安全",
            "Terms": "条款",
            "Privacy": "隐私",
            //// "Help": "帮助",
        },
        "regexp": [ // 正则翻译 (公共区域正则会二次调用翻译，为了弥补部分翻译的情况)
            /**
             * 匹配时间格式
             *
             * Mar 19, 2015 – Mar 19, 2016
             * January 26 – March 19
             * March 26
             *
             * 不知道是否稳定, 暂时先试用着. 2016-03-19 20:46:45
             */
            [/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) (\d+)(?:, (\d+)|)/g, function (all, month, date, year) {
                var monthKey = {
                    "Jan": "1月",
                    "Feb": "2月",
                    "Mar": "3月",
                    "Apr": "4月",
                    "May": "5月",
                    "Jun": "6月",
                    "Jul": "7月",
                    "Aug": "8月",
                    "Sep": "9月",
                    "Oct": "10月",
                    "Nov": "11月",
                    "Dec": "12月"
                };
                return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + date + '日';
            }],
            /**
             * 相对时间格式处理
             */
            [/just now|(an?|\d+) (second|minute|hour|day|month|year)s? ago/, function (m, d, t) {
                if (m === 'just now') {
                    return '刚刚';
                }

                if (d[0] === 'a') {
                    d = '1';
                } // a, an 修改为 1

                var dt = {second: '秒', minute: '分钟', hour: '小时', day: '天', month: '个月', year: '年'};

                return d + ' ' + dt[t] + '之前';
            }],

            // 仓库删除提示
            [/Your repository "([^"]+)"was successfully deleted\./, "您的 \"$1\"仓库已被成功删除。"],
            // 邮箱验证提示
            [/An email containing verification instructions was sent to (.+)\./, "验证邮件已发送到 $1。"],
            // 头像下面的注册信息
            [/Joined on/, "注册于"],
        ],
    },

    // 首页
    "page-responsive": { 
        "static": { 
            // 左侧栏
            "Repositories": "仓库",
            "New": "新建",
            "Show more": "显示更多",
            "Working with a team?": "以团队方式工作?",
            "GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.": "GitHub是为团队协作而构建的。建立组织来实现团队合作，并获得更多功能!",
            "Create an organization": "新建组织",
            // 右侧栏
            "Explore repositories": "浏览别人的仓库",
            // 中央栏
            "starred": "点赞了",
            "forked": "派生了",
            "Unstar": "取消赞",
            "started following you": "开始关注你",
            // 底下栏
            "Subscribe to your news feed": "订阅",
            "ProTip!": "提示",

            //点击新建组织
            "Choose a plan": "选择其中一项",
            "Pick a plan for your team": "为你的团队选择一个计划",
            "Free": "免费",
            "The basics of GitHub for every team": "每个Github团队都有的基本功能",
            "Unlimited public/private repositories": "无限的公/私仓库",
            "Unlimited collaborators": "无限的合作者",
            "2,000 Actions minutes/month": "每个月2000次操作",
            "Free for public repositories": "公有仓库免费",
            "500MB of GitHub Packages": "500M的Github包",
            "Community Support": "社区支持",
            "Join for free": "免费创建",
            "Team": "团队",
            "Enterprise": "专业",



        },
        "regexp": [ // 正则翻译
            [/Show (\d+) more repositories…/, "显示 $1 个更多的仓库…"],
        ],
    },

    // 个人主页
    "page-responsive page-profile": { 
        "static": { 
            // 顶部页面tab选择
            "Overview": "概述",
            "Repositories": "仓库",
            "Projects": "项目面板",
            "Packages": "包",
            "Stars": "点赞",
            "Followers": "粉丝",
            "Following": "关注",
            // 左侧
            "Change your avatar": "修改头像",
            "Edit profile": "修改设置",

            // 概述tab
            "Popular repositories": "流行的仓库",
            "Customize your pins": "自定义显示的仓库",
            "Pinned": "固定显示的仓库",
            "Contribution settings": "贡献设置",
            "Contribution activity": "贡献信息",
            "January": "一月",
            "February": "二月",
            "March": "三月",
            "April": "四月",
            "May": "五月",
            "June": "六月",
            "July": "七月",
            "August": "八月",
            "September": "九月",
            "October": "十月",
            "November": "十一月",
            "December": "十二月",





            // 其他
            "Jump to": "跳转到",
            "First pull request": "第一次拉取请求",
            "First issue": "第一次提问",
            "First repository": "第一个仓库",
            "Joined GitHub": "刚注册 GitHub",
            "Show more activity": "显示更多",


            
            "Joined on": "注册于",
            "Organizations": "组织",
            "Contributions": "贡献",
            "Public contributions": "贡献",
            
            "Public activity": "动态",
            "Repositories contributed to": "贡献过的仓库",

            "Show:": "显示:",
            "Your repositories": "您的仓库",
            "Repositories you contribute to": "您贡献过的仓库",
            "Save pinned repositories": "保存固定仓库",

            "Jan": "1月",
            "Feb": "2月",
            "Mar": "3月",
            "Apr": "4月",
            "May": "5月",
            "Jun": "6月",
            "Jul": "7月",
            "Aug": "8月",
            "Sep": "9月",
            "Oct": "10月",
            "Nov": "11月",
            "Dec": "12月",

            

            "Mon": "周一",
            "Wed": "周三",
            "Fri": "周五",

            "Includes contributions from private repositories you can access.": "您可以访问包括私人仓库。",
            "Summary of pull requests, issues opened, and commits.": "包括 拉取请求, 提问, 提交.",
            "Learn how we count contributions": "您想知道如何计算贡献的吗",
            "Less": "少",
            "More": "多",

            // "Contributions in the last year": "过去一年的贡献",
            // "Longest streak": "最长连续贡献天数",
            // "Current streak": "当前连续贡献天数",
            // "No recent contributions": "最近没有贡献",

            // 2016-05-20 更新贡献日历部分
            "Select which contributions to show": "选择要显示哪​​些贡献",
            "Public contributions only": "仅公共的贡献",
            "Visitors to your profile will only see your contributions to public repositories.": "访客到您的个人资料只会看到公共仓库部分的贡献。",
            "Public and private contributions": "公共和私人贡献",
            "Visitors to your profile will see your public and anonymized private contributions.": "访客到您的个人资料将会看到您的公共和匿名的私人贡献。",
            "Visitors will now see only your public contributions.": "访客只会看到您公共仓库部分的贡献。",
            "Visitors will now see your public and anonymized private contributions.": "访客将看到您的公共和匿名的私人贡献。",

            "commits": "次提交",
            "Pull Request": "拉取请求",
            "Pull Requests": "拉取请求",
            "Issue reported": "问题报告",
            "Issues reported": "问题报告",

            // 动态 状态词
            "starred": "赞了",
            "forked": "收藏了",
            "forked from": "收藏至",
            "created repository": "创建了仓库",
            "opened pull request": "发起了拉取请求",
            "commented on pull request": "评论了拉取请求",
            "opened issue": "新建问题",
            "close issue": "关闭问题",
            "added": "添加了",
            "to": "到",
            "pushed to": "推送了",
            "closed issue": "关闭了问题",
            "merged pull request": "合并了拉取请求",
            "commented on issue": "提交了评论",

            // 仓库 tab
            "Find a repository…": "搜索仓库…",
            "All": "全部",
            "Public": "公共",
            "Private": "私有",
            "Sources": "源码",
            "Forks": "派生",
            "Mirrors": "镜像",
            "New": "新建",

            "Block or report": "阻止或举报",
            "Learn more about blocking a user.": "查看详细的阻止用户信息。",
            "Block or report this user": "阻止或举报该用户",
            "Block user": "阻止该用户",
            "Hide content and notifications from this user.": "屏蔽所有来自该用户的通知消息。",
            "Report abuse": "举报该用户",
            "Contact Support about this user's behavior.": "将该用户行为上报。",

            "Search repositories…": "搜索这些查库…",
            "Search starred repositories…": "搜索点赞的仓库…",
            "Type:": "类型:",
            "Select type:": "选择类型:",
            "Language:": "语言:",
            "Select language:": "选择语言:",
            "All languages": "所有语言",

            "Sort:": "排序:",
            "Sort options": "排序选项",
            "Recently starred": "最近关注的",
            "Recently active": "最近活动的",
            "Most stars": "最多赞的",
            "Unstar": "取消点赞",

        },
        "regexp": [ // 正则翻译
            [/Created (\d+)[\s\r\n]+commits? in[\s\r\n]+(\d+)[\s\r\n]+repositor(y|ies)/, "在 $2 个库中创建了 $1 次提交"],
            [/Created (\d+)[\s\r\n]+repositor(y|ies)/, "创建了 $1 个仓库"],
            [/Opened (\d+)[\s\r\n]+other[\s\r\n]+pull requests?/, "发起了 $1 个拉取请求"],
            [/Opened (\d+)[\s\r\n]+other[\s\r\n]+issues/, "开了 $1 个其他问题"],
            [/(\d+) commits?/, "$1 次提交"],
            [/Pushed (\d+) commits? to/, "推送了 $1 次提交到"],
            [/Follow ([^’]+)’s activity feed/, "关注 $1 的 feed"],
            [/([^ ]+) has no activity during this period\./, "$1 近期没有任何活动。"],
            [/([\s\S]+?) has no activity yet for this period\./, "$1 近期没有任何活动。"],
            [/(\d+) total/, "$1 次"],
            [/(\d+) days?/, "$1 天"],
            [/([\d,]+) contributions in the last year/, "$1 次贡献在过去的一年中"],
        ],
    },

    "oauth": { // 应用授权
        "static": { // 静态翻译
            "Authorize application": "应用授权",
            "by": "的",
            "would like permission to access your account": "想访问您的帐户",
            "Review permissions": "查看权限",
            "Public data only": "仅公共数据",
            "Limited access to your public data": "仅限访问您的公共数据",
            "This application will be able to identify you and read public information.": "此应用程序将能识别您的身份和读取您的公共信息。",
            "Learn more": "更多",

            "Visit application’s website": "访问应用官网",
            "Learn more about OAuth": "查看更多授权信息",
        },
        "regexp": [ // 正则翻译
        ],
    },
};


// 公共复用翻译部分
I18N.zh.pulls = I18N.zh.issues;
