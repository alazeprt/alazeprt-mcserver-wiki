# 其它概念

## 卡顿

### 服务端

服务端卡顿一般指的是服务器负载过高而导致的卡顿, 通常表现为:
- TPS <= 18 (正常 TPS 为 20)
- MSPT >= 50

### 客户端

客户端卡顿一般表现为:
- Ping (延迟) >= 100ms
- FPS < 60 (实体堆积过多可能导致, 也有可能是客户端本身性能不好)

## 插件 & 模组 & 数据包

| 项     | 插件   | 模组   | 数据包  |
|-------|------|------|------|
| 修改侵入性 | 中    | 大    | 小    |
| 性能优化 | 高    | 较高    | 差    |
| 版本支持  | 较好   | 较差   | 一般   |
| 客户端   | 无需安装 | 需要安装 | 无需安装 |
| 服务端   | 需要安装 | 需要安装 | 需要安装 |
| 基岩版支持 | 较高    | 较差    | 高    |

## 启动脚本
##Paper给的自动化编写启动脚本https://paper.8aka.org/misc/tools/start-script-gen
用于启动服务器的一个文件, Linux 一般以 `.sh` 为文件后缀, Windows 一般以 `.bat` 为文件后缀, 启动脚本一般用于配置服务器启动参数, 如内存分配

基本的启动命令:

```shell
java -jar server.jar
```

在 `java` 与 文件名 (此处为 `server.jar`) 之间的是 JVM 参数, 在文件名后的是传入的启动参数

一些基本的启动脚本参数:
- `-XmxnG`: JVM参数, 最大分配 n GB 内存
- `-XmsnG`: JVM参数, 初始分配 n GB 内存
- `--nogui`: 启动参数, 设置不开启 GUI 界面 (没用又占性能)

## 命名空间

用来指明和识别游戏中特定对象而又能避免潜在的歧义和冲突的一种方式(如两个模组都有物品a, 则A模组的物品为A:a, B模组的物品为B:a, 其中A与B均为命名空间, 这样就避免冲突了)
MCwiki相关文档https://zh.minecraft.wiki/w/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4ID?variant=zh-cn#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4

## NBT

Minecraft存储世界数据的结构, 一种由众多的标签所组成的树状数据结构
MCwiki相关文档https://zh.minecraft.wiki/w/NBT%E6%A0%BC%E5%BC%8F?variant=zh-cn

## 日志
顾名思义, 日志就是记录服务器运行过程中的各种信息的文件, 包括错误, 警告和基本的一些信息, 对分析插件的错误起到了较大的作用(一般都在Logs文件夹里)

## 世界
指的是 Minecraft 服务器的地图地形, 实体数据的统称

Minecraft 插件服务端一般分为 `world` (主世界), `world_nether` (下界), `world_the_end` (末地) 三个世界

每个世界都按 16x16 的大小分为多个区块, 最后将一块 32x32 个区块的范围存储为一个区域文件 (region)

## UUID

UUID (Universally Unique Identifier) 可以理解为唯一标识符, 在 Minecraft 中每个玩家都有独一无二的 UUID, 用于在游戏中更好的识别玩家身份避免冲突, 它的格式一般为: xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx (8-4-4-12), x代表的是一个十六进制数 (0~9, a~f中一个)

Minecraft 的正版账户 UUID 与 离线账户 UUID 的生成方式有所不同, 所以一个名称对应的正版 UUID 与 离线 UUID 可能不同, 目前离线账户的 UUID 已经有了一套业内常用的生成标准 (但与正版的 UUID 生成标准并**不相同**)

当你的服务器在正版和离线之间转换时, 数据丢失有可能就是因为 UUID 不匹配造成的, 所以在转换中要记得转换 UUID

## 文件结构

以下展示的是插件服务端的基本文件结构:

```text
|- assets/  # Minecraft 本身的一些资源文件
|- cache/  # Minecraft 服务端的缓存文件
|- config/  # 一些插件服务端的配置文件
|  |- gale-global.yml  # Gale 服务端的全局配置文件
|  |- gale-world-defaults.yml # Gale 服务端的世界配置文件
|  |- leaf-global.yml  # Leaf 服务端的全局配置文件
|  |- paper-global.yml  # Paper 服务端的全局配置文件
|  |- paper-world-defaults.yml # Paper 服务端的世界配置文件
|- libraries/  # 插件的依赖下载位置
|- logs/  # 服务端日志文件
|  |- latest.log  # 最新日志文件
|  |- yyyy-mm-dd-n.log.gz  # 某天的第n份日志文件压缩包
|- plugins/  # 插件及其配置目录
|- versions/  # 原版服务端的文件所在目录
|- world/  # 主世界目录
|  |- advancements  # 成就数据
|  |  |- uuid.json  # 对应 UUID 玩家的成就数据
|  |- data # 世界的一些基本数据 (如计分板)
|  |- datapacks # 数据包目录
|  |  |- bukkit  # 类 Bukkit 服务端的基本数据包
|  |- entities  # 实体数据
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的实体数据文件
|  |- playerdata  # 玩家数据
|  |  |- uuid.dat  # 某个玩家的数据文件
|  |- poi  # 兴趣点数据 (如村民的工作方块, 玩家的床)
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的兴趣点数据文件
|  |- region  # 区块数据目录
|  |  |- r.n.m.mca  # 第 (n, m) 个 region 的区块数据文件
|  |- stats  # 玩家统计数据 (如走了多少方块)
|  |  |- uuid.json  # 对应 UUID 玩家的统计数据
|  |- level.dat  # 世界的全局基本信息数据文件
|  |- level.dat_old  # 世界的全局基本信息数据文件备份
|  |- paper-world.yml  # Paper 服务端的世界配置文件 (只会在该世界生效)
|  |- session.lock  # 世界的锁文件 (服务器开启时会生成, 防止多个进程同时占用一个世界)
|  |- uid.dat  # 世界的唯一 ID 数据文件
|- world_nether/  # 下界目录 （主世界所对应的文件都在这里面, 如唯一 ID 数据文件)
|  |- DIM-1  # 下界的基本信息数据文件 (主世界所对应的文件夹都在这里面, 如区块数据)
|- world_the_end/  # 末地目录 （主世界所对应的文件都在这里面, 如唯一 ID 数据文件)
|  |- DIM1  # 末地的基本信息数据文件 (主世界所对应的文件夹都在这里面, 如区块数据)
|- .console_history  # 后台命令执行记录文件
|- banned-ip.json  # 被封 IP 列表
|- banned-players.json  # 被封玩家列表
|- bukkit.yml  # Bukkit 服务端的配置文件
|- commands.yml  # 服务端与 Minecraft 原版命令优先级处理的文件
|- eula.txt  # 服务端的 EULA (使用条款) 文件
|- help.yml  # 一些插件的帮助信息
|- ops.json  # 服务器管理员列表
|- permissions.yml  # 权限节点包的相关配置文件
|- purpur.yml  # Purpur 服务端的配置文件
|- server.properties  # 服务端的基本信息配置文件
|- spigot.yml  # Spigot 服务端的配置文件
|- usercache.yml  # 玩家信息缓存文件
|- version_history.yml  # 服务端的版本信息历史
|- wepif.yml  # 权限相关配置文件
|- whitelist.json  # Minecraft 原版的白名单列表
```

:::info 信息
实际上比较常用的, 你需要了解的配置文件 (**不包括文件夹**) 只有在下文中的 配置文件 板块的文件
:::
