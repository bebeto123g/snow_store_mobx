import { makeAutoObservable } from 'mobx'

class CatalogMap {
  catalogMap = null

  constructor() {
    makeAutoObservable(this)
  }

  load(catalog) {
    const mapCatalog = {}
    catalog.forEach(({ id }, index) => {
      mapCatalog[id] = index
    })
    this.catalogMap = mapCatalog
  }
}

export default new CatalogMap()