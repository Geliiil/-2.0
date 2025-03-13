import pandas as pd
import glob2

#檔案
files = glob2.glob('data/*.csv')

filter= ['觀測時間(month)','最高氣溫(℃)', '最低氣溫(℃)','氣溫(℃)', '降水量(mm)']

#放篩選完的資料
file_folder = []

#清除有空缺資料的月份（列）
def filter_data(filter,files):
    for file in files:
        df = pd.read_csv(file, usecols=[filter[0],filter[1],filter[2],filter[3],filter[4]],encoding='UTF-8')
        data = df[~df.astype(str).apply(lambda x: x.str.contains('/')).any(axis=1)]
        file_folder.append(data)
    #合併
    df = pd.concat(file_folder, ignore_index=True)
    
    return month_filter(df)   
#針對不同月份做個別篩選器
def month_filter(df):
    month_list=['01','02','03','04','05','06','07','08','09','10','11','12']
    month_filter_result =[]
    for m in month_list:
        mask = (df['觀測時間(month)'] == m)
        month_filter_result.append(mask)

    return calculator(month_filter_result,df)
#計算
def calculator(month_filter_result,df):

    mean_PRE=[]
    mean_MAX=[]
    mean_MIN=[]
    mean_ABM=[]

    #先針對降水量的部分算平均
    for m in month_filter_result:
        result = round((pd.to_numeric((df[m][filter[4]])).mean()),2)
        mean_PRE.append(result)
    #先針對最高溫的部分算平均
    for m in month_filter_result:
        result = round((pd.to_numeric((df[m][filter[1]])).mean()),2)
        mean_MAX.append(result)
    #先針對最低氣溫的部分算平均
    for m in month_filter_result:
        result = round((pd.to_numeric((df[m][filter[2]])).mean()),2)
        mean_MIN.append(result)
    #先針對平均氣溫的部分算平均
    for m in month_filter_result:
        result = round((pd.to_numeric((df[m][filter[3]])).mean()),2)
        mean_ABM.append(result)

    return Clim_csv(mean_PRE,mean_MAX,mean_MIN,mean_ABM)

def Clim_csv(mean_PRE,mean_MAX,mean_MIN,mean_ABM):
    Clim_idx=["Prec.","Max.t.","Min.t.","Ab.m.t."]
    Clim_df = pd.DataFrame({
    'JAN': [mean_PRE[0], mean_MAX[0], mean_MIN[0], mean_ABM[0]],
    'FEB': [mean_PRE[1], mean_MAX[1], mean_MIN[1], mean_ABM[1]],
    'MAR': [mean_PRE[2], mean_MAX[2], mean_MIN[2], mean_ABM[2]],
    'APR': [mean_PRE[3], mean_MAX[3], mean_MIN[3], mean_ABM[3]],
    'MAY': [mean_PRE[4], mean_MAX[4], mean_MIN[4], mean_ABM[4]],
    'JUN': [mean_PRE[5], mean_MAX[5], mean_MIN[5], mean_ABM[5]],
    'JUL': [mean_PRE[6], mean_MAX[6], mean_MIN[6], mean_ABM[6]],
    'AUG': [mean_PRE[7], mean_MAX[7], mean_MIN[7], mean_ABM[7]],
    'SEP': [mean_PRE[8], mean_MAX[8], mean_MIN[8], mean_ABM[8]],
    'OCT': [mean_PRE[9], mean_MAX[9], mean_MIN[9], mean_ABM[9]],
    'NOV': [mean_PRE[10], mean_MAX[10], mean_MIN[10], mean_ABM[10]],
    'DEC': [mean_PRE[11], mean_MAX[11], mean_MIN[11],mean_ABM[11]],
    },index=Clim_idx)

    print(Clim_df,"\n")
    #轉出CSV，最後再提示存取路徑
    Clim_df.to_csv("clim.csv", index = True)
    print("執行成功，請至執行黨所在資料夾存查")
    
 
filter_data(filter,files)

