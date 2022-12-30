import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Snackbar,
  Alert
} from '@mui/material'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import {
  changeDefaultSearcherAction,
  changeOpenInNewAction
} from '@/store/modules/setting'
interface IProps {
  children?: ReactNode
  open: boolean
  handleClose: () => void
}
const Setting: FC<IProps> = (props) => {
  const { open, handleClose } = props
  const { setting } = useAppSelector(
    (state) => ({ setting: state.setting }),
    appShallowEqual
  )

  const [defaultSearcher, setDefaultSearcher] = React.useState(setting.default)
  const handleChangeDefaultSearcher = (event: SelectChangeEvent) => {
    setDefaultSearcher(event.target.value)
  }

  const [openInNew, setOpenInNew] = React.useState(setting.openInNew)
  const handleChangeOpenInNew = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOpenInNew(event.target.checked)
  }

  const [showSnakBar, setShowSnakBar] = React.useState(false)

  const dispatch = useAppDispatch()
  const save = () => {
    dispatch(changeDefaultSearcherAction(defaultSearcher))
    dispatch(changeOpenInNewAction(openInNew))
    setShowSnakBar(true)
    handleClose()
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>设置</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox checked={openInNew} onChange={handleChangeOpenInNew} />
            }
            label="在新窗口打开搜索结果"
          />
          <FormControl fullWidth>
            <InputLabel id="defaultSearcherSelect">默认搜索引擎</InputLabel>
            <Select
              labelId="defaultSearcherSelect"
              id="defaultSearcherSelect"
              value={defaultSearcher}
              label="默认搜索引擎"
              onChange={handleChangeDefaultSearcher}
            >
              {setting.list.map((item) => {
                return (
                  <MenuItem value={item.key} key={item.key}>
                    {item.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => save()}>确定</Button>
          <Button onClick={() => handleClose()}>取消</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        onClose={() => setShowSnakBar(false)}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={showSnakBar}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          操作成功
        </Alert>
      </Snackbar>
    </>
  )
}

export default memo(Setting)
