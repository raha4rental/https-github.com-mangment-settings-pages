#!/bin/bash

# Script to push project to GitHub under "raha4rental" organization
# Usage: ./push-to-github.sh

REPO_NAME="mangment"
ORG_NAME="raha4rental"

echo "🚀 رفع المشروع إلى GitHub..."
echo "📦 اسم المشروع: $REPO_NAME"
echo "🏢 المنظمة: $ORG_NAME"
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' موجود بالفعل"
    read -p "هل تريد تحديثه؟ (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
    else
        echo "تم الإلغاء"
        exit 1
    fi
fi

# Add remote
echo "➕ إضافة remote..."
git remote add origin https://github.com/$ORG_NAME/$REPO_NAME.git

# Ensure we're on main branch
git branch -M main

# Push to GitHub
echo "📤 رفع الملفات إلى GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ تم الرفع بنجاح!"
    echo "🌐 Repository: https://github.com/$ORG_NAME/$REPO_NAME"
    echo "🌐 GitHub Pages: https://$ORG_NAME.github.io/$REPO_NAME/"
    echo "🌐 Custom Domain: https://rahaadmin.com"
    echo ""
    echo "💡 لتفعيل GitHub Pages (إذا لم يكن مفعلاً):"
    echo "   1. اذهب إلى: https://github.com/$ORG_NAME/$REPO_NAME/settings/pages"
    echo "   2. اختر Branch: main و Folder: / (root)"
    echo "   3. اضغط Save"
else
    echo ""
    echo "❌ فشل الرفع. تأكد من:"
    echo "   1. أن الـ repository موجود على GitHub"
    echo "   2. أن لديك صلاحيات الكتابة في المنظمة"
    echo "   3. أنك مسجل دخول بشكل صحيح"
fi

