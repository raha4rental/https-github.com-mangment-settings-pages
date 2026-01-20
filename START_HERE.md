# 🚀 ابدأ من هنا / START HERE

## ⚡ معلومات المستودع / Repository Info

- **Organization:** raha4rental
- **Repository:** mangment
- **Repository URL:** https://github.com/raha4rental/mangment
- **GitHub Pages:** https://raha4rental.github.io/mangment/
- **Custom Domain:** https://rahaadmin.com

---

## ⚡ رفع التغييرات / Push Changes

### الخطوة 1: رفع المشروع

**نفّذ هذا الأمر في Terminal:**

```bash
cd /Users/allaasheikh/mangment
git push -u origin main
```

**أو استخدم السكريبت:**
```bash
./push-to-github.sh
```

---

### الخطوة 2: تفعيل GitHub Pages (لنشر الموقع)

1. اذهب إلى: `https://github.com/raha4rental/mangment/settings/pages`
2. تحت "Source":
   - Branch: اختر `main`
   - Folder: اختر `/ (root)`
3. اضغط **Save**
4. انتظر 1-2 دقيقة
5. الموقع سيكون على:
   - `https://raha4rental.github.io/mangment/`
   - `https://rahaadmin.com` (Custom Domain)

---

## 🎯 استخدام الموقع محلياً / Use Locally

**يمكنك استخدام الموقع الآن محلياً:**

```bash
cd /Users/allaasheikh/mangment
python3 -m http.server 8080
```

ثم افتح: `http://localhost:8080`

---

## ✅ ما تم إعداده / What's Ready

- ✅ نظام إدارة الشقق الكامل
- ✅ نظام الحجوزات
- ✅ نظام التوصيل مع العنوان ورقم الجوال
- ✅ نظام التنظيف
- ✅ نظام التفتيش
- ✅ نظام المستلزمات
- ✅ جميع البيانات تُحفظ تلقائياً في المتصفح

---

## 📞 إذا واجهت مشكلة

- تأكد من أنك مسجل دخول على GitHub
- تأكد من أن لديك صلاحيات في منظمة "raha4rental"
- إذا طُلب اسم المستخدم وكلمة المرور، استخدم Personal Access Token
- للتحقق من الـ remote الحالي: `git remote -v`

