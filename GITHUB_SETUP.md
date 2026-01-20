# تعليمات رفع المشروع على GitHub / GitHub Upload Instructions

## رفع المشروع تحت منظمة "raha4rental" / Upload under "raha4rental" organization

### 1. إنشاء Repository جديد على GitHub
**Create a new repository on GitHub:**

1. اذهب إلى https://github.com/organizations/raha4rental/repositories/new
   أو https://github.com/new (ثم اختر المنظمة "raha4rental")
2. أدخل اسم المشروع: `mangment`
3. اختر Public أو Private
4. **لا** تضع علامة على "Initialize this repository with a README"
5. اضغط "Create repository"

### 2. ربط المشروع المحلي بـ GitHub
**Connect local project to GitHub:**

بعد إنشاء الـ repository، استخدم هذه الأوامر:

```bash
cd /Users/allaasheikh/mangment
git remote add origin https://github.com/raha4rental/mangment.git
git branch -M main
git push -u origin main
```

### 3. مثال كامل / Full Example:

```bash
# ربط المشروع بـ GitHub
git remote add origin https://github.com/raha4rental/mangment.git
git branch -M main
git push -u origin main
```

### 4. نشر الموقع على GitHub Pages
**Publish website on GitHub Pages:**

1. اذهب إلى Settings في الـ repository: https://github.com/raha4rental/mangment/settings/pages
2. اضغط على "Pages" من القائمة الجانبية
3. اختر Branch: `main` و Folder: `/ (root)`
4. اضغط Save
5. الموقع سيكون متاح على: `https://raha4rental.github.io/mangment/`
6. مع النطاق المخصص: `https://rahaadmin.com`

---

## معلومات المستودع الحالي / Current Repository Info:

- **Organization:** raha4rental
- **Repository:** mangment
- **Repository URL:** https://github.com/raha4rental/mangment
- **GitHub Pages:** https://raha4rental.github.io/mangment/
- **Custom Domain:** https://rahaadmin.com

## ملاحظات / Notes:

- تأكد من أنك مسجل دخول على GitHub
- قد يُطلب منك إدخال اسم المستخدم وكلمة المرور عند الـ push
- إذا استخدمت Two-Factor Authentication، ستحتاج Personal Access Token بدلاً من كلمة المرور
- المشروع يستخدم نطاق مخصص (CNAME): rahaadmin.com

