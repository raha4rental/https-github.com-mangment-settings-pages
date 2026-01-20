# 🚀 دليل سريع لرفع المشروع / Quick Start Guide

## ✅ تم إعداد المشروع محلياً
**Project is ready locally!**

## 📝 معلومات المستودع / Repository Info:

- **Organization:** raha4rental
- **Repository:** mangment
- **Repository URL:** https://github.com/raha4rental/mangment
- **GitHub Pages:** https://raha4rental.github.io/mangment/
- **Custom Domain:** https://rahaadmin.com

---

## 🚀 رفع التغييرات / Push Changes

### نفّذ هذا الأمر:

```bash
cd /Users/allaasheikh/mangment
git push -u origin main
```

### أو استخدم السكريبت:
```bash
./push-to-github.sh
```

---

## 🌐 تفعيل GitHub Pages (إذا لم يكن مفعلاً)

لنشر الموقع على الإنترنت:

1. اذهب إلى: `https://github.com/raha4rental/mangment/settings/pages`
2. تحت "Source":
   - Branch: اختر `main`
   - Folder: اختر `/ (root)`
3. اضغط **Save**
4. انتظر دقيقة أو دقيقتين
5. الموقع سيكون على:
   - `https://raha4rental.github.io/mangment/`
   - `https://rahaadmin.com` (Custom Domain)

---

## 📋 ملخص الأوامر / Command Summary

```bash
# رفع التغييرات
cd /Users/allaasheikh/mangment
git push -u origin main

# إصلاح الـ remote (إذا لزم الأمر)
git remote remove origin
git remote add origin https://github.com/raha4rental/mangment.git
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

