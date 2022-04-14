# POS-system_side project
* This website provides users with simple functions to make an order, checkout and report daily statement. Users can also create, edit and delete menu, tables and categories. Users can see all orderlists and check the details of them or delete them. 

## Feature
* Users can press `開桌` to input how many people at the table and press `點餐` to get in order page.
* Users can the categories to switch menu page, click the dish and press `下單` button to make an order.
* Users can press  `x` next to the order items on the left side to delete the items.
* User can click `結帳` and choose a payment method with `現金`, `刷卡`, `外帶`or `UberEats`.
* Users can press `新增餐點`or `新增` to create new a new menu, category or table.
* Users cna use `編輯` and `刪除` button to edit or delete menu, category and table.
* Users can see details of the orderlist by press `細項` and use `刪除` to delete it.
* Users can user `日結報表` to input the from when to when to report a daily statement.

## How to start
* Clone the project
```bash
git clone https://github.com/tree12132002/POS-system
```
* Move current directory to the project
```bash
cd *path to the file*/POS-system
```
* Install NPM packages
```bash
npm install
```
* Database migration(be sure that you've already installed a MySQL database)
```bash
npx sequelize db:migrate:all
```
* Generate seed data
```bash
npx sequelize db:seed:all
```
* Start the app server
```bash
npm run dev
```
* End the server
```bash
ctrl + c
```