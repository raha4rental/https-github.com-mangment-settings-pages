# تعليمات رفع المشروع على GitHub / GitHub Upload Instructions

## رفع المشروع تحت منظمة "تنظيم" / Upload under "تنظيم" organization

### 1. إنشاء Repository جديد على GitHub
**Create a new repository on GitHub:**

1. اذهب إلى https://github.com/organizations/تنظيم/repositories/new
   أو https://github.com/new (ثم اختر المنظمة "تنظيم")
2. أدخل اسم المشروع (مثلاً: `mangment` أو `apartment-management`)
3. اختر Public أو Private
4. **لا** تضع علامة على "Initialize this repository with a README"
5. اضغط "Create repository"

### 2. ربط المشروع المحلي بـ GitHub
**Connect local project to GitHub:**

بعد إنشاء الـ repository، استخدم هذه الأوامر:

```bash
cd /Users/allaasheikh/mangment
git remote add origin https://github.com/تنظيم/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

استبدل `YOUR_REPO_NAME` باسم الـ repository الذي أنشأته

### 3. مثال كامل / Full Example:

```bash
# إذا كان اسم المشروع: mangment
git remote add origin https://github.com/تنظيم/mangment.git
git branch -M main
git push -u origin main
```

### 4. نشر الموقع على GitHub Pages (اختياري)
**Publish website on GitHub Pages (Optional):**

1. اذهب إلى Settings في الـ repository
2. اضغط على "Pages" من القائمة الجانبية
3. اختر Branch: `main` و Folder: `/ (root)`
4. اضغط Save
5. الموقع سيكون متاح على: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## ملاحظات / Notes:

- تأكد من أنك مسجل دخول على GitHub
- قد يُطلب منك إدخال اسم المستخدم وكلمة المرور عند الـ push
- إذا استخدمت Two-Factor Authentication، ستحتاج Personal Access Token بدلاً من كلمة المرور

