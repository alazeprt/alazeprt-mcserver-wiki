# 配置插件

接着让我们来配置一下基岩互通插件文件

一般来说, 你只需要配置 Geyser 插件的文件, Geyser 插件的配置文件一般在 `plugins/Geyser-*/config.yml`, 下面介绍一些插件的常用配置项

## bedrock.port
类型: `int`

默认值: 19132

基岩服务器的端口号

## bedrock.motd1
类型: `string`

基岩服务器的第一行描述

## bedrock.motd2
类型: `string`

基岩服务器的第二行描述 (一般不可见)

## bedrock.server-name
类型: `string`

默认值: `Geyser`

基岩服务器的名称

## remote.auth-type
类型: `string`

默认值: `online`

基岩玩家进入服务器的验证方式 (可填: `online` (正版), `offline` (离线), `floodgate` (floodgate 插件验证))

## max-players
类型: `int`

默认值: `100`

基岩服务器的最大玩家数

## above-bedrock-nether-building
类型: `boolean`

类型: `false`

是否允许基岩玩家在下界基岩上层建造
