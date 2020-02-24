# git学习笔记

## 1 git在本地的结构

工作区----写代码的地方
暂存区----临时存储      git add从工作区提交到暂存区
本地库----历史版本      git commit从暂存区提交到本地库

## 2 git和代码托管中心

局域网环境下：GitLab
外网环境下：GitHub，码云

## 3 本地库和远程库是怎么交互的

团队内部协作：
跨团队协作：

## 4 git命令行操作

### 4.1 本地库初始化

命令：git init
效果：初始化一个空的git仓库，在项目文件夹下创建了一个.git文件夹，是隐藏的
注意：.git目录中存放的是本地库相关的子目录和文件

### 4.2 设置签名

用户名：
Email：
`git config   user.name   tom_pro`  //项目级别的
`git --global   user.email   goodMorning_pro@atguigu.com` //全局的
作用：用来标识区分不同开发人员的身份，这里设置的签名和登录远程库的帐号和密码没有任何关系。
命令：项目级别/仓库级别：仅在当前本地库范围内有效
系统用户级别：登录当前操作系统的用户范围
优先级：就近原则，项目级别优先于系统用户级别，二者都有时采用项目级别的签名
签名被保存在 .git/config这个文件里面

### 4.3 查看状态

git status

untracked files: 这个文件还没有被提交到暂存区

### 4.4 提交到暂存区

git add file.name 把文件添加到暂存区
git rm --cached file.name 把文件从暂存区撤销

### 4.5 从暂存区提交到本地库

git commit file.name

git commit -m "" file.name

### 4.6 版本记录

git log 可以查看版本记录
git log --oneline
git reflog 显示当前版本到别的版本需要多少步 HEAD

### 4.7 基于索引值的版本回退操作

git reflog 查看版本列表

git reset --hard a6ace91 回退到索引值对应的版本 把HEAD指向对应的版本

HEAD is now at a6ace91 "commit......."

### 4.8 reset命令的三个参数对比

--soft 参数 仅仅在本地库移动HEAD指针
--mixed 参数 在本地库移动HEAD指针 并且重置暂存区
前面两个都不会修改本地文件
--hard 参数 在本地库移动HEAD指针，重置暂存区，重置工作区

### 4.9 删除文件怎么找回

版本回退就行了。。

git reset --hard HEAD

### 4.10 比较文件

git diff xxxxx.txt

不指定文件名的时候可以比较当前工作区和暂存区中的多个文件

git diff[本地库中历史版本][文件名]

## 5 git的分支

从主干分支复制出来一份，以用来开发新的功能，而不污染主干分支，在分支开发完成之后，可以推进成为主干分支。

### 5.1 分支操作

git branch -v 查看分支
git branch branch_name 创建分支
git checkout branch_name 切换到分支

### 5.2 合并分支

得先切换到接受合并的那个分支上
git checkout branch_name 这是接受合并的分支的名字
git merge branch_name 这是需要合并过来的分支名字

### 5.3 合并的时候会有冲突

编辑文件，删除特殊符号，把文件修改到满意，git add [文件名]--- git commit -m

## 6 哈希

哈希是一系列的加密算法
1.不管输入的数据量有多大，使用同一种加密算法，得到的结果长度固定。
2.哈希算法确定，输入的数据确定，输出的数据能够保持不变。
3.哈希算法确定，输入的数据有变化，输出的数据一定有变化，而且变化很大
4.哈希算法不可逆

可以用来校验文件的完整性

git底层也是采用sha-1哈希算法来验证文件的完整性

## 7 git保存版本的机制

### 7.1 SVN这种集中式控制工具的文件管理机制

SVN增量式版本控制，每次只保存变化的部分

### 7.2 git

重复的文件会有一个指针 指向之前的文件

## 8 和远程库的交互

git init
git add
git commit
去创建一个远程仓库，复制这个仓库的地址
git remote -v
git remote add origin https://
git push origin branch.name

git clone https://
1.从远程库克隆所有文件过来
2.创建origin远程地址别名
3.初始化本地库

在GitHub上邀请别人
拉取
git fetch origin master  //把远程库的master抓取下来，本地工作区的内容并没有被修改
git fetch [远程库的别名][远程分支名]

git pull origin master = git fetch [远程库的别名][远程分支名] + git merge[远程库地址别名/远程分支名]

如果不是最新版本的基础上操作的，push不上去，得先pull

### 8.1 跨团队协作

可以fork一份别人远程库

在本地 git clone

做完操作之后pull request

别人收到pull request 之后通过 Merge pull request合并 然后pull拉取到本地

### 8.2 SSH登录

在本地生成一个SSH KEY id_rsa.pub 然后把SSH KEY添加到github账户中

## 9 git 工作流

### 9.1 集中式工作流

不分支，每个人都有自己的本地库，都通过pull/push的方式与远程库（master）交互

### 9.2 git flow工作流

这是最常用的
1.主干分支 master
主要负责正在运行的生产环境代码，永远保持与正在运行的生产环境完全一致。
2.开发分支 develop
主要负责管理正在开发过程中的代码，一般情况下是最新的代码。
3.bug修复分支，hot_fix
主要负责管理生产环境下出现的紧急修复的代码。从主干分支支出，修理完毕并测试上线后，并回主干分支。并回后，视情况可以删除该分支。
4.功能分支
为了不影响较短期的开发工作，一般把中长期开发模块，会从开发分钟中独立出来。开发完成后合并到开发分支。

### 9.3 forking 工作流

通过fork和pull request的方式来进行交互。