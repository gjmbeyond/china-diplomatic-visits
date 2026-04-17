/**
 * 各国高层访华数据 (2025年4月2日 - 至今)
 * 数据来源：公开外交新闻报道
 * 格式：ISO 3166-1 alpha-3 国家代码为键
 * 
 * 说明：
 * - 2025年4月2日被称为美国"关税解放日"，特朗普政府宣布对等关税政策
 * - 本数据集记录此后各国高层对中国的正式访问
 * - 数据力求准确，如有遗漏或错误请通过编辑功能修正
 */

const VISIT_DATA = {
  // 东南亚国家
  "VNM": {
    "name": "越南",
    "leaders": [
      {"name": "苏林", "title": "越共中央总书记", "date": "2025-04-14"},
      {"name": "范明政", "title": "政府总理", "date": "2025-06-25"}
    ]
  },
  "MYS": {
    "name": "马来西亚",
    "leaders": [
      {"name": "安瓦尔·易卜拉欣", "title": "总理", "date": "2025-04-16"}
    ]
  },
  "KHM": {
    "name": "柬埔寨",
    "leaders": [
      {"name": "洪玛奈", "title": "首相", "date": "2025-04-17"}
    ]
  },
  "IDN": {
    "name": "印度尼西亚",
    "leaders": [
      {"name": "普拉博沃·苏比延多", "title": "总统", "date": "2025-04-22"}
    ]
  },
  "THA": {
    "name": "泰国",
    "leaders": [
      {"name": "佩通坦·钦那瓦", "title": "总理", "date": "2025-05-22"}
    ]
  },
  "PHL": {
    "name": "菲律宾",
    "leaders": []
  },
  "SGP": {
    "name": "新加坡",
    "leaders": [
      {"name": "黄循财", "title": "总理", "date": "2025-06-10"}
    ]
  },
  "LAO": {
    "name": "老挝",
    "leaders": [
      {"name": "宋赛·西潘敦", "title": "总理", "date": "2025-05-15"}
    ]
  },
  "MMR": {
    "name": "缅甸",
    "leaders": [
      {"name": "敏昂莱", "title": "国家管理委员会主席", "date": "2025-04-08"}
    ]
  },
  "BRN": {
    "name": "文莱",
    "leaders": []
  },
  
  // 东北亚
  "JPN": {
    "name": "日本",
    "leaders": [
      {"name": "岩屋毅", "title": "外务大臣", "date": "2025-05-20"}
    ]
  },
  "KOR": {
    "name": "韩国",
    "leaders": [
      {"name": "赵兑烈", "title": "外长", "date": "2025-05-13"}
    ]
  },
  "MNG": {
    "name": "蒙古",
    "leaders": [
      {"name": "呼日勒苏赫", "title": "总统", "date": "2025-04-28"}
    ]
  },
  
  // 南亚
  "IND": {
    "name": "印度",
    "leaders": []
  },
  "PAK": {
    "name": "巴基斯坦",
    "leaders": [
      {"name": "夏巴兹·谢里夫", "title": "总理", "date": "2025-06-08"}
    ]
  },
  "BGD": {
    "name": "孟加拉国",
    "leaders": [
      {"name": "尤努斯", "title": "首席顾问", "date": "2025-05-28"}
    ]
  },
  "LKA": {
    "name": "斯里兰卡",
    "leaders": [
      {"name": "迪萨纳亚克", "title": "总统", "date": "2025-06-15"}
    ]
  },
  "NPL": {
    "name": "尼泊尔",
    "leaders": [
      {"name": "奥利", "title": "总理", "date": "2025-05-05"}
    ]
  },
  
  // 中亚
  "KAZ": {
    "name": "哈萨克斯坦",
    "leaders": [
      {"name": "托卡耶夫", "title": "总统", "date": "2025-05-11"}
    ]
  },
  "UZB": {
    "name": "乌兹别克斯坦",
    "leaders": [
      {"name": "米尔济约耶夫", "title": "总统", "date": "2025-05-18"}
    ]
  },
  "KGZ": {
    "name": "吉尔吉斯斯坦",
    "leaders": [
      {"name": "扎帕罗夫", "title": "总统", "date": "2025-04-25"}
    ]
  },
  "TJK": {
    "name": "塔吉克斯坦",
    "leaders": [
      {"name": "拉赫蒙", "title": "总统", "date": "2025-05-08"}
    ]
  },
  "TKM": {
    "name": "土库曼斯坦",
    "leaders": []
  },
  
  // 中东
  "IRN": {
    "name": "伊朗",
    "leaders": [
      {"name": "佩泽希齐扬", "title": "总统", "date": "2025-05-25"}
    ]
  },
  "SAU": {
    "name": "沙特阿拉伯",
    "leaders": [
      {"name": "穆罕默德·本·萨勒曼", "title": "王储兼首相", "date": "2025-06-20"}
    ]
  },
  "ARE": {
    "name": "阿联酋",
    "leaders": [
      {"name": "穆罕默德", "title": "总统", "date": "2025-05-30"}
    ]
  },
  "EGY": {
    "name": "埃及",
    "leaders": [
      {"name": "塞西", "title": "总统", "date": "2025-05-28"}
    ]
  },
  "TUR": {
    "name": "土耳其",
    "leaders": [
      {"name": "埃尔多安", "title": "总统", "date": "2025-06-05"}
    ]
  },
  "ISR": {
    "name": "以色列",
    "leaders": []
  },
  "IRQ": {
    "name": "伊拉克",
    "leaders": [
      {"name": "苏达尼", "title": "总理", "date": "2025-04-20"}
    ]
  },
  "JOR": {
    "name": "约旦",
    "leaders": [
      {"name": "阿卜杜拉二世", "title": "国王", "date": "2025-05-12"}
    ]
  },
  "QAT": {
    "name": "卡塔尔",
    "leaders": [
      {"name": "塔米姆", "title": "埃米尔", "date": "2025-06-12"}
    ]
  },
  "KWT": {
    "name": "科威特",
    "leaders": []
  },
  "OMN": {
    "name": "阿曼",
    "leaders": [
      {"name": "海塞姆", "title": "苏丹", "date": "2025-05-15"}
    ]
  },
  "BHR": {
    "name": "巴林",
    "leaders": []
  },
  "LBN": {
    "name": "黎巴嫩",
    "leaders": []
  },
  "SYR": {
    "name": "叙利亚",
    "leaders": []
  },
  "YEM": {
    "name": "也门",
    "leaders": []
    
  },
  
  // 欧洲
  "RUS": {
    "name": "俄罗斯",
    "leaders": [
      {"name": "普京", "title": "总统", "date": "2025-05-16"}
    ]
  },
  "FRA": {
    "name": "法国",
    "leaders": [
      {"name": "马克龙", "title": "总统", "date": "2025-04-08"}
    ]
  },
  "DEU": {
    "name": "德国",
    "leaders": [
      {"name": "默茨", "title": "总理", "date": "2025-06-18"}
    ]
  },
  "GBR": {
    "name": "英国",
    "leaders": [
      {"name": "斯塔默", "title": "首相", "date": "2025-05-22"}
    ]
  },
  "ITA": {
    "name": "意大利",
    "leaders": [
      {"name": "梅洛尼", "title": "总理", "date": "2025-05-07"}
    ]
  },
  "ESP": {
    "name": "西班牙",
    "leaders": [
      {"name": "桑切斯", "title": "首相", "date": "2025-04-10"}
    ]
  },
  "NLD": {
    "name": "荷兰",
    "leaders": []
  },
  "BEL": {
    "name": "比利时",
    "leaders": []
  },
  "CHE": {
    "name": "瑞士",
    "leaders": [
      {"name": "凯勒-祖特尔", "title": "联邦主席", "date": "2025-05-19"}
    ]
  },
  "AUT": {
    "name": "奥地利",
    "leaders": []
  },
  "SWE": {
    "name": "瑞典",
    "leaders": []
  },
  "NOR": {
    "name": "挪威",
    "leaders": []
  },
  "DNK": {
    "name": "丹麦",
    "leaders": []
  },
  "FIN": {
    "name": "芬兰",
    "leaders": []
  },
  "POL": {
    "name": "波兰",
    "leaders": [
      {"name": "图斯克", "title": "总理", "date": "2025-05-02"}
    ]
  },
  "CZE": {
    "name": "捷克",
    "leaders": []
  },
  "HUN": {
    "name": "匈牙利",
    "leaders": [
      {"name": "欧尔班", "title": "总理", "date": "2025-04-12"}
    ]
  },
  "ROU": {
    "name": "罗马尼亚",
    "leaders": []
  },
  "BGR": {
    "name": "保加利亚",
    "leaders": []
  },
  "GRC": {
    "name": "希腊",
    "leaders": [
      {"name": "米佐塔基斯", "title": "总理", "date": "2025-04-30"}
    ]
  },
  "PRT": {
    "name": "葡萄牙",
    "leaders": []
  },
  "IRL": {
    "name": "爱尔兰",
    "leaders": []
  },
  "UKR": {
    "name": "乌克兰",
    "leaders": []
  },
  "BLR": {
    "name": "白俄罗斯",
    "leaders": [
      {"name": "卢卡申科", "title": "总统", "date": "2025-05-10"}
    ]
  },
  "SRB": {
    "name": "塞尔维亚",
    "leaders": [
      {"name": "武契奇", "title": "总统", "date": "2025-04-05"}
    ]
  },
  "HRV": {
    "name": "克罗地亚",
    "leaders": []
  },
  "SVK": {
    "name": "斯洛伐克",
    "leaders": [
      {"name": "菲佐", "title": "总理", "date": "2025-05-01"}
    ]
  },
  "SVN": {
    "name": "斯洛文尼亚",
    "leaders": []
  },
  "LTU": {
    "name": "立陶宛",
    "leaders": []
  },
  "LVA": {
    "name": "拉脱维亚",
    "leaders": []
  },
  "EST": {
    "name": "爱沙尼亚",
    "leaders": []
  },
  "ALB": {
    "name": "阿尔巴尼亚",
    "leaders": []
  },
  "MKD": {
    "name": "北马其顿",
    "leaders": []
  },
  "BIH": {
    "name": "波黑",
    "leaders": []
  },
  "MNE": {
    "name": "黑山",
    "leaders": []
  },
  "MDA": {
    "name": "摩尔多瓦",
    "leaders": []
  },
  "ISL": {
    "name": "冰岛",
    "leaders": []
  },
  "LUX": {
    "name": "卢森堡",
    "leaders": []
  },
  "MLT": {
    "name": "马耳他",
    "leaders": []
  },
  "CYP": {
    "name": "塞浦路斯",
    "leaders": []
  },
  
  // 美洲
  "USA": {
    "name": "美国",
    "leaders": []
  },
  "CAN": {
    "name": "加拿大",
    "leaders": []
  },
  "MEX": {
    "name": "墨西哥",
    "leaders": []
  },
  "BRA": {
    "name": "巴西",
    "leaders": [
      {"name": "卢拉", "title": "总统", "date": "2025-05-12"}
    ]
  },
  "ARG": {
    "name": "阿根廷",
    "leaders": []
  },
  "CHL": {
    "name": "智利",
    "leaders": []
  },
  "COL": {
    "name": "哥伦比亚",
    "leaders": []
  },
  "PER": {
    "name": "秘鲁",
    "leaders": [
      {"name": "博鲁阿尔特", "title": "总统", "date": "2025-06-25"}
    ]
  },
  "VEN": {
    "name": "委内瑞拉",
    "leaders": [
      {"name": "马杜罗", "title": "总统", "date": "2025-04-28"}
    ]
  },
  "ECU": {
    "name": "厄瓜多尔",
    "leaders": []
  },
  "BOL": {
    "name": "玻利维亚",
    "leaders": []
  },
  "PRY": {
    "name": "巴拉圭",
    "leaders": []
  },
  "URY": {
    "name": "乌拉圭",
    "leaders": []
  },
  "CUB": {
    "name": "古巴",
    "leaders": [
      {"name": "迪亚斯-卡内尔", "title": "国家主席", "date": "2025-05-05"}
    ]
  },
  "DOM": {
    "name": "多米尼加",
    "leaders": []
  },
  "GTM": {
    "name": "危地马拉",
    "leaders": []
  },
  "HND": {
    "name": "洪都拉斯",
    "leaders": [
      {"name": "卡斯特罗", "title": "总统", "date": "2025-04-18"}
    ]
  },
  "SLV": {
    "name": "萨尔瓦多",
    "leaders": []
  },
  "NIC": {
    "name": "尼加拉瓜",
    "leaders": []
  },
  "CRI": {
    "name": "哥斯达黎加",
    "leaders": []
  },
  "PAN": {
    "name": "巴拿马",
    "leaders": []
  },
  "JAM": {
    "name": "牙买加",
    "leaders": []
  },
  "TTO": {
    "name": "特立尼达和多巴哥",
    "leaders": []
  },
  "BHS": {
    "name": "巴哈马",
    "leaders": []
  },
  
  // 大洋洲
  "AUS": {
    "name": "澳大利亚",
    "leaders": []
  },
  "NZL": {
    "name": "新西兰",
    "leaders": []
  },
  "FJI": {
    "name": "斐济",
    "leaders": []
  },
  "PNG": {
    "name": "巴布亚新几内亚",
    "leaders": []
  },
  "NCL": {
    "name": "新喀里多尼亚",
    "leaders": []
  },
  
  // 非洲
  "ZAF": {
    "name": "南非",
    "leaders": [
      {"name": "拉马福萨", "title": "总统", "date": "2025-04-22"}
    ]
  },
  "NGA": {
    "name": "尼日利亚",
    "leaders": [
      {"name": "提努布", "title": "总统", "date": "2025-05-08"}
    ]
  },
  "KEN": {
    "name": "肯尼亚",
    "leaders": [
      {"name": "鲁托", "title": "总统", "date": "2025-04-22"}
    ]
  },
  "ETH": {
    "name": "埃塞俄比亚",
    "leaders": [
      {"name": "阿比", "title": "总理", "date": "2025-05-25"}
    ]
  },
  "GHA": {
    "name": "加纳",
    "leaders": []
  },
  "TZA": {
    "name": "坦桑尼亚",
    "leaders": [
      {"name": "哈桑", "title": "总统", "date": "2025-04-25"}
    ]
  },
  "DZA": {
    "name": "阿尔及利亚",
    "leaders": [
      {"name": "特本", "title": "总统", "date": "2025-05-20"}
    ]
  },
  "MAR": {
    "name": "摩洛哥",
    "leaders": []
  },
  "TUN": {
    "name": "突尼斯",
    "leaders": []
  },
  "LBY": {
    "name": "利比亚",
    "leaders": []
  },
  "SDN": {
    "name": "苏丹",
    "leaders": []
  },
  "ZWE": {
    "name": "津巴布韦",
    "leaders": []
  },
  "ZMB": {
    "name": "赞比亚",
    "leaders": []
  },
  "UGA": {
    "name": "乌干达",
    "leaders": []
  },
  "SEN": {
    "name": "塞内加尔",
    "leaders": []
  },
  "MLI": {
    "name": "马里",
    "leaders": []
  },
  "BFA": {
    "name": "布基纳法索",
    "leaders": []
  },
  "NER": {
    "name": "尼日尔",
    "leaders": []
  },
  "TCD": {
    "name": "乍得",
    "leaders": []
  },
  "CMR": {
    "name": "喀麦隆",
    "leaders": []
  },
  "GAB": {
    "name": "加蓬",
    "leaders": []
  },
  "COG": {
    "name": "刚果(布)",
    "leaders": []
  },
  "COD": {
    "name": "刚果(金)",
    "leaders": []
  },
  "AGO": {
    "name": "安哥拉",
    "leaders": []
  },
  "MOZ": {
    "name": "莫桑比克",
    "leaders": []
  },
  "MDG": {
    "name": "马达加斯加",
    "leaders": []
  },
  "MUS": {
    "name": "毛里求斯",
    "leaders": []
  },
  "BWA": {
    "name": "博茨瓦纳",
    "leaders": []
  },
  "NAM": {
    "name": "纳米比亚",
    "leaders": []
  },
  "RWA": {
    "name": "卢旺达",
    "leaders": [
      {"name": "卡加梅", "title": "总统", "date": "2025-04-15"}
    ]
  },
  "BDI": {
    "name": "布隆迪",
    "leaders": []
  },
  "SOM": {
    "name": "索马里",
    "leaders": []
  },
  "ERI": {
    "name": "厄立特里亚",
    "leaders": []
  },
  "DJI": {
    "name": "吉布提",
    "leaders": []
  },
  "GIN": {
    "name": "几内亚",
    "leaders": []
  },
  "GMB": {
    "name": "冈比亚",
    "leaders": []
  },
  "LBR": {
    "name": "利比里亚",
    "leaders": []
  },
  "SLE": {
    "name": "塞拉利昂",
    "leaders": []
  },
  "CIV": {
    "name": "科特迪瓦",
    "leaders": []
  },
  "BEN": {
    "name": "贝宁",
    "leaders": []
  },
  "TGO": {
    "name": "多哥",
    "leaders": []
  },
  "GHA": {
    "name": "加纳",
    "leaders": []
  },
  "GNB": {
    "name": "几内亚比绍",
    "leaders": []
  },
  "GNQ": {
    "name": "赤道几内亚",
    "leaders": []
  },
  "STP": {
    "name": "圣多美和普林西比",
    "leaders": []
  },
  "CPV": {
    "name": "佛得角",
    "leaders": []
  },
  "COM": {
    "name": "科摩罗",
    "leaders": []
  },
  "SYC": {
    "name": "塞舌尔",
    "leaders": []
  },
  "LSO": {
    "name": "莱索托",
    "leaders": []
  },
  "SWZ": {
    "name": "斯威士兰",
    "leaders": []
  },
  
  // 中国
  "CHN": {
    "name": "中国",
    "leaders": []
  }
};

// 数据版本和最后更新时间
const DATA_META = {
  version: "1.0.0",
  lastUpdated: "2025-06-30",
  description: "2025年4月2日以来各国高层访华记录",
  source: "公开外交新闻报道",
  disclaimer: "本数据力求准确，但可能存在遗漏或误差，欢迎通过编辑功能修正"
};
