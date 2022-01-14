# Cloudinary

<div align="center" >
    <img width="350px" src="public/img/team.png"/>
</div>

**Đây là hệ thống dựa trên API của cloudinary để tạo ra một số API nhằm để triển khai lưu trữ file(img, video, ...)**

<div align="center" >
    <a href="https://cloudinary-nodejs-production.up.railway.app/"><b>Website Demo</b></a>
</div>

## Giới thiệu API
Hiện tại đang có 4 API (cập nhật thêm sau)

- `api/upload` : dùng để upload file image lên ***storage***
- `api/upload-video` : dùng để upload file video lên ***storage***
- `api/delete` : dùng để xóa file image theo ***Public ID***
- `api/delete-video` : dùng để xóa file video theo ***Public ID***

## Cách sử dụng

- Đầu tiên bạn hãy đọc file [`.env sample`](/.env%20sample) và tạo một file `.env` thêm các key cần thiết như `CLOUD_NAME`, `API_KEY`, `API_SECRET`, đang kí và lấy tại [`Cloudinary`](https://cloudinary.com/)
- Mặc định website demo đang lưu vào storage của mình.
- Ở đây mình dùng fetch để gọi API.

---

- Chi tiết cách sử dụng bạn có thể xem tại [`Đây`](/public/js/main.js)