# stcn-wikisource crx

维基文库 Chrome 扩展程序，记录用户习惯自动完成简体、繁体转换。

项目名称（stcn-wikisource）缩写含义：

* **S**implified Chinese 简体中文 zh-Hans
* **T**radionnal Chinese 繁体中文 zh-Hant
* 维基文库 https://zh.wikisource.org
* **crx** Chrome extensions

## 安装方式

1. 下载 stcn-wikisource.crx
2. 打开 [Chrome 扩展程序](chrome://extensions/)
3. 拖入 [Chrome 扩展程序](chrome://extensions/)

![](./install.png)

## 使用场景

[维基文库](https://zh.wikisource.org)，“自由的图书馆”，包括大量文献，更有永乐大典、古今图书集成、四库全书。

![](./zh.wikisource.org_zh-hans_%25E6%2598%258E%25E5%258F%25B2.png)

其中历史典籍原文自是繁体，对于大陆用户阅读多有不便，本人考据明史过程中常切换于简繁体之间，因无法记录用户习惯每阅下一卷手动切换。

> OKR【生活-学习】阅读经典记录所学，高质量读书会分享。
>
> 从《明朝那些事儿》登堂入室到《明史》之洪武开国
>
> * KR1 考据《明朝那些事儿》中的历史事件和人物对话的史料来源，例如：《明史》、《明实录》等。
>
> * KR2 《明朝那些事儿（壹）：洪武大帝》按皇帝分篇：朱元璋篇、朱允炆篇，建立目录索引明史列传。

**Bad case**

《明史 卷一百二十二 列传第十 郭子兴 韩林儿》，默认繁体 手动切换 简体  
点击跳转链接  
《明史 卷一百二十三 列传第十一 陈友谅 张士诚 方国珍 明玉珍》恢复繁体 手动切换 简体  
思考：手动 > 自动？

## Poorgrammer Poor Programmer

最后，在程序员思维驱使下实现自动化提升效率，一场周末黑客松成果维基文库 Chrome 插件 stcn-wikisource。

Maybe Buy Me a Coffee！
