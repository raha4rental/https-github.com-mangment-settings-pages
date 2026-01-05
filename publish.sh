#!/bin/bash

echo "🚀 محاولة رفع المشروع إلى GitHub..."
echo ""

# Try to push
git push -u origin main 2>&1

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ تم الرفع بنجاح!"
    echo "🌐 Repository: https://github.com/تنظيم/mangment"
    echo ""
    echo "💡 لتفعيل GitHub Pages:"
    echo "   https://github.com/تنظيم/mangment/settings/pages"
else
    echo ""
    echo "❌ فشل الرفع. تأكد من:"
    echo "   1. أن الـ repository موجود على GitHub"
    echo "   2. أنك مسجل دخول بشكل صحيح"
    echo ""
    echo "📝 لإنشاء الـ repository:"
    echo "   https://github.com/organizations/تنظيم/repositories/new"
fi
