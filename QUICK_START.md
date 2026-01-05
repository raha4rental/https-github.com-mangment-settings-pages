# 🚀 دليل سريع لرفع المشروع / Quick Start Guide

## ✅ تم إعداد المشروع محلياً
**Project is ready locally!**

## 📝 الخطوات التالية / Next Steps:

### 1️⃣ إنشاء Repository على GitHub

**اذهب إلى أحد الروابط التالية:**

**Option A:** رابط مباشر للمنظمة
```
https://github.com/organizations/تنظيم/repositories/new
```

**Option B:** إنشاء جديد ثم اختيار المنظمة
```
https://github.com/new
```
ثم اختر المنظمة "تنظيم" من القائمة المنسدلة

---

### 2️⃣ إعداد الـ Repository

- **اسم المشروع / Repository Name:** `mangment` (أو أي اسم تريده)
- **الوصف / Description:** نظام تشغيل الشقق / Apartment Management System
- **Visibility:** اختر Public أو Private
- ❌ **لا تضع علامة** على "Add a README file"
- ❌ **لا تضع علامة** على "Add .gitignore"
- ❌ **لا تضع علامة** على "Choose a license"
- ✅ اضغط **"Create repository"**

---

### 3️⃣ رفع الملفات

**بعد إنشاء الـ repository، نفّذ هذا الأمر:**

```bash
cd /Users/allaasheikh/mangment
git push -u origin main
```

أو استخدم السكريبت:
```bash
./push-to-github.sh mangment
```

---

### 4️⃣ تفعيل GitHub Pages (اختياري)

لنشر الموقع على الإنترنت:

1. اذهب إلى: `https://github.com/تنظيم/mangment/settings/pages`
2. تحت "Source":
   - Branch: اختر `main`
   - Folder: اختر `/ (root)`
3. اضغط **Save**
4. انتظر دقيقة أو دقيقتين
5. الموقع سيكون على: `https://تنظيم.github.io/mangment/`

---

## 📋 ملخص الأوامر / Command Summary

```bash
# إذا كان الـ repository موجود بالفعل
cd /Users/allaasheikh/mangment
git push -u origin main

# إذا لم يكن الـ remote موجود
git remote add origin https://github.com/تنظيم/mangment.git
git push -u origin main
```

---

## ⚠️ ملاحظات مهمة / Important Notes

- تأكد من أنك مسجل دخول على GitHub
- تأكد من أن لديك صلاحيات في منظمة "تنظيم"
- إذا استخدمت Two-Factor Authentication، قد تحتاج Personal Access Token
- إذا طُلب منك اسم المستخدم وكلمة المرور، استخدم:
  - Username: اسم المستخدم على GitHub
  - Password: Personal Access Token (ليس كلمة المرور العادية)

---

## 🎉 بعد الرفع

بعد رفع المشروع بنجاح، سيكون متاحاً على:
- **GitHub Repository:** `https://github.com/تنظيم/mangment`
- **GitHub Pages:** `https://تنظيم.github.io/mangment/` (بعد تفعيل Pages)

