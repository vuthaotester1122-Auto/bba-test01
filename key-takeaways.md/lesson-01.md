# Khởi tạo Playwirght
    git init Playwright@latest

# Git Config
- config name 

      git config --global user.name "Thao"

- config email

      git config --global user.email "Vuthaotester1122@gmail.com"

- config branch default
     
      git config --global init.defaultBranch main

# SSH key 

- Kiểm tra đã tồn tại ssh key 

      ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

- Lấy nội dung ssh key

      cat~/.ssh/id_rsa.pub

# Push code lên GitHub

- Khởi tạo

      git init

- Add field

      git add . : add tất cả các file
      git add <file> : add file chỉ định

- Liên kết với Repo

      git remote add origin <link ssh repo>

- Commit

      git commit -m"message" : commit với message

- Push code

      git push origin main