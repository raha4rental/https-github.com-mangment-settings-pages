# أوامر رفع المشروع / Push Commands

## بعد إنشاء Repository على GitHub تحت منظمة "تنظيم":

### الطريقة 1: استخدام السكريبت (الأسهل)
```bash
cd /Users/allaasheikh/mangment
./push-to-github.sh mangment
```

### الطريقة 2: الأوامر المباشرة
```bash
cd /Users/allaasheikh/mangment

# ربط المشروع بـ GitHub
git remote add origin https://github.com/تنظيم/mangment.git

# التأكد من الفرع الرئيسي
git branch -M main

# رفع الملفات
git push -u origin main
```

**ملاحظة:** استبدل `mangment` باسم الـ repository الفعلي الذي أنشأته على GitHub

---

## إذا كان الـ Repository موجود بالفعل:

يمكنك تنفيذ الأوامر مباشرة. إذا واجهت خطأ "remote already exists"، استخدم:

```bash
git remote remove origin
git remote add origin https://github.com/تنظيم/mangment.git
git push -u origin main
```

