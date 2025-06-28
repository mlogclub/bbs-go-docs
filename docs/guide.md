# BBS-GO Installation and User Guide

## 📋 What is BBS-GO

BBS-GO is a modern community forum system with the following features:

- 🚀 **High Performance**: Capable of handling large numbers of concurrent users
- 📱 **Responsive Design**: Supports mobile phones, tablets, computers and other devices
- 🎨 **Beautiful Interface**: Modern user interface design
- 🛠️ **Complete Features**: Supports posting, commenting, private messaging, points system, etc.
- 🔒 **Security and Stability**: Built-in protection mechanisms, reliable data security

## 🎯 System Requirements

Before starting the installation, please ensure your server or computer meets the following requirements:

- **Operating System**: Windows 7+, macOS 10.12+, Linux (Ubuntu 16+/CentOS 7+)
- **Memory**: At least 2GB RAM (recommended 4GB+)
- **Disk Space**: At least 1GB available space
- **Database**: MySQL 5.8+ or MariaDB 10.2+

## 📥 Step 1: Download System Files

### 1.1 Get Download URL

Visit the project release page: [https://github.com/mlogclub/bbs-go/releases](https://github.com/mlogclub/bbs-go/releases)

### 1.2 Select Corresponding Version

Choose the version corresponding to your operating system:

| Operating System    | File Name                     |
| ------------------- | ----------------------------- |
| Windows 64-bit      | `bbs-go-windows-amd64.zip`   |
| Windows 32-bit      | `bbs-go-windows-386.zip`     |
| macOS Intel Chip    | `bbs-go-macos-amd64.zip`     |
| macOS Apple Chip    | `bbs-go-macos-arm64.zip`     |
| Linux 64-bit        | `bbs-go-linux-amd64.zip`     |
| Linux 32-bit        | `bbs-go-linux-386.zip`       |

**How to determine your system type:**

**Windows Users:**

1. Right-click "This PC" or "My Computer"
2. Select "Properties"
3. Check "System type" - choose amd64 version for 64-bit, 386 version for 32-bit

**macOS Users:**

1. Click the Apple menu in the upper left corner
2. Select "About This Mac"
3. Choose `macos-amd64` for Macs before 2020, `macos-arm64` for M1/M2 chips after 2020

**Linux Users:**

```bash
# Execute the following command in terminal to check system architecture
uname -m
# Output x86_64 choose linux-amd64
# Output i386 or i686 choose linux-386
```

### 1.3 Download File

Click the corresponding version file name to start downloading, save the file to your desired directory (recommend creating a dedicated folder).

## 🗄️ Step 2: Prepare Database

BBS-GO requires a MySQL database to store data.

### 2.1 Install MySQL

**Windows Users:**

1. Visit [MySQL Official Website](https://dev.mysql.com/downloads/mysql/)
2. Download MySQL Installer
3. Run the installer, select "Server only" installation type
4. Set root user password (please remember this password)

**macOS Users:**

1. Visit [MySQL Official Website](https://dev.mysql.com/downloads/mysql/)
2. Download the macOS DMG file
3. Double-click to install, set root password

**Linux Users (Ubuntu/Debian):**

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

**Linux Users (CentOS/RHEL):**

```bash
sudo yum install mysql-server
sudo systemctl start mysqld
sudo mysql_secure_installation
```

### 2.2 Create Database

1. Open MySQL command line tool or use graphical tools (such as phpMyAdmin, Navicat)
2. Create database:

```sql
CREATE DATABASE bbsgo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Create database user (optional, you can also use root user):

```sql
CREATE USER 'bbsgo'@'localhost' IDENTIFIED BY 'YourPassword';
GRANT ALL PRIVILEGES ON bbsgo_db.* TO 'bbsgo'@'localhost';
FLUSH PRIVILEGES;
```

## 🚀 Step 3: Start System and Installation Guide

### 3.1 Extract and Run Program

1. Extract the downloaded zip file to your desired directory
2. After extraction, you will get a folder containing program files

**Windows Users:**

- Find the extracted `bbs-go.exe` file
- Double-click to run the file

**macOS/Linux Users:**

1. Open terminal
2. Navigate to the extracted folder
3. Add executable permissions to the program file:

```bash
chmod +x bbs-go
```

4. Run the program:

```bash
./bbs-go
```

### 3.2 Use Installation Guide

After the program starts for the first time, it will automatically enter installation guide mode:

1. **Check startup status**: After the program starts, you will see output similar to the following:

```text
Now listening on:
> Network:  http://localhost:8082
> Local:    http://localhost:8082
Application started. Press CTRL+C to shut down.
```

2. **Access installation page**:

   - Open browser
   - Visit `http://localhost:8082/install`
   - If installing on a server, replace `localhost` with the server's IP address

3. **Complete installation guide**: Follow the page prompts to complete the following steps:

   **Step 1: Database Configuration**

   - Database type: Select MySQL
   - Database host: Enter `your database address, e.g.: localhost`
   - Database port: Enter `your database port, usually 3306`
   - Database name: Enter `bbsgo_db`
   - Username: Enter `your database username, e.g.: root`
   - Password: Enter the database password you set in step 2
   - Click "Test Connection" to ensure successful connection

   **Step 2: Website Basic Information**

   - Website name: Enter your forum name
   - Website description: Enter forum introduction
   - Website keywords: Enter relevant keywords

   **Step 3: Administrator Account**

   - Administrator username: Set administrator login username
   - Administrator password: Set administrator login password (please remember)
   - Confirm password: Re-enter password

   **Step 4: Complete Installation**

   - Check all configuration information
   - Click "Start Installation" button
   - Wait for the system to automatically create database tables and initialize data
   - After seeing "Installation Successful" prompt, installation is complete

### 3.3 After Installation

After successful installation, the system will automatically:

- Create configuration file `bbs-go.yaml`
- Create necessary directory structure
- Initialize database tables
- Set up administrator account

You can:

1. Visit `http://localhost:8082` to view the forum homepage
2. Visit `http://localhost:8082/admin` to enter the admin panel
3. Use the administrator account set during installation to log in to the backend for further configuration

## 🌐 Step 4: Operations After Initialization

### 4.1 Access Forum Homepage

After installation is complete, you can:

1. Open browser and visit `http://localhost:8082` to view the forum homepage
2. If installing on a server, replace `localhost` with the server's IP address
3. You will see a beautiful forum interface

### 4.2 Log in to Admin Panel

1. Visit `http://localhost:8082/admin`
2. Use the administrator account set during installation to log in
3. Various configuration and management operations can be performed in the admin panel

## 🔧 Common Problem Solutions

### Q1: Program startup failed, port occupied error

**Solution:**

Stop other programs occupying the port

### Q2: Database connection failed

**Solution:**

1. Check if MySQL is running normally
2. Verify if database username and password are correct
3. Confirm if database name exists
4. Check if database service is started

### Q3: Cannot access website

**Solution:**

1. Check if firewall is blocking port access
2. Confirm if program started normally
3. Verify if access address and port are correct

### Q4: File upload failed

**Solution:**

The system currently supports Alibaba Cloud OSS and Tencent Cloud COS for file uploads. Please log in to BBS-GO backend > System Settings > Upload Configuration to set up

## 📞 Get Help

If you encounter problems that cannot be solved, you can get help through the following ways:

1. **Check official documentation**: [https://bbs-go.com](https://bbs-go.com)
2. **Problem feedback**: [https://bbs.bbs-go.com/topics/node/3](https://bbs.bbs-go.com/topics/node/3)
3. **QQ chat group**: [Join official user chat group](https://bbs-go.com/docs/contact)
4. **GitHub Issues**: [Submit issues on project page](https://github.com/mlogclub/bbs-go/issues)

## 🚀 Advanced Usage

### Production Environment Deployment

For production environment use, it is recommended to:

1. **Use reverse proxy**: Configure Nginx as reverse proxy
2. **Enable HTTPS**: Configure SSL certificate
3. **Data backup**: Regularly backup database and uploaded files
4. **Service monitoring**: Set up service monitoring and automatic restart
5. **Performance optimization**: Adjust database connection pool and other parameters according to traffic

### Custom Configuration

The system supports rich custom configurations, including:

- Channel category configuration
- User registration and login settings
- Points and level system
- Content moderation rules
- Email notification configuration

---

**Enjoy using it! If this manual is helpful to you, please give the project a ⭐️ for support!**
