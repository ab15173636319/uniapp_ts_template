## uni-app 项目模板

## 项目说明

- 模板基于 Vue 3.0 + TypeScript 开发
- 集成了 Pinia 状态管理和持久化
- 支持国际化（vue-i18n）
- 配置了 ESLint + Prettier 代码规范
- 支持多种端的构建和运行
- 主要适用于 VS Code 编辑器

## 技术栈

- **框架**: Vue 3.0
- **语言**: TypeScript
- **状态管理**: Pinia + pinia-plugin-persistedstate
- **国际化**: vue-i18n
- **样式预处理器**: Sass
- **代码规范**: ESLint + Prettier
- **构建工具**: Vite

## 项目结构

```
uni-preset-vue/
├── src/
│   ├── pages/           # 页面目录
│   │   └── index/       # 首页
│   ├── static/          # 静态资源
│   ├── utils/           # 工具函数
│   │   └── http.ts      # 网络请求封装
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   ├── manifest.json    # 应用配置
│   ├── pages.json       # 页面配置
│   └── uni.scss         # 全局样式
├── .env.development     # 开发环境变量
├── .env.test           # 测试环境变量
├── .eslintrc.js         # ESLint 配置
├── .prettierrc.json     # Prettier 配置
├── package.json         # 项目配置和依赖
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 运行项目

### 开发环境

```bash
# 运行 H5 端
pnpm run dev:h5

# 运行微信小程序
pnpm run dev:mp-weixin

# 运行支付宝小程序
pnpm run dev:mp-alipay

# 运行百度小程序
pnpm run dev:mp-baidu

# 运行字节跳动小程序
pnpm run dev:mp-toutiao

# 运行 QQ 小程序
pnpm run dev:mp-qq

# 运行京东小程序
pnpm run dev:mp-jd

# 运行快手小程序
pnpm run dev:mp-kuaishou

# 运行 Lark 小程序
pnpm run dev:mp-lark

# 运行小红书小程序
pnpm run dev:mp-xhs

# 运行 Harmony 小程序
pnpm run dev:mp-harmony

# 运行快应用
pnpm run dev:quickapp-webview

# 运行华为快应用
pnpm run dev:quickapp-webview-huawei

# 运行联盟快应用
pnpm run dev:quickapp-webview-union
```

### 生产构建

```bash
# 构建 H5 端
pnpm run build:h5

# 构建微信小程序
pnpm run build:mp-weixin

# 构建其他端类似，将 dev 替换为 build 即可
```

## 环境配置

项目使用 `.env` 文件管理环境变量：

- `.env.development`: 开发环境配置
- `.env.test`: 测试环境配置

## 网络请求

项目在 `src/utils/http.ts` 中封装了网络请求工具，基于 `uni.request` 实现：

```typescript
// 使用示例
import Http from '@/utils/http';

// GET 请求
Http('/api/user', { id: 1 }, 'GET').then(res => {
  console.log(res);
});

// POST 请求
Http('/api/login', { username: 'admin', password: '123456' }, 'POST').then(res => {
  console.log(res);
});
```

## 代码规范

### 代码格式化

```bash
# 使用 Prettier 格式化代码
pnpm run prettier
```

### 代码检查

```bash
# 使用 ESLint 检查代码
pnpm run lint

# TypeScript 类型检查
pnpm run type-check
```

## 使用的依赖

### 核心依赖

1. **vue** - Vue 3.0 框架
2. **pinia** - 状态管理
3. **pinia-plugin-persistedstate** - 持久化 Pinia 数据
4. **vue-i18n** - 国际化支持

### 开发依赖

1. **prettier** - 代码格式化
2. **eslint** - 代码质量检查
3. **sass** - SCSS 预处理器
4. **sass-loader** - SCSS 加载器
5. **typescript** - TypeScript 支持
6. **vite** - 构建工具
7. **@dcloudio/vite-plugin-uni** - uni-app Vite 插件

## 开发建议

1. 使用 VS Code 编辑器，并安装以下插件：
   - Vetur 或 Vue Language Features (Volar)
   - ESLint
   - Prettier

2. 遵循项目的代码规范，使用 ESLint 和 Prettier 保持代码风格一致

3. 页面开发遵循 uni-app 的页面生命周期和组件规范

4. 状态管理使用 Pinia，对于需要持久化的数据，使用 pinia-plugin-persistedstate

5. 国际化使用 vue-i18n，在需要多语言支持的场景下使用

## 注意事项

- 运行小程序端时，需要在对应平台的开发者工具中导入项目
- 构建生产版本前，请确保已配置好对应环境的变量
- 网络请求的 `baseUrl` 已在 `http.ts` 中配置，可根据实际项目需求修改
