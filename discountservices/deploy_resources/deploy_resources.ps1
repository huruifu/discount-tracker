$ResourceGroupName = 'discount-list-group'
$StorageAccountName = 'discountstorage'
$FunctionAppName = 'discount-function-app'
$Location = 'Canada Central'

# Create Resource Group
az storage account create --name $StorageAccountName --location $Location --resource-group $ResourceGroupName --sku Standard_LRS

# Create function app
az functionapp create `
  --resource-group $ResourceGroupName `
  --consumption-plan-location $Location `
  --runtime python `
  --runtime-version 3.10 `
  --functions-version 4 `
  --name $FunctionAppName `
  --os-type linux `
  --storage-account $StorageAccountName