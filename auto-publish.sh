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
    echo "🌐 Repository: https://github.com/تنظيم/mangment"
    echo ""
    echo "💡 لتفعيل GitHub Pages:"
    echo "   1. اذهب إلى: https://github.com/تنظيم/mangment/settings/pages"
    echo "   2. Branch: اختر main"
    echo "   3. Folder: اختر / (root)"
    echo "   4. اضغط Save"
    echo "   5. الموقع سيكون على: https://تنظيم.github.io/mangment/"
    echo ""
    exit 0
else
    echo ""
    echo "❌ فشل الرفع - الـ repository غير موجود بعد"
    echo ""
    echo "📝 يجب إنشاء الـ repository أولاً:"
    echo "   1. اذهب إلى: https://github.com/organizations/تنظيم/repositories/new"
    echo "   2. الاسم: mangment"
    echo "   3. اختر Public أو Private"
    echo "   4. ❌ لا تضع علامة على 'Initialize with README'"
    echo "   5. اضغط 'Create repository'"
    echo ""
    echo "🔄 بعد الإنشاء، نفّذ هذا الأمر مرة أخرى:"
    echo "   ./auto-publish.sh"
    echo ""
    exit 1
fi

