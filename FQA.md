# FQA

### 项目中使用了哪些开源项目及作用

- Commitizen
> 一个撰写合格 Commit message 的工具。
- validate-commit-msg
> 用于检查 Node 项目的 Commit message 是否符合格式。
- standard-version
> 用于依据 Commit message 生成 changelog 以及版本发布。

### 操作流程

1.拉取最新代码。
2.在**本地分支**开发，开发完成之后将该分支 push 到远程仓库。
3.远程仓库上审核代码。通过之后，将分支合并到仓库主干，并清理分支。

> note: commit 内容也作为审核的一部分, 要求精准，简练，完整。对于改动较大，功能复杂的代码修改，尽量使用中文。

### Git commit 日志基本规范

标准参考 [Contributing to AngularJS](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>

**type 代表某次提交的类型，比如是修复一个 bug 还是增加一个新的 feature。所有的 type 类型如下：**

- feat： 新增feature
- fix: 修复bug
- docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
- style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚到上一个版本

**scope 表示改动部分的受影响范围:**

- user 用户
- pay 支付
- product 产品
- article 文章
- core 核心
- router 路由
- api 接口
- doc 文档
- upgrade 升级计划

> note: 如果无法确认影响范围，填写修改的文件。e.g. examples.js

**subject 主题，包含对变更的简明描述：**

- 以动词开头，使用第一人称现在时："change"（改变 动作） 不是 "changed"（改变 过去式） 也不是 "changes"（改变 三单形式）
- 不要大写第一个字母
- 最后没有点（。）

**常用表述语：**

- add 添加
- change 改变
- modify 修改
- update 更新
- remove 移动
- delete 删除

**body 主体**

- 使用第一人称现在时，比如使用："change"（改变 动作） 不是 "changed"（改变 过去式） 也不是 "changes"（改变三单形式） 。
- 正文应该包括变化的动机，并与之前的行为进行对比。

**footer 页脚**

- 如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
- 如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。

页脚应包含对问题的结束引用（如果有）。请参照以下格式：

- close 关闭（动作）
- closes 关闭（三单形式）
- closed 关闭（过去式）
- fix 修理（动作）
- fixes 修理（三单形式）
- fixed 修理（过去式）
- resolve 解决（动作）
- resolves 解决（三单形式）
- resolved 解决（过去式）

格式要求：

    # 标题行：50个字符以内，描述主要变更内容
    #
    # 主体内容：更详细的说明文本，建议72个字符以内。 需要描述的信息包括:
    #
    # * 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
    # * 他如何解决这个问题? 具体描述解决问题的步骤
    # * 是否存在副作用、风险?
    #
    # 尾部：如果需要的化可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。

示例：

    feat(ALL): Add Projet

    Insaic 前端 H5 组件库

Git command:

    git add -A

    git cz # 凡是用到git commit命令，一律改为使用 git cz
