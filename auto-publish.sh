#!/bin/bash

echo "🚀 محاولة رفع المشروع إلى GitHub..."
echo ""

# Try to push
git push -u origin main 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ ✅ ✅ تم الرفع بنجاح! ✅ ✅ ✅"
    echo ""
    echo "🌐 Repository: https://github.com/raha4rental/mangment"
    echo "🌐 GitHub Pages: https://raha4rental.github.io/mangment/"
    echo "🌐 Custom Domain: https://rahaadmin.com"
    echo ""
    echo "💡 لتفعيل GitHub Pages (إذا لم يكن مفعلاً):"
    echo "   1. اذهب إلى: https://github.com/raha4rental/mangment/settings/pages"
    echo "   2. Branch: اختر main"
    echo "   3. Folder: اختر / (root)"
    echo "   4. اضغط Save"
    echo ""
    exit 0
else
    echo ""
    echo "❌ فشل الرفع"
    echo ""
    echo "📝 تأكد من:"
    echo "   1. أن الـ repository موجود: https://github.com/raha4rental/mangment"
    echo "   2. أن لديك صلاحيات الكتابة"
    echo "   3. أنك مسجل دخول بشكل صحيح"
    echo ""
    echo "🔄 للتحقق من الـ remote:"
    echo "   git remote -v"
    echo ""
    exit 1
fi

