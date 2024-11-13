// 在第一次处理HTML内容时，将内容存储在全局变量中
let processedHtml = '';

function getHtmlContent() {
    // 找到pre标签
    const preElement = document.querySelector('pre');
    
    if (!preElement) {
        console.error('未找到pre标签');
        return;
    }
    
    // 获取HTML内容并解码
    let content = preElement.innerText;
    
    // 解码HTML实体
    content = content
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    
    // 1. 替换html标签
    content = content.replace(/<html>/g, '<html lang="en" xmlns:th="http://www.thymeleaf.org">');
    
    // 2. 在head中插入meta标签和其他资源
    const headContent = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta content="make money online" name="description" />
    <meta property="og:title" content="Earn online, part-time, make money" />
    <meta property="og:description" content="Earn online, part-time, make money" />
    <meta name="keywords" content="Earn online, part-time, make money" />
    <meta property="og:keywords" content="Earn online, part-time, make money" />
    <script src="../js/wow.js?v=1.0.0"></script>
    <th:block th:include="include :: header" />
    <link rel="preload" href="../css/animate.css?v=1.0.0" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <link rel="preload" href="../css/bootstrap.min.css?v=1.0.0" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <link rel="stylesheet" href="../css/custom-pc.min.css?v=1.0.0" />
    <link rel="stylesheet" href="../css/custom-h5.min.css?v=1.0.0" media="screen and (max-width: 768px)" />
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <style>
        * {
            box-sizing: border-box;
        }

        body {
                margin: 0;
                margin-top: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
                margin-left: 0px;
                background-image: initial;
                background-position-x: initial;
                background-position-y: initial;
                background-size: initial;
                background-repeat: initial;
                background-attachment: initial;
                background-origin: initial;
                background-clip: initial;
                background-color: rgb(255, 255, 255);
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 14px;
                color: rgb(0, 0, 0);
                padding-top: 0px;
                padding-right: 0px;
                padding-bottom: 0px;
                padding-left: 0px;
            }

            p {
                margin: 0;
                padding: 0;
            }

            h1, h2, h3, h4, h5, h6 {
                margin: 0;
                padding: 0;
                font-weight: normal;
                font-size: inherit;
            }

        /* 这里将插入新的CSS内容 */
    </style>`;
    
    content = content.replace(/<head>[\s\S]*?<\/head>/, `<head>\n    ${headContent}\n  </head>`);
    
    // 3. 替换图片路径
    content = content.replace(/src="img\//g, 'src="../images/');
    
    // 在第一个div上添加id
    content = content.replace(/<body>\s*<div/, '<body>\n    <div id="app-container"');
    
    // 保存处理后的HTML内容到全局变量
    processedHtml = content;
    console.log('HTML内容已保存:', processedHtml);
    
    // 创建一个临时textarea来复制内容
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    
    function showToast(message) {
        // 创建toast元素
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 10000;
            transition: opacity 0.3s;
        `;
        toast.textContent = message;
        
        // 添加到页面
        document.body.appendChild(toast);
        
        // 2秒后移除
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }
    
    try {
        // 执行复制命令
        document.execCommand('copy');
        
        // 显示Toast提示
        showToast('HTML内容已成功复制到剪贴板！');
        
        // 打印当前所有可能的目标元素
        console.log('查找目标元素...');
        const allTabs = document.querySelectorAll('div[class*="_tab_"]');
        console.log('找到的所有tab元素:', allTabs);
        
        // 找到第二个tab元素（非selected的那个）
        const targetTab = allTabs[1];
        if (targetTab) {
            console.log('准备点击的目标元素:', targetTab);
            
            // 创建并触发点击事件
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: targetTab.getBoundingClientRect().left + 10,
                clientY: targetTab.getBoundingClientRect().top + 10
            });
            
            console.log('触发点击事件');
            targetTab.dispatchEvent(clickEvent);
            
            // 同时尝试点击内部的span元素
            const spanElement = targetTab.querySelector('span');
            if (spanElement) {
                console.log('找到并点击span元素');
                spanElement.dispatchEvent(clickEvent);
            }

            // 添加延时，等待CSS内容加载
            setTimeout(() => {
                // 获取CSS内容
                const preElement = document.querySelector('pre');
                if (preElement) {
                    let cssContent = preElement.innerText;
                    console.log('获取到CSS内容:', cssContent);
                    
                    // 处理CSS中的图片路径
                    cssContent = cssContent.replace(/\.\/img\//g, '../images/');
                    console.log('CSS中的图片路径已更新:', cssContent);
                    
                    // 调试：检查HTML内容
                    console.log('当前HTML内容:', processedHtml);
                    
                    // 在style标签中插入CSS内容
                    const styleEndPos = processedHtml.indexOf('</style>');
                    console.log('style标签位置:', styleEndPos);
                    
                    if (styleEndPos !== -1) {
                        const finalContent = processedHtml.slice(0, styleEndPos) + 
                            '\n\n        /* 新增样式 */\n        ' + 
                            cssContent + 
                            '\n    ' + 
                            processedHtml.slice(styleEndPos);
                        
                        console.log('HTML和CSS合并完成');
                        
                        // 复制合并后的内容
                        const mergedTextarea = document.createElement('textarea');
                        mergedTextarea.value = finalContent;
                        document.body.appendChild(mergedTextarea);
                        mergedTextarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(mergedTextarea);
                        
                        console.log('合并后的内容已复制到剪贴板');
                        showToast('HTML和CSS已合并并复制到剪贴板！');
                        
                        // 更新存储的内容
                        processedHtml = finalContent;
                        
                        // 切换回HTML tab
                        const htmlTab = document.querySelector('div[class="_tab_3lbvx_12"]');
                        if (htmlTab) {
                            console.log('找到HTML tab，准备切换回去');
                            const clickEvent = new MouseEvent('click', {
                                view: window,
                                bubbles: true,
                                cancelable: true
                            });
                            htmlTab.dispatchEvent(clickEvent);
                            console.log('已切换回HTML tab');
                        } else {
                            console.log('未找到HTML tab');
                        }
                    } else {
                        console.error('在HTML中未找到style标签，尝试在head中创建');
                        // 如果没有找到style标签，尝试在head标签结束前插入
                        const headEndPos = processedHtml.indexOf('</head>');
                        if (headEndPos !== -1) {
                            const finalContent = processedHtml.slice(0, headEndPos) + 
                                '\n    <style>\n    ' + 
                                cssContent + 
                                '\n    </style>\n' + 
                                processedHtml.slice(headEndPos);
                            
                            console.log('已创建新的style标签并插入CSS内容');
                            
                            // 复制合并后的内容
                            const mergedTextarea = document.createElement('textarea');
                            mergedTextarea.value = finalContent;
                            document.body.appendChild(mergedTextarea);
                            mergedTextarea.select();
                            document.execCommand('copy');
                            document.body.removeChild(mergedTextarea);
                            
                            console.log('合并后的内容已复制到剪贴板');
                            showToast('HTML和CSS已合并并复制到剪贴板！');
                            
                            // 更新存储的内容
                            processedHtml = finalContent;
                            
                            // 切换回HTML tab
                            const htmlTab = document.querySelector('div[class="_tab_3lbvx_12"]');
                            if (htmlTab) {
                                console.log('找到HTML tab，准备切换回去');
                                const clickEvent = new MouseEvent('click', {
                                    view: window,
                                    bubbles: true,
                                    cancelable: true
                                });
                                htmlTab.dispatchEvent(clickEvent);
                                console.log('已切换回HTML tab');
                            }
                        }
                    }
                } else {
                    console.error('未找到CSS内容');
                }
            }, 500);
        } else {
            console.log('未找到目标tab素');
        }
        
    } catch (err) {
        console.error('操作失败:', err);
        console.error('错误详情:', {
            name: err.name,
            message: err.message,
            stack: err.stack
        });
        showToast('操作失败: ' + err.message);
    }
    
    // 移除临时textarea
    document.body.removeChild(textarea);
    
    // 同时返回内容以便查看
    return content;
}

// 执行函数
getHtmlContent();
