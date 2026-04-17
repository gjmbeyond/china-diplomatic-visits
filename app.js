/**
 * 各国高层访华可视化应用
 * 使用 D3.js + TopoJSON 渲染世界地图
 */

// 全局变量
let svg, path, projection;
let worldData = null;
let currentData = JSON.parse(JSON.stringify(VISIT_DATA));
let selectedCountry = null;

// 颜色比例尺 - 基于访问次数
const colorScale = d3.scaleThreshold()
    .domain([1, 2, 3, 5])
    .range(["#1a2744", "#ef4444", "#dc2626", "#b91c1c", "#7f1d1d"]);

// 初始化
async function init() {
    try {
        // 加载世界地图数据
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        worldData = await response.json();
        
        // 初始化地图
        initMap();
        
        // 更新统计
        updateStats();
        
        // 更新侧边栏
        updateSidebar();
        
        // 初始化编辑器
        initEditor();
        
        console.log('应用初始化完成');
    } catch (error) {
        console.error('初始化失败:', error);
        showError('地图数据加载失败，请检查网络连接');
    }
}

// 初始化地图
function initMap() {
    const container = document.getElementById('map');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 创建SVG
    svg = d3.select('#map')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`);

    // 设置投影 - 使用自然地球投影
    projection = d3.geoNaturalEarth1()
        .scale(width / 5.5)
        .translate([width / 2, height / 2]);

    path = d3.geoPath().projection(projection);

    // 绘制国家
    const countries = topojson.feature(worldData, worldData.objects.countries);
    
    svg.selectAll('path.country')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('fill', d => getCountryColor(d.id))
        .attr('data-id', d => d.id)
        .on('mouseover', handleMouseOver)
        .on('mousemove', handleMouseMove)
        .on('mouseout', handleMouseOut)
        .on('click', handleClick);

    // 添加缩放行为
    const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on('zoom', (event) => {
            svg.selectAll('path').attr('transform', event.transform);
        });

    svg.call(zoom);

    // 窗口大小改变时重新渲染
    window.addEventListener('resize', debounce(() => {
        svg.remove();
        initMap();
    }, 250));
}

// 获取国家颜色
function getCountryColor(countryId) {
    const countryData = currentData[countryId];
    if (!countryData || !countryData.leaders || countryData.leaders.length === 0) {
        return '#1a2744'; // 无数据
    }
    return colorScale(countryData.leaders.length);
}

// 鼠标悬停处理
function handleMouseOver(event, d) {
    const countryData = currentData[d.id];
    if (!countryData || !countryData.leaders || countryData.leaders.length === 0) {
        return;
    }

    const tooltip = document.getElementById('tooltip');
    const countryName = countryData.name;
    const visitCount = countryData.leaders.length;
    
    // 构建提示框内容
    let leadersHtml = '';
    countryData.leaders.forEach(leader => {
        leadersHtml += `
            <div class="tooltip-leader">
                <div class="tooltip-leader-name">${leader.name}</div>
                <div class="tooltip-leader-title">${leader.title}</div>
                <div class="tooltip-leader-date">${formatDate(leader.date)}</div>
            </div>
        `;
    });

    tooltip.innerHTML = `
        <div class="tooltip-country">${countryName}</div>
        <div class="tooltip-visits">访问次数: ${visitCount} 次</div>
        <div class="tooltip-leaders">${leadersHtml}</div>
    `;

    tooltip.classList.add('visible');
    
    // 高亮国家
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('stroke', '#c9a227')
        .attr('stroke-width', 2);
}

// 鼠标移动处理
function handleMouseMove(event) {
    const tooltip = document.getElementById('tooltip');
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = event.pageX + 15;
    let top = event.pageY + 15;
    
    // 防止提示框超出视口
    if (left + tooltipRect.width > window.innerWidth) {
        left = event.pageX - tooltipRect.width - 15;
    }
    if (top + tooltipRect.height > window.innerHeight) {
        top = event.pageY - tooltipRect.height - 15;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

// 鼠标离开处理
function handleMouseOut(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('visible');
    
    // 恢复国家样式
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('stroke', 'rgba(201, 162, 39, 0.3)')
        .attr('stroke-width', 0.5);
}

// 点击处理
function handleClick(event, d) {
    const countryData = currentData[d.id];
    if (countryData && countryData.leaders && countryData.leaders.length > 0) {
        // 可以在这里添加点击后的详细视图
        console.log('点击国家:', countryData.name);
    }
}

// 更新统计
function updateStats() {
    let totalCountries = 0;
    let totalVisits = 0;
    let totalLeaders = 0;

    Object.values(currentData).forEach(country => {
        if (country.leaders && country.leaders.length > 0) {
            totalCountries++;
            totalVisits += country.leaders.length;
            totalLeaders += country.leaders.length;
        }
    });

    // 动画更新数字
    animateNumber('totalCountries', totalCountries);
    animateNumber('totalVisits', totalVisits);
    animateNumber('totalLeaders', totalLeaders);
}

// 数字动画
function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const startValue = parseInt(element.textContent) || 0;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const currentValue = Math.round(startValue + (targetValue - startValue) * easeProgress);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// 更新侧边栏
function updateSidebar() {
    const visitList = document.getElementById('visitList');
    
    // 按访问次数排序
    const sortedCountries = Object.entries(currentData)
        .filter(([_, data]) => data.leaders && data.leaders.length > 0)
        .sort((a, b) => b[1].leaders.length - a[1].leaders.length);

    if (sortedCountries.length === 0) {
        visitList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🗺️</div>
                <div>暂无访问数据</div>
                <div style="font-size: 0.8rem; margin-top: 0.5rem;">点击"编辑数据"添加记录</div>
            </div>
        `;
        return;
    }

    visitList.innerHTML = sortedCountries.map(([code, data]) => {
        const leadersHtml = data.leaders.map(leader => `
            <div class="visit-leader">
                <span class="leader-name">${leader.name}</span>
                <span class="leader-title">${leader.title}</span>
                <span class="leader-date">${formatDate(leader.date)}</span>
            </div>
        `).join('');

        return `
            <div class="visit-item">
                <div class="visit-header">
                    <span class="visit-country">${data.name}</span>
                    <span class="visit-count">${data.leaders.length} 次</span>
                </div>
                <div class="visit-leaders">
                    ${leadersHtml}
                </div>
            </div>
        `;
    }).join('');
}

// 格式化日期
function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 显示错误
function showError(message) {
    console.error(message);
    // 可以添加视觉错误提示
}

// ========== 数据编辑器功能 ==========

// 初始化编辑器
function initEditor() {
    const select = document.getElementById('editorCountrySelect');
    
    // 按地区排序国家列表
    const sortedCountries = Object.entries(currentData)
        .sort((a, b) => a[1].name.localeCompare(b[1].name, 'zh-CN'));

    sortedCountries.forEach(([code, data]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = data.name;
        select.appendChild(option);
    });
}

// 打开数据编辑器
function openDataEditor() {
    document.getElementById('dataEditorModal').classList.add('active');
    // 重置选择
    document.getElementById('editorCountrySelect').value = '';
    document.getElementById('leaderEditorSection').style.display = 'none';
}

// 关闭数据编辑器
function closeDataEditor() {
    document.getElementById('dataEditorModal').classList.remove('active');
}

// 国家选择变化
function onCountrySelect() {
    const select = document.getElementById('editorCountrySelect');
    const code = select.value;
    
    if (!code) {
        document.getElementById('leaderEditorSection').style.display = 'none';
        return;
    }

    selectedCountry = code;
    const countryData = currentData[code];
    
    // 显示领导人编辑区
    document.getElementById('leaderEditorSection').style.display = 'block';
    
    // 渲染领导人列表
    renderLeadersList(countryData.leaders || []);
}

// 渲染领导人列表（编辑器内）
function renderLeadersList(leaders) {
    const container = document.getElementById('leadersList');
    
    if (leaders.length === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); font-size: 0.85rem; text-align: center; padding: 1rem;">暂无访问记录</div>';
        return;
    }

    container.innerHTML = leaders.map((leader, index) => `
        <div class="leader-entry" data-index="${index}">
            <input type="text" class="form-input" placeholder="姓名" value="${leader.name}" data-field="name">
            <input type="text" class="form-input" placeholder="职位" value="${leader.title}" data-field="title">
            <input type="date" class="form-input" value="${leader.date}" data-field="date">
            <button class="btn btn-danger btn-small" onclick="removeLeaderEntry(${index})">删除</button>
        </div>
    `).join('');
}

// 添加领导人条目
function addLeaderEntry() {
    const container = document.getElementById('leadersList');
    const emptyMsg = container.querySelector('div[style*="text-align: center"]');
    if (emptyMsg) emptyMsg.remove();

    const index = container.children.length;
    const entry = document.createElement('div');
    entry.className = 'leader-entry';
    entry.dataset.index = index;
    entry.innerHTML = `
        <input type="text" class="form-input" placeholder="姓名" data-field="name">
        <input type="text" class="form-input" placeholder="职位" data-field="title">
        <input type="date" class="form-input" data-field="date">
        <button class="btn btn-danger btn-small" onclick="removeLeaderEntry(${index})">删除</button>
    `;
    container.appendChild(entry);
}

// 删除领导人条目
function removeLeaderEntry(index) {
    const container = document.getElementById('leadersList');
    const entries = container.querySelectorAll('.leader-entry');
    if (entries[index]) {
        entries[index].remove();
    }
    // 重新索引
    const remaining = container.querySelectorAll('.leader-entry');
    remaining.forEach((entry, i) => {
        entry.dataset.index = i;
        entry.querySelector('button').setAttribute('onclick', `removeLeaderEntry(${i})`);
    });
}

// 保存数据更改
function saveDataChanges() {
    if (!selectedCountry) {
        alert('请先选择一个国家');
        return;
    }

    const container = document.getElementById('leadersList');
    const entries = container.querySelectorAll('.leader-entry');
    const leaders = [];

    entries.forEach(entry => {
        const name = entry.querySelector('[data-field="name"]').value.trim();
        const title = entry.querySelector('[data-field="title"]').value.trim();
        const date = entry.querySelector('[data-field="date"]').value;

        if (name && title && date) {
            leaders.push({ name, title, date });
        }
    });

    // 按日期排序
    leaders.sort((a, b) => new Date(a.date) - new Date(b.date));

    // 更新数据
    currentData[selectedCountry].leaders = leaders;

    // 更新显示
    updateMapColors();
    updateStats();
    updateSidebar();

    // 关闭编辑器
    closeDataEditor();

    // 显示成功提示
    showNotification('数据保存成功！');
}

// 更新地图颜色
function updateMapColors() {
    svg.selectAll('path.country')
        .transition()
        .duration(500)
        .attr('fill', d => getCountryColor(d.id));
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-gold);
        color: var(--bg-color);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== 导入/导出功能 ==========

// 打开导入模态框
function openImportModal() {
    const modal = document.getElementById('importModal');
    const editor = document.getElementById('jsonEditor');
    
    // 显示当前数据
    editor.value = JSON.stringify(currentData, null, 2);
    
    modal.classList.add('active');
}

// 关闭导入模态框
function closeImportModal() {
    document.getElementById('importModal').classList.remove('active');
}

// 复制到剪贴板
function copyToClipboard() {
    const editor = document.getElementById('jsonEditor');
    editor.select();
    document.execCommand('copy');
    showNotification('已复制到剪贴板！');
}

// 保存JSON数据
function saveJsonData() {
    try {
        const editor = document.getElementById('jsonEditor');
        const newData = JSON.parse(editor.value);
        
        // 验证数据格式
        if (typeof newData !== 'object') {
            throw new Error('数据必须是对象格式');
        }

        // 更新数据
        currentData = newData;

        // 更新显示
        updateMapColors();
        updateStats();
        updateSidebar();

        // 关闭模态框
        closeImportModal();

        showNotification('数据导入成功！');
    } catch (error) {
        alert('JSON格式错误: ' + error.message);
    }
}

// 导出数据
function exportData() {
    const dataStr = JSON.stringify(currentData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `china-diplomatic-visits-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('数据已导出！');
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 启动应用
document.addEventListener('DOMContentLoaded', init);
