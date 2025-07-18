# 常用插件介绍
:::info 信息
缩写为 / 代表无缩写
:::

## 前置插件

### ProtocolLib

一款协议库插件, 被广泛插件 (尤其是反作弊) 使用

### PlaceholderAPI
缩写: papi

一款占位符 (变量) 插件, 允许插件创建自己的占位符或转换字符串的占位符, 方便服务器管理员在配置消息时使用变量

## 经济插件
:::info 信息
部分基础插件 (诸如 CMI) 可能已经内置经济系统, 就不需要再额外安装经济插件 (但是经济前置建议还是安装)
:::

### Vault
:::warning 警告
该插件本身并不自带经济系统
:::

一款经典的经济前置插件, 统一了服务器插件调用经济插件的接口

#### VaultUnlocked

由于 Vault 年久失修, 该插件对 VaultUnlocked 进行了进一步优化, 推荐使用

#### ServiceIO

该插件是 Vault 的代替品, 全面重写了 Vault, 使性能和安全性得到了大幅提升, 但兼容性相对 VaultUnlocked 差一点

### XConomy

一款由国人开发的经济插件, 配置简易, 支持 Vault, 推荐使用

### PlayerPoints

一款老牌点卷插件, 被许多插件所使用, 也支持 Vault (默认不支持, 需要修改配置文件)

## 权限(组)插件
这里仅推荐 **LuckPerms** (缩写: lp) 插件, 它是 Minecraft 服务器中最流行的权限插件, 功能强大且易于使用, 拥有网页编辑器, 方便服务器管理快速上手操作

## 基础插件
:::warning 警告
不推荐使用 EssentialsX 及 CMI 这两个基础插件, 因为这两个插件均较为臃肿 (配置文件上千行), EssentialsX 插件的创新功能也偏少
:::

### EssentialsX
缩写: essx

一款基于 Essentials 编写的基础插件, 稳定性较好, 功能较多

### CMI
一款付费基础插件, 功能十分丰富

### HuskHomes
一款轻便的基础插件, 功能以与传送相关的为主, 稳定性与性能较好, 推荐使用

### SunLight
EssentialsX 和 CMI 的中和, 轻量且现代化, 功能丰富, 配置清晰

## 防熊插件

### CoreProtect
一款回档插件, 可以快速查询某个区域/具体方块的历史记录, 可以回档也可以恢复, 推荐使用

不过可悲的是, 开源版本截止到 `v22.4`, 该插件现在已转为付费订阅制, 只有付费用户才能获得最新的更新

### eBackup
一款定时备份插件, 支持将备份上传到远程服务器, 推荐使用

## 聊天插件

### TrChat
缩写: trc

强烈推荐, 功能强大且配置清晰, 支持跨服聊天

### HuskChat
一款轻量级聊天插件, 现已停更

## 物品库插件

### MMOItems
知名老牌~~史山~~物品库插件, 功能繁多

### SX-Item
一款由国人开发的物品库插件

## 任务插件

### TypeWriter
一款新兴, 功能强大的任务插件, 可以创建剧情, 沉浸式与游戏交互,

### Quests
一款老牌任务插件, 稳定性好

## 领地插件

### Residence
缩写: res

老牌领地插件, 闭源付费, 不过提供体验版 (和付费版一样) 可以免费下载

### Dominion
一款由国人开发的开源领地插件, 功能强大

### GriefDefender
一款功能丰富的领地插件, 虽然开源但是开源更新截止到 2021

### HuskClaims
一款新兴的领地插件, 参照 GriefPrevention 开发, 目前仍不太完善

### PlotSquared
著名地皮插件

## 游戏管理

### WorldGuard
一款老牌保护插件, 可以圈定区域进行保护, 基于 WorldEdit, 推荐使用

### NoBuildPlus
一款保护插件, 可以保护某个特定的世界

### Multiverse-Core
缩写: mv

一款老牌多世界插件

### MyWorlds
一款新兴的多世界插件, 性能更好, 推荐使用

### WorldEdit
缩写: we

创世神插件, 对于建筑党非常实用

### FastAsyncWorldEdit
缩写: fawe

多线程版本的 WorldEdit, 推荐使用, 性能更好 (至少不会卡崩服)

## 玩法插件

### 粘液科技
一款老牌玩法插件, 虽然缺少好玩但是代码史山, 性能堪忧

### ItemsAdder (缩写: ia) / Oraxen (开源)
一款可以添加新的物品/方块等的插件, 付费, 功能强大

### Nova
一款新兴玩法插件, 旨在通过资源包还原 Mod 玩法, 资源占用较大

### MiniPlayerTitle
一款称号插件, 不过没有 GUI (仅有 TUI), 开源, 功能较多

### UserPrefix
一款称号插件, 不过没有 Vault 支持, 不能直接购买称号

### MythicPrefixes
一款由国人开发的称号插件, 功能较多, 有 GUI, 推荐使用

## 其它插件

### DecentHolograms
一款新兴的浮空字插件, 功能强大, 不过仅支持较高版本 (旧版本参见 HolographicDisplays), 推荐使用

### TAB
一款老牌 TAB 插件, 功能强大, 支持自定义 TAB, 计分板, Boss栏, 推荐使用

### TrMenu
缩写: trm

一款新兴菜单插件, 功能强大, 推荐使用

### AuthMeReloaded
一款老牌登录插件, 功能强大, 推荐使用

### MiniMOTD
一款自定义 MOTD 插件, 支持渐变色, 伪造玩家人数, 推荐使用

### Citizens
一款老牌 NPC 插件, 功能强大, 推荐使用

### ZNPCsPlus
一款 NPC 插件

### SkinsRestorer
对离线服的正版皮肤支持, 也可以更换皮肤, 推荐使用

### MythicMobs
缩写: mm

一款常用于创建自定义实体的插件, 功能丰富

### QuickShop-Hikari
缩写: qs

一款商店插件, 功能强大, 开源, 推荐使用

---

:::info 信息
作者已经词穷了😭
:::