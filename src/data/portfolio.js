const Project = [
    {
    title: "自動照相機資料存取與分析-Python",
    org: "程式",
    summary:"在野生動物經營管理實習小組作業中，我負責撰寫程式碼獲取自動照相機相片資料(Matadata)及分析相關指標。",
    images:[
        "/portfolio-image/wildlife-management.png",
    ], 
    tags: ["Python"],
    link:null,
    link_name:null,
    link_photo:null, 
    co_authors:"蔡宜倫、蔡季珊、黃毓芯、梁姵瑄",
    },
    {
    title: "QGIS地圖繪製",
    org: "QGIS",
    summary:"不管在自己的研究還是課程實習時，需要製作地圖或地理資訊資料分析都會使用QGIS。曾做過樣區地圖、平均降雨圖與衛星影像圖。",
    images:[
        "/portfolio-image/嘉明湖.jpeg",
    ], 
    link:null,
    link_name:null, 
    link_photo:null,
    tags: ["QGIS"],
    co_authors:"蔡宜倫",
    },
    {
    title: "地理資訊資料獲取與分析-GEE",
    org: "GEE",
    summary:"在遙測實習小組期末報告中，我負責使用GEE獲取樣區資料與指標計算，並利用R進行統計分析。雖然在GEE操作部分很多都仰賴AI的知識，但過程中還是學到很多JavaScript在GEE平台的使用邏輯，對於當初沒學過JavaScript的我來說，這過程讓我學會如何撰寫簡單的JavaScript語法，並且也提升自己在其他領域的實作能力（比如網頁設計的JavaScript撰寫）。",
    images:[
        "/portfolio-image/GEE.png",
    ], 
    link:null,
    link_name:null, 
    link_photo:null,
    tags: ["GEE","AI","JavaScript"],
    co_authors:"蔡宜倫、蕭卉函、黃毓芯、邱沛淳",
    },
    {
    title: "機器學習實例-Python",
    org: "ML",
    summary:"在物聯網與大數據概論作業中，我使用機器學習進行預測手機價格範圍之特徵選擇和預測建模，並評估不同特徵選擇方法對預測能力的影響。也使用XGBoost回歸模型來預測目標變數，並對比幾種常見的特徵選擇方法，包括基於相關性分析的特徵選擇、RFE (遞歸特徵消除) 和Boruta算法。為了解釋特徵對於模型預測影響程度，使用SHAP (Shapley值) 算法，這是一種基於博弈理論的解釋方法，有助於理解篩選後的特徵對模型預測的影響。此作業分析過程都用Python撰寫。",
    images:[
        "/portfolio-image/機器學習.png",
    ], 
    link:"https://docs.google.com/document/d/1v-pKIUCKzVvh3bJ7DrfpBeY800XMabOxpGx85_BDiw8/edit?usp=sharing",
    link_name:"完整內容",
    link_photo:"/icon/open-link-.png",
    tags: ["Python","機器學習","模型建模"],
    co_authors:"蔡宜倫"
    },
    {
    title: "生態氣候圖套件修改延伸-R",
    org: "R",
    summary:"為了簡易CODIS氣候觀測資料前處理與更改生態氣候圖版面排版，將前處理過程整合至 R Script 中，並提取 climatol package 中的 diagwl function 修改程式碼、存成新檔與改名，與前處理整合使用。",
    images:[
        "/portfolio-image/生態氣候圖.png",
    ],
    link:"https://github.com/Geliiil/climate_diagram_modify.git",
    link_name:"完整內容", 
    link_photo:"/icon/open-link-.png",
    tags: ["R"],
    co_authors:"蔡宜倫",
    },
    {
    title: "枯落物動態研究",
    org: "Python Data analysis",
    summary:"枯落物動態研究是我正在執行的研究方向，希望可以從枯落物中窺看森林、植物社會的運作模式。枯落物是植物在這世界上不斷留存下來的痕跡，也是在環境中不斷注入新能量的來源。",
    images:[
        "/portfolio-image/枯落物海報.png",
    ], 
    link:null,
    link_name:null,
    link_photo:null, 
    tags: ["枯落物動態"],
    co_authors:"蔡宜倫",
    },
    {
    title: "歌曲主題分類-Discord Bots實作",
    org: "Discord Bots",
    summary:"在物聯網期末小組作業中，我負責撰寫爬蟲程式碼爬取歌曲與相關資料，小組其他成員執行資料前處理與模型訓練，我也負責撰寫 Discord Bot 與其他資料分析，將使用者情緒轉換成歌曲提供並播放給使用者。",
    images:[
        "/portfolio-image/Discord.png",
    ],
    link:null,
    link_name:null,
    link_photo:null,  
    tags: ["Python","Discord Bots"],
    co_authors:"蔡宜倫、郭峻維、黃珮筠",
    },
];

export default Project;