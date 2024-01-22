resource "azurerm_resource_group" "rg" {
  name     = "Fontys_NL"
  location = var.location
}
resource "azurerm_virtual_network" "vnet2" {
  name                = "Vlan-88"
  address_space       = ["192.168.88.0/24"]
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location
}