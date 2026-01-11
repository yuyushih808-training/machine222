# 📅 設備預約管理系統

Equipment Booking System - 一個簡單易用的設備預約管理介面

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 功能特色

- **📝 預約表單** - 快速建立設備預約
- **📊 預約看板** - 視覺化檢視各設備的預約狀態
- **📋 預約列表** - 管理所有預約紀錄
- **⚠️ 衝突檢測** - 自動防止時段重疊
- **💾 本地儲存** - 資料保存在瀏覽器中

## 🛠️ 技術堆疊

- React 18
- Vite
- localStorage (資料儲存)

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟瀏覽器訪問 `http://localhost:5173`

### 建置專案

```bash
npm run build
```

建置完成後，檔案會輸出到 `dist/` 資料夾

### 預覽建置結果

```bash
npm run preview
```

## 📁 專案結構

```
equipment-booking-system/
├── index.html          # HTML 入口
├── package.json        # 專案設定
├── vite.config.js      # Vite 設定
├── src/
│   ├── main.jsx        # React 入口
│   └── App.jsx         # 主要元件
└── README.md
```

## 📦 設備清單

目前系統包含以下設備：

| 設備 | ID |
|------|-----|
| 📽️ 投影機 | projector |
| 🖥️ 移動式螢幕 | mobile-screen |

如需新增設備，請修改 `src/App.jsx` 中的 `EQUIPMENT_LIST` 陣列。

## 📊 資料結構

```javascript
{
  id: "booking-xxxxx",      // 唯一識別碼
  userName: "王小明",        // 預約人姓名
  equipmentId: "projector", // 設備 ID
  date: "2025-01-15",       // 預約日期
  startTime: "10:00",       // 開始時間
  endTime: "11:30",         // 結束時間
  createdAt: "2025-01-11T08:30:00Z" // 建立時間
}
```

## 🌐 部署到 GitHub Pages

本專案已內建 GitHub Actions 自動部署，只需完成以下設定：

### 步驟 1：修改 Repo 名稱（重要！）

編輯 `vite.config.js`，將 base 改成你的 repo 名稱：

```js
base: '/你的repo名稱/',
```

### 步驟 2：啟用 GitHub Pages

1. 前往 GitHub repo 頁面
2. 點擊 **Settings** (設定)
3. 左側選單點擊 **Pages**
4. **Source** 選擇 **GitHub Actions**
5. 完成！

### 步驟 3：推送程式碼

```bash
git add .
git commit -m "Enable GitHub Pages"
git push
```

推送後，GitHub Actions 會自動建置並部署。

### 步驟 4：查看網站

部署完成後，網站網址為：
```
https://你的帳號.github.io/你的repo名稱/
```

可在 repo 的 **Actions** 頁籤查看部署狀態。

## 📄 授權

MIT License
