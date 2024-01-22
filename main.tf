resource "azurerm_resource_group" "rg" {
 ccc==dd
}
resource "azurerm_virtual_network" "vnet2" {
  name                = "Vlan-99"
  address_space       = ["192.168.88.0/24"]
  resource_group_name = resourceg.name
  }