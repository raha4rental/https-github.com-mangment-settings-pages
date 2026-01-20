#!/bin/bash

echo "🚀 محاولة رفع المشروع إلى GitHub..."
echo ""

# Try to push
git push -u origin main 2>&1

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ تم الرفع بنجاح!"
    echo "🌐 Repository: https://github.com/raha4rental/mangment"
    echo "🌐 GitHub Pages: https://raha4rental.github.io/mangment/"
    echo "🌐 Custom Domain: https://rahaadmin.com"
    echo ""
    echo "💡 لتفعيل GitHub Pages:"
    echo "   https://github.com/raha4rental/mangment/settings/pages"
else
    echo ""
    echo "❌ فشل الرفع. تأكد من:"
    echo "   1. أن الـ repository موجود: https://github.com/raha4rental/mangment"
    echo "   2. أنك مسجل دخول بشكل صحيح"
    echo "   3. أن لديك صلاحيات الكتابة"
    echo ""
    echo "📝 للتحقق من الـ remote:"
    echo "   git remote -v"
fi
