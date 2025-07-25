# IP 

即标识每台设备在网络上的地址

## 内网地址 & 公网地址

| 项    | 内网地址                                   | 公网地址                  |
|------|----------------------------------------|-----------------------|
| 表现形式 | IPv4: 以192, 10, 127开头<br>IPv6: 以fe80开头 | 以其它数字开头               |
| 概念   | 局域网内的地址, 只能在局域网内互相通信                   | 因特网上使用的地址, 全球范围内可互相通信 |

:::tip 提示
0.0.0.0 一般用在服务器监听上, 表示任意 IP, 即监听所有的 IP 地址
:::


## IPv4 & IPv6

| 项    | IPv4 | IPv6 |
|------|------|------|
| 地址长度 | 32位  | 128位 |
| 地址数量 | 接近枯竭 | 极其庞大 |
| 推广范围 | 大    | 小    |

正因为 IPv4 地址数量接近枯竭, 便有了 IPv6 的诞生, 同时也催生了 NAT 技术 (将公网地址转换为内网地址)

:::warning 警告
IPv6 推广度仍较低, 大部分设备都未支持 IPv6 导致即使表面推广数据好也无法实际使用, 因此不建议在开服时 **仅使用 IPv6**
:::

## 端口
端口用于区分在一台计算机上运行的不同程序的服务, 不同的服务运行在不同的端口上
端口的范围是 0~65535, Minecraft Java版服务器的默认端口为 25565

## 独立 IP 地址

这个术语在 VPS 的租用中十分常见, 一般的低价服务商都会给你个公用的IP地址 (每个开服的都在用), 并限制各个用户所能使用的端口数量, 而独立 IP 地址正可以解决这个问题, 独立 IP 地址只由你自己使用, 你可以自选任意的端口开服并且不受端口数量的限制, 所以独立 IP 地址服务的价格通常较高


