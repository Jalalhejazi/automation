# DevOps | Angular | API | Azure 

- Using DevOps automation
  - ARM Template for IaaC 
  - YAML pipeline for CI/CD 
- Using Angular for FrontEnd
- Using Nodejs for Backend
- SQLServer as Backend Database (data Warehouse optimized for Web)

## on DevOps Success

- [Azure WebApp Hosting](https://superusers-kursus-angular-2020.azurewebsites.net)


## REST API (Http and PowerShell)

```powershell
$url = "https://superusers-kursus-angular-2020.azurewebsites.net/api/v1/kursus"

# pip install httpie
(http get "$url/?dato=202002" | ConvertFrom-Json ).KalenderList
```
