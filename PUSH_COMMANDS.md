# أوامر رفع المشروع / Push Commands

## معلومات المستودع / Repository Info:

- **Organization:** raha4rental
- **Repository:** mangment
- **URL:** https://github.com/raha4rental/mangment

---

## رفع التغييرات / Push Changes

### الطريقة 1: استخدام السكريبت (الأسهل)
```bash
cd /Users/allaasheikh/mangment
./push-to-github.sh
```

### الطريقة 2: الأوامر المباشرة
```bash
cd /Users/allaasheikh/mangment

# التأكد من الفرع الرئيسي
git branch -M main

# رفع الملفات
git push -u origin main
```

---

## إصلاح الـ Remote (إذا لزم الأمر)

إذا كان الـ remote غير صحيح، استخدم:

```bash
# إزالة الـ remote الحالي
git remote remove origin

# إضافة الـ remote الصحيح
git remote add origin https://github.com/raha4rental/mangment.git

# رفع الملفات
git push -u origin main
```

