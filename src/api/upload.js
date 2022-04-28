import { post, get, upload } from '@/utils/request'

// 上传头像裁剪图片服务接口
export const ServeUploadAvatar = data => {
  return post('/api/v1/upload/avatar', data)
}

// 查询大文件拆分信息服务接口
export const ServeFindFileSplitInfo = (data = {}) => {
  return post('http://localhost:8002/api/file/upload/prepare', data)
}

export const ServeUploadFile = (data = {}, options = {}) => {
  return upload('http://localhost:8002/api/file/upload/single', data, options)
}

// 文件拆分上传服务接口
export const ServeFileSubareaUpload = (data = {}, options = {}) => {
  return upload('http://localhost:8002/api/file/upload/part', data, options)
}
