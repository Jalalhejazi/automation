## superusers-kursus-angular-2020

- Using DevOps automation 

- [![Build Status](https://dev.azure.com/superusers-kursus/angular/_apis/build/status/angular-2020?branchName=master)](https://dev.azure.com/superusers-kursus/angular/_build/latest?definitionId=81&branchName=master)

## on DevOps Success

- [Azure WebApp Hosting](https://superusers-kursus-angular-2020.azurewebsites.net)


## REST API (Http and PowerShell)

```powershell
$url = "https://superusers-kursus-angular-2020.azurewebsites.net/api/v1/kursus"

(http get "$url/?dato=202002" | ConvertFrom-Json ).KalenderList
```