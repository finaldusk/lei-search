import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Searcher {
  key: string
  name: string
  url: string
  variant?: 'text' | 'outlined' | 'contained'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  icon?: string
}

const searchers: Array<Searcher> = [
  {
    key: 'baidu',
    name: '百度',
    url: 'https://www.baidu.com/s?wd=${keyword}',
    icon: 'baidu'
  },
  {
    key: 'google',
    name: '谷歌',
    url: 'https://www.google.com/search?q=${keyword}',
    icon: 'google',
    variant: 'outlined'
  },
  {
    key: 'bingcn',
    name: '必应中国',
    url: 'https://cn.bing.com/search?q=${keyword}',
    icon: 'bing',
    variant: 'outlined',
    color: 'secondary'
  },
  {
    key: 'bing',
    name: '必应',
    url: 'https://cn.bing.com/search?q=${keyword}&ensearch=1',
    icon: 'bing'
  },
  {
    key: 'bilibili',
    name: '哔哩哔哩',
    url: 'https://search.bilibili.com/all?keyword=${keyword}',
    icon: 'bilibili',
    color: 'error'
  },
  {
    key: 'zhihu',
    name: '知乎',
    url: 'https://www.zhihu.com/search?q=${keyword}',
    icon: 'zhihu'
  },
  {
    key: 'minecraft',
    name: '我的世界',
    url: 'https://minecraft.fandom.com/zh/wiki/${keyword}',
    icon: 'minecraft',
    color: 'success'
  },
  {
    key: 'taobao',
    name: '淘宝',
    url: 'https://s.taobao.com/search?q=${keyword}',
    icon: 'taobao',
    color: 'warning'
  },
  {
    key: 'jd',
    name: '京东',
    url: 'https://search.jd.com/Search?keyword=${keyword}',
    icon: 'jd',
    color: 'error'
  }
]

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    list: searchers,
    default: localStorage.getItem('default') || searchers[0].key,
    openInNew: localStorage.getItem('openInNew') == 'false' ? false : true
  },
  reducers: {
    changeDefaultSearcherAction(state, { payload }: PayloadAction<string>) {
      state.default = payload
      localStorage.setItem('default', payload)
    },
    changeOpenInNewAction(state, { payload }: PayloadAction<boolean>) {
      state.openInNew = payload
      localStorage.setItem('openInNew', payload ? 'true' : 'false')
    }
  }
})

export const { changeDefaultSearcherAction, changeOpenInNewAction } =
  settingSlice.actions
export default settingSlice.reducer
