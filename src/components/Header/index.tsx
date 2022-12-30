import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  Container,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar
} from '@mui/material'
import { ArrowBack, Settings } from '@mui/icons-material'
import SettingDialog from '@/components/SettingDialog'

interface IProps {
  children?: ReactNode
}
const Header: FC<IProps> = () => {
  const [openSetting, setOpenSetting] = React.useState(false)
  const handleClose = () => {
    setOpenSetting((current) => !current)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href="https://www.wangxinlei.cn"
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                搜索
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpenSetting(true)}
                sx={{ mr: 2 }}
              >
                <Settings />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <SettingDialog
        open={openSetting}
        handleClose={handleClose}
      ></SettingDialog>
    </>
  )
}

export default memo(Header)
