# DevOps | Angular | API | Azure 

- Using DevOps automation for CI/CD
- Using Angular for FrontEnd
- Using Nodejs for Backend
- SQLServer as Backend Database (data Warehouse)

## on DevOps Success

- [Azure WebApp Hosting](https://superusers-kursus-angular-2020.azurewebsites.net)


## REST API (Http and PowerShell)

```powershell
$url = "https://superusers-kursus-angular-2020.azurewebsites.net/api/v1/kursus"

# pip install httpie
(http get "$url/?dato=202002" | ConvertFrom-Json ).KalenderList
```
