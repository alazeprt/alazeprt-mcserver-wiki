# JAVA核心 & 服务端

服务端 (也称核心) 指的是运行服务器的软件

由于原版服务端扩展性及性能的不足, 社区便衍生出了多种服务端, 大致可分为以下几种:
- 原版服务端 (俗称香草服务端, Vanilla Server)
- 插件服务端 (**本教程重点介绍**)
- Forge 服务端
- Fabric 服务端
- Sponge 类服务端

以下是各种服务端的对比:

:::info 信息
以下的插件服务端的评分满分均为 10
:::

## 插件服务端

插件服务端支持插件的加载, 使游戏内容更加丰富 (虽然没有到 Mod 的程度)

### Bukkit

Bukkit 是 Minecraft 插件服务端的开山鼻祖, 首次引入了插件概念

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

评分:
- 性能: 1
- 稳定性: 5
- 生电支持: 6

### Spigot

Spigot 基于 Bukkit 开发, 对 Bukkit 进行了进一步的改进, 同时也引入了群组服这一概念 (BungeeCord)

下载链接 (需要使用 BuildTools.jar 自动编译): https://hub.spigotmc.org/jenkins/job/BuildTools/

评分:
- 性能: 3
- 稳定性: 7.5
- 生电支持: 7
- 版本适配速度: 较快

### Paper

Paper 原名为 PaperSpigot, 原基于 Spigot 开发, 加入了许多性能优化的配置项, 并引入了新的插件 API

同时, 它的团队也研发出了注重性能的新款群组服 (Velocity)

下载链接: https://papermc.io/downloads/all

评分:
- 性能: 7
- 稳定性: 7
- 生电支持: 5.5
- 版本适配速度: 快

### Purpur

Purpur 基于 Pufferfish (基于 Paper 开发的一个小众服务端) 开发, 再次加入了许多性能优化的选项

下载链接: https://purpurmc.org/download/purpur (旧版本需要通过调用 [API](https://api.purpurmc.org/) 下载)

评分:
- 性能: 8
- 稳定性: 6.5
- 生电支持: 5
- 版本适配速度: 快

### Leaves

Leaves 基于 Paper 开发, 以生电为其功能亮点, 加入了许多对生电友好的配置项

下载链接: https://leavesmc.org/downloads/all

评分:
- 性能: 6
- 稳定性: 6
- 生电支持: 9
- 版本适配速度: 较慢

### Leaf

Leaf 基于 Gale (基于 Paper 开发的一个小众服务端) 开发, 以性能优化为主, 针对异步性能优化加入了许多配置项

下载链接: https://www.leafmc.one/download

评分:
- 性能: 9
- 稳定性: 6
- 生电支持: 4.5
- 版本适配速度: 快

### Canvas

Canvas 基于 Paper 开发, 针对异步多世界路线进行开发（只支持Java22＋）

下载链接: https://jenkins.canvasmc.io/job/Canvas/

评分:
- 性能: 10＋
- 稳定性: 4.5
- 生电支持: 5
- 版本适配速度: 快

### Akarin

Akarin 是一款支持多线程的 Minecraft 服务端，来自 “新维度”，前身是 TorchSpigot 服务端。

下载链接: https://www.yuque.com/wangshanzha/rainbow/mkt26vl39i2veyrb 

评分:
- 性能: 8.5
- 稳定性: 6
- 生电支持: 5
- 版本适配速度: 已停更

### SpongeVanilla

SpongeVanilla 是另一个插件生态 (Sponge 插件, 与 Bukkit & Spigot & Paper 插件互不兼容) 的服务端, 性能一般

下载链接: https://spongepowered.org/downloads/spongevanilla

评分:
- 性能: 5
- 稳定性: 8
- 生电支持: 6.5
- 版本适配速度: 快

接下来介绍的是Folia类服务端, 这一类服务端均将区块放到多个线程, 有效提升了线程较多处理器的利用率

:::warning 警告
由于区块的线程不统一, 这一类服务端对生电与稳定性均不友好, 同时插件也需要特别作兼容才能支持
:::

### Folia

Folia 由 PaperMC 开发, 是多线程区块服务端的开山鼻祖

下载链接: https://papermc.io/downloads/all?project=folia

评分:
- 性能: 7
- 稳定性: 3.5
- 生电支持: 1
- 版本适配速度: 快

### Mint
Mint 基于 Folia，致力于提供更好的整体性能和原版机制

下载链接: https://github.com/MenthaMC/Mint

评分:
- 性能: 8.5
- 稳定性: 5
- 生电支持: 7
- 版本适配速度: 快

### Lophine
Lophine是Luminol的下游分支，旨在 Folia 上实现更多生电的内容以及更多的功能

下载链接: https://github.com/LuminolMC/Lophine

评分:
- 性能: 7
- 稳定性: 5
- 生电支持: 8
- 版本适配速度: 快

### Luminol

Luminol 基于 Folia 开发, 对于性能和生电均有优化

下载链接: https://github.com/LuminolMC/Luminol/releases

评分:
- 性能: 8
- 稳定性: 4
- 生电支持: 3
- 版本适配速度: 较快

### LightingLuminol

LightingLuminol 基于 Luminol 开发, 对插件的兼容性进行了优化

下载链接: https://github.com/LuminolMC/LightingLuminol/releases

评分:
- 性能: 8
- 稳定性: 4.5
- 生电支持: 3
- 版本适配速度: 较慢

## 混合服务端

接着介绍的是混合服务端, 这一类服务端在支持模组加载器 (ex. Forge, Fabric) 同时对插件进行了支持

:::warning 警告
混合服务端的兼容性均一般
:::

### CatServer

CatServer 是一款 Forge 混合服务端, 在同类中对 Bukkit 和 Forge 模组的兼容性最好, 但是版本更新较慢

下载链接: https://catmc.org/

评分:
- 模组兼容性: 9
- 插件兼容性: 8
- 版本支持: 4

### Mohist

Mohist 是一款 Forge 混合服务端, 更新较快

下载链接: https://www.mohistmc.cn/download/mohist

评分:
- 模组兼容性: 7
- 插件兼容性: 5
- 版本支持: 6

### ArcLight

ArcLight 是一款新兴的 Forge & Fabric 混合服务端, 更新非常快

下载链接: https://arclight.izzel.io/

评分:
- 模组兼容性: 8
- 插件兼容性: 7
- 版本支持: 8

### SpongeForge

SpongeForge 与 SpongeVanilla 一样均是 Sponge 插件生态的服务端, 兼容性较好, 但是不支持 Bukkit & Spigot & Paper 插件

下载链接: https://spongepowered.org/downloads/spongeforge

评分:
- 模组兼容性: 9.5
- 插件兼容性: (Sponge插件) 8/(类Bukkit插件) 0
- 版本支持: 8

### Banner

Banner 是一款 Fabric 混合端, 由 Mohist 的开发团队进行研发

下载链接: (疑似删库, 无法从官方渠道下载)

### Cardboard

Cardboard 是一款 Fabric 模组, 用于提供 Bukkit & Spigot 插件的兼容性

下载链接: https://cardboardpowered.org/download/

## 代理服务端

代理服务端是用于建立群组服的服务端, 用于串联起各个服务器, 使玩家在各个服务器间无感传送

### BungeeCord

BungeeCord 是由 SpigotMC 开发团队开发的, 是群组服的开山鼻祖

下载链接: https://ci.md-5.net/job/BungeeCord/

### Waterfall

Waterfall 由 PaperMC 开发, 基于 BungeeCord, 旨在提升 BungeeCord 的性能, 现已停更

下载链接: https://papermc.io/downloads/all?project=waterfall

### Velocity

Velocity 是由 PaperMC 开发的一款全新高性能代理服务端, 支持多种模式 (包括 BungeeCord)

下载链接: https://papermc.io/downloads/all?project=velocity

## 服务端推荐

- 1.8: PandaSpigot (PvP), SportPaper (生存服)
- 1.12: Beast
- Paper系生电: Leaves > Paper > Purpur > Leaf
- Folia系生电：Lophine > Mint > Folia
- 服务器CPU核心多(12+): Mint > LightingLuminol > Luminol > Lophine > Folia > Canvas > Leaf > Purpur > Paper
- 性能: Leaf > Purpur > Paper 
- 性能+稳定性: Purpur > Leaf > Paper
- Forge混合端: CatServer > ArcLight > Mohist
- Fabric混合端: Cardboard > Banner
- 群组服: Velocity > Waterfall > BungeeCord
