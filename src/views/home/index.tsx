import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Search } from '@mui/icons-material'
import {
  FormControl,
  InputAdornment,
  Box,
  Button,
  OutlinedInput
} from '@mui/material'
import { appShallowEqual, useAppSelector } from '@/store'
import type { Searcher } from '@/store/modules/setting'
import { CheckCircleOutline } from '@mui/icons-material'
interface IProps {
  children?: ReactNode
}
const Home: FC<IProps> = () => {
  const { setting } = useAppSelector(
    (state) => ({ setting: state.setting }),
    appShallowEqual
  )
  const [keyword, setKeyword] = React.useState('')
  const searchKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const doSearch = (searcher?: Searcher) => {
    if (!searcher) {
      searcher = setting.list.find((t) => t.key == setting.default)
    }
    if (!searcher) {
      return
    }
    window.open(
      searcher.url.replace('${keyword}', encodeURIComponent(keyword)),
      setting.openInNew ? '_black' : '_self'
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        height: 'calc(100vh - 65px)'
      }}
    >
      <h1>Search.wangxinlei.cn</h1>
      <FormControl sx={{ m: 3 }} className="contentWidth" variant="outlined">
        <OutlinedInput
          value={keyword}
          placeholder="请输入关键字进行搜索"
          onKeyDown={(event) => (event.code == 'Enter' ? doSearch() : null)}
          onChange={searchKeyOnChange}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
      <div
        className="contentWidth"
        style={{
          display: 'flex',
          flexFlow: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20vh'
        }}
      >
        {setting.list.map((item) => {
          return (
            <span key={item.key}>
              <Button
                variant={item.variant ?? 'contained'}
                color={item.color}
                onClick={() => doSearch(item)}
                startIcon={
                  setting.default == item.key ? <CheckCircleOutline /> : null
                }
              >
                {item.name}
              </Button>
              {'\n'}
            </span>
          )
        })}
      </div>
    </Box>
  )
}

export default memo(Home)
